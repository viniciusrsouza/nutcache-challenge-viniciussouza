import "./styles.scss";

import { useSelector } from "react-redux";
import * as FormActions from "../../store/actions/form";
import { useAction } from "../../store/actions";
import { useEffect, useState } from "react";
import CPF from "cpf";

export default function FormField({
  FormIcon,
  name,
  displayName,
  type,
  required,
  list,
  listId,
  ...props
}) {
  const employee = useSelector((state) => state.form.employee);
  const errors = useSelector((state) => state.form.errors);
  const onUpdateEmployee = useAction(FormActions.onUpdateEmployee);
  const onError = useAction(FormActions.onError);

  useEffect(() => {
    if ((type === "date" || type === "month") && employee[name]) {
      const [date, _rest] = employee[name].split("T");
      if (_rest) {
        const [year, month, day] = date.split("-");
        let _date;
        switch (type) {
          case "date":
            _date = `${year}-${month}-${day}`;
            break;
          case "month":
            _date = `${year}-${month}`;
            break;
          default:
            return;
        }
        employee[name] = _date;
        onUpdateEmployee(employee);
      }
    }
  });

  const [focused, setFocused] = useState(false);
  useEffect(() => {
    if (focused) errors[name] = "";
    onError(errors);
  }, [focused, errors, name, onError]);
  let input = null;

  const onChange = ({ target }) => {
    employee[name] = target.value;
    if (name === "cpf") {
      if (target.value.length === 11 && /^\d+$/.test(target.value)) {
        employee[name] = CPF.format(target.value);
      }

      if (!/^(\d|-|\.)+$/.test(target.value) && !CPF.isValid(target.value)) {
        employee[name] = target.value.slice(0, -1);
      }
    }
    if (list && target.value && !list.includes(target.value)) {
      const approx =
        list.find((e) => e.toLowerCase().startsWith(target.value)) || "";
      employee[name] = approx;
    }
    onUpdateEmployee(employee);
  };

  return (
    <div className={`form-field ${errors[name] ? "form-field-error" : ""}`}>
      <FormIcon
        className={`form-icon ${focused ? "focus" : ""}`}
        onClick={() => {
          input?.focus();
        }}
      />
      <div className="pseudo-div">
        <p
          className={`${employee[name] ? "filled" : ""} 
            ${focused ? "focus" : ""}`}
          onClick={() => input?.focus()}
        >
          {displayName + (required ? "*" : "")}
        </p>
        <p
          className={`error-message 
          ${errors[name] ? "error-message-visible" : ""}`}
        >
          {errors[name]}
        </p>
      </div>
      <input
        {...props}
        onKeyDown={() => false}
        list={list ? listId : ""}
        type={focused || employee[name] ? type : "text"}
        autoComplete={list ? "off" : "on"}
        ref={(ref) => (input = ref)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        name={name}
        className="input"
        value={employee[name] || ""}
        onChange={onChange}
      />

      {list ? (
        <datalist id={listId}>
          {list.map((option, index) => (
            <option value={option} key={index} />
          ))}
        </datalist>
      ) : (
        <span />
      )}
    </div>
  );
}
