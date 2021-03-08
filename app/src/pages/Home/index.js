import "./styles.scss";

import CreateEmployeeDialog from "../../components/CreateEmployeeDialog";
import EmployeeList from "../../components/EmployeeList";
import Navbar from "../../components/Navbar";

import * as DialogsActions from "../../store/actions/dialogs";
import * as EmployeesActions from "../../store/actions/employees";

import { batch, useSelector } from "react-redux";
import DeleteEmployeeDialog from "../../components/DeleteEmployeeDialog";
import { api } from "../../services/ApiService";
import { useCallback } from "react";
import { useAction } from "../../store/actions";

export default function Home() {
  const state = useSelector((state) => state);

  const toggleDialog = useAction(DialogsActions.toggleDialog);
  const refreshEmployees = useAction(EmployeesActions.refreshEmployees);

  const onDismissDelete = useCallback(
    () =>
      batch(() => {
        toggleDialog({
          ...state.dialogs,
          deleteEmployee: { visible: false, employee: null },
        });
        refreshEmployees({ list: null });
      }),
    [refreshEmployees, toggleDialog, state]
  );

  const onClickDelete = (employee) => {
    api.delete(`nutemployee/${employee._id}/`).then(() => {
      onDismissDelete();
    });
  };
  return (
    <div id="home-container">
      <Navbar />
      <EmployeeList className="employee-list" />
      <CreateEmployeeDialog
        visible={state.dialogs.employeeForm.visible}
        onClickOutside={() =>
          toggleDialog({
            ...state.dialogs,
            employeeForm: { visible: false, employee: state.dialogs.employee },
          })
        }
      />
      <DeleteEmployeeDialog
        visible={state.dialogs.deleteEmployee.visible}
        onClickOutside={onDismissDelete}
        onClickDelete={onClickDelete}
      />
    </div>
  );
}
