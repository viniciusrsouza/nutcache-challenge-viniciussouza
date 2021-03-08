import "./styles.scss";

import { useSelector } from "react-redux";
import * as FormActions from "../../store/actions/form";
import { useAction } from "../../store/actions";

export default function FormField({ FormIcon, children, name, ...props }) {
  const employee = useSelector((state) => state.form.employee);
  const onUpdateEmployee = useAction(FormActions.onUpdateEmployee);

  const onChange = ({ target }) => {
    employee[name] = target.value;
    onUpdateEmployee(employee);
  };

  return (
    <div className="form-field">
      <FormIcon className="form-icon" />
      <input
        {...props}
        name={name}
        className="input"
        value={employee[name] || ""}
        onChange={onChange}
      />
    </div>
  );
}
