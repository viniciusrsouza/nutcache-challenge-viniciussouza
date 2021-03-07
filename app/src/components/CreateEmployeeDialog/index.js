import Dialog from "../Dialog";
import "./styles.scss";
import { api } from "../../services/ApiService";

import {
  FaUser,
  FaCalendarAlt,
  FaAt,
  FaTransgenderAlt,
  FaIdCard,
  FaBirthdayCake,
  FaCheck,
  FaUsers,
} from "react-icons/fa";
import FormField from "../FormField";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as FormActions from "../../store/actions/form";
import { useEffect } from "react";

function CreateEmployeeDialog({
  form,
  onUpdateEmployee,
  onFormSave,
  onClickOutside,
  ...props
}) {
  useEffect(() => {
    if (form.saving) {
      console.log("sending");
      api.post("/nutemployee", form.employee).then((_) => {
        onFormSave({ ...form, saving: false });
        onClickOutside();
      });
    }
  }, [form, onFormSave, onClickOutside]);

  let dismiss = () => {
    if (!form.saving) onClickOutside();
  };

  return (
    <Dialog
      className="create-employee-container"
      onClickOutside={dismiss}
      {...props}
    >
      <div className="title">
        <h1>Add Employee</h1>
        <h2 className="button" onClick={dismiss}>
          {"X"}
        </h2>
      </div>
      <form>
        <FormField
          FormIcon={FaUser}
          type="text"
          name="name"
          placeholder="Full Name"
        />
        <FormField
          FormIcon={FaBirthdayCake}
          type="date"
          name="date_of_birth"
          placeholder="dd/mm/aaaa"
        />
        <FormField
          FormIcon={FaAt}
          type="email"
          name="email"
          placeholder="example@email.com"
        />
        <FormField
          FormIcon={FaTransgenderAlt}
          type="text"
          name="gender"
          placeholder="Gender"
        />
        <FormField
          FormIcon={FaIdCard}
          type="number"
          name="cpf"
          placeholder="000.000.000-00"
        />
        <FormField
          FormIcon={FaCalendarAlt}
          type="month"
          name="start_date"
          placeholder="mm/aaaa"
        />
        <FormField
          FormIcon={FaUsers}
          type="text"
          name="team"
          placeholder="Team"
        />
      </form>
      <button
        className="button"
        onClick={() => onFormSave({ ...form, saving: true })}
      >
        <FaCheck id="icon" /> <p>Save</p>
      </button>
    </Dialog>
  );
}

const mapStateToProps = (state) => ({ form: state.form });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(FormActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEmployeeDialog);
