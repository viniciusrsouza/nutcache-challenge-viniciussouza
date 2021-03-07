import "./styles.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as DialogActions from "../../store/actions/dialogs";
import Dialog from "../Dialog";
import { FaTrash } from "react-icons/fa";

function DeleteEmployeeDialog({
  employees,
  dialogs,
  onClickDelete,
  toggleDialog,
  ...props
}) {
  const employee = dialogs.deleteEmployee.employee;
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

const mapStateToProps = (state) => ({
  dialogs: state.dialogs,
  employees: state.employees,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(DialogActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteEmployeeDialog);
