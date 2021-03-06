import { useEffect, useState } from "react";
import "./styles.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as FormActions from "../../store/actions/form";

function FormField({
  employee,
  onUpdateEmployee,
  onFormSave,
  FormIcon,
  children,
  name,
  ...props
}) {
  const [text, setText] = useState("");
  useEffect(() => {
    console.log(employee);
    employee[name] = text;
    onUpdateEmployee(employee);
  }, [text, employee, name, onUpdateEmployee]);
  return (
    <div className="form-field">
      <FormIcon className="form-icon" />
      <input
        {...props}
        name={name}
        className="input"
        value={text}
        onChange={({ target }) => setText(target.value)}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({ employee: state.form.employee });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(FormActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormField);
