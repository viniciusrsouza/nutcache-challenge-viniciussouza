import "./styles.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as FormActions from "../../store/actions/form";

function FormField({
  form,
  onUpdateEmployee,
  onFormSave,
  resetEmployee,
  FormIcon,
  children,
  name,
  ...props
}) {
  const { employee } = form;

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

const mapStateToProps = (state) => ({ form: state.form });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(FormActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormField);
