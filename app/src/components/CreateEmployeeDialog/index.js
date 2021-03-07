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
  employee,
  onUpdateEmployee,
  onFormSave,
  resetEmployee,
  onClickOutside,
  ...props
}) {
  useEffect(() => {
    if (employee && employee._id !== form.employee._id) {
      onUpdateEmployee(employee);
    } else if (!employee && form.employee._id) {
      resetEmployee();
    }
  });

  useEffect(() => {
    if (form.saving) {
      if (form.employee._id) {
        api
          .put(`/nutemployee/${form.employee._id}/`, form.employee)
          .then(() => {})
          .catch(() => {})
          .finally(() => {
            onFormSave({ ...form, saving: false });
            onClickOutside();
          });
      } else {
        api
          .post("/nutemployee/", form.employee)
          .then((_) => {
            onFormSave({ ...form, saving: false });
            onClickOutside();
          })
          .catch(() => {})
          .finally(() => {
            onFormSave({ ...form, saving: false });
            onClickOutside();
          });
      }
    }
  }, [form, onFormSave, onClickOutside]);

  return (
    <Dialog
      className="create-employee-container"
      title={form.employee._id ? "Edit Employee" : "Create Employee"}
      onClickOutside={onClickOutside}
      {...props}
    >
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

const mapStateToProps = (state) => ({
  form: state.form,
  employee: state.dialogs.employeeForm.employee,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(FormActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEmployeeDialog);
