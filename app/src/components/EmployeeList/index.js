import "./styles.scss";
import { FaEllipsisH } from "react-icons/fa";
import DropdownIcon from "../DropdownIcon";

import * as DialogActions from "../../store/actions/dialogs";
import * as EmployeesActions from "../../store/actions/employees";
import { useAction } from "../../store/actions";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import { api } from "../../services/ApiService";

export default function EmployeeList({ ...props }) {
  const { employees, dialogs } = useSelector((state) => ({
    employees: state.employees,
    dialogs: state.dialogs,
  }));

  const toggleDialog = useAction(DialogActions.toggleDialog);
  const refreshEmployees = useAction(EmployeesActions.refreshEmployees);

  useEffect(() => {
    if (!employees.list) {
      api.get("/nutemployee").then((res) => {
        if (res.data) {
          refreshEmployees({ list: res.data });
        }
      });
    }
  });

  const OPTIONS = {
    edit: (employee) => {
      toggleDialog({
        ...dialogs,
        employeeForm: { visible: true, employee: employee },
      });
    },
    delete: (employee) => {
      toggleDialog({
        ...dialogs,
        deleteEmployee: { visible: true, employee: employee },
      });
    },
  };

  return (
    <div {...props} className="employee-list-container">
      <table>
        <thead>
          <tr>
            <th>
              <span className="column-start">
                <input className="checkbox" type="checkbox" />
              </span>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Start Date</th>
            <th>Team</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {employees.list?.map((employee, index) => (
            <tr key={employee._id}>
              <td className="column-start">
                <input type="checkbox" />
              </td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.start_date}</td>
              <td>{employee.team}</td>
              <td className="column-end">
                <DropdownIcon
                  Icon={FaEllipsisH}
                  options={Object.keys(OPTIONS)}
                  onClickOption={(option) => OPTIONS[option](employee)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
