import Dialog from "../Dialog";
import "./styles.scss";

import {
  FaUser,
  FaCalendarAlt,
  FaAt,
  FaTransgenderAlt,
  FaIdCard,
  FaBirthdayCake,
} from "react-icons/fa";
import FormField from "../FormField";

export default function CreateEmployeeDialog(props) {
  return (
    <Dialog className="create-employee-container" {...props}>
      <h1>Add Employee</h1>
      <form id="create-employee-form">
        <FormField
          FormIcon={FaUser}
          type="text"
          name="name"
          placeholder="Full Name"
        />
        <FormField FormIcon={FaBirthdayCake} type="date" name="birthdate" />
        <FormField
          FormIcon={FaAt}
          type="email"
          name="email"
          placeholder="example@email.com"
        />
        <FormField
          FormIcon={FaTransgenderAlt}
          type="gender"
          name="gender"
          placeholder="male"
        />
        <FormField
          FormIcon={FaIdCard}
          type="text"
          name="cpf"
          placeholder="000.000.000-00"
        />
        <FormField FormIcon={FaCalendarAlt} type="date" name="start-date" />
      </form>
    </Dialog>
  );
}
