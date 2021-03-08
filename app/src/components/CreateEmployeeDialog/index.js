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

import { batch, useSelector } from "react-redux";
import * as FormActions from "../../store/actions/form";
import * as EmployeesActions from "../../store/actions/employees";
import { useEffect } from "react";
import { useAction } from "../../store/actions";

export default function CreateEmployeeDialog({ onClickOutside, ...props }) {
  const { form, employee } = useSelector((state) => ({
    form: state.form,
    employee: state.dialogs.employeeForm.employee,
  }));

  const onUpdateEmployee = useAction(FormActions.onUpdateEmployee);
  const onFormSave = useAction(FormActions.onFormSave);
  const refreshEmployees = useAction(EmployeesActions.refreshEmployees);

  useEffect(() => {
    if (employee && employee._id !== form.employee._id) {
      console.log("entrou");
      onUpdateEmployee(employee);
    } else if (!employee && form.employee._id) {
      console.log("entrou2");
      onFormSave();
    }
  });

  const save = () => {
    if (form.employee._id) {
      api
        .put(`/nutemployee/${form.employee._id}/`, form.employee)
        .then(() => {})
        .catch(() => {})
        .finally(() => {
          batch(() => {
            onFormSave();
            refreshEmployees({ list: null });
          });
          onClickOutside();
        });
    } else {
      api
        .post("/nutemployee/", form.employee)
        .then(() => {})
        .catch(() => {})
        .finally(() => {
          batch(() => {
            onFormSave();
            refreshEmployees({ list: null });
          });
          onClickOutside();
        });
    }
  };

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
      <button className="button" onClick={save}>
        <FaCheck id="icon" /> <p>Save</p>
      </button>
    </Dialog>
  );
}
