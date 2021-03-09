import Dialog from "../Dialog";
import "./styles.scss";
import { api } from "../../services/ApiService";
import CPF from "cpf";
import EMAIL from "email-validator";

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
  const onError = useAction(FormActions.onError);

  useEffect(() => {
    if (employee && employee._id !== form.employee._id) {
      onUpdateEmployee(employee);
    } else if (!employee && form.employee._id) {
      onFormSave();
    }
  });

  const save = () => {
    console.log(form);
    const errors = validateFields(form.employee);
    if (Object.keys(errors).length !== 0) {
      onError(errors);
      return;
    }

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
          displayName="Full Name"
          required
        />
        <FormField
          FormIcon={FaBirthdayCake}
          type="date"
          name="date_of_birth"
          displayName="Date of Birth"
          required
        />
        <FormField
          FormIcon={FaAt}
          type="email"
          name="email"
          displayName="Email"
          required
        />
        <FormField
          FormIcon={FaTransgenderAlt}
          listId="genders"
          list={["", "Male", "Female", "Other", "Prefer not to say"]}
          name="gender"
          displayName="Gender"
          required
        />
        <FormField
          FormIcon={FaIdCard}
          type="text"
          name="cpf"
          displayName="CPF"
          required
        />
        <FormField
          FormIcon={FaCalendarAlt}
          type="month"
          name="start_date"
          displayName="Start Date"
          required
        />
        <FormField
          FormIcon={FaUsers}
          name="team"
          displayName="Team"
          listId="teams"
          list={["", "Mobile", "Frontend", "Backend"]}
        />
      </form>
      <button className="button" onClick={save} type="submit">
        <FaCheck id="icon" /> <p>Save</p>
      </button>
    </Dialog>
  );
}

function validateFields({
  name,
  date_of_birth,
  gender,
  email,
  cpf,
  start_date,
}) {
  const required = "This field is required!";
  const r = {};
  if (!name) r.name = required;
  if (!date_of_birth) r.date_of_birth = required;
  else {
    const [y, m, d] = date_of_birth.split("-");
    if (!y || !m || !d) r.date_of_birth = required;
  }
  if (!gender) r.gender = required;

  if (!email) r.email = required;
  else if (!EMAIL.validate(email)) r.email = "Email not valid.";

  if (!cpf) r.cpf = required;
  else if (!CPF.isValid(cpf)) r.cpf = "CPF not valid.";

  if (!start_date) r.start_date = required;
  else {
    const [y, m] = start_date.split("-");
    if (!y || !m) r.start_date = required;
  }

  return r;
}
