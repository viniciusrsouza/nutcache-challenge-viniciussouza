import "./styles.scss";

import { useSelector } from "react-redux";
import Dialog from "../Dialog";
import { FaTrash } from "react-icons/fa";

export default function DeleteEmployeeDialog({ onClickDelete, ...props }) {
  const { employee } = useSelector((state) => ({
    employee: state.dialogs.deleteEmployee.employee,
  }));

  return (
    <Dialog title="Delete Employee" {...props}>
      <p className="dialog-text">
        Are you sure that you want to delete{" "}
        <span className="employee-data">{employee?.name}</span> (
        <span className="employee-data">{employee?.email}</span>)? <br />
        This cannot be undone!
      </p>

      <button className="button" onClick={() => onClickDelete(employee)}>
        <FaTrash id="icon" /> <p>Delete</p>
      </button>
    </Dialog>
  );
}
