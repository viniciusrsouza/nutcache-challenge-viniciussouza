import "./styles.scss";
import { FaEllipsisH } from "react-icons/fa";
import DropdownIcon from "../DropdownIcon";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as DialogActions from "../../store/actions/dialogs";

function EmployeeList({ employees, dialogs, toggleDialog, ...props }) {
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
    <div className="employee-list-container">
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
          {employees.map((employee) => (
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

const mapStateToProps = (state) => ({
  employees: state.employees,
  dialogs: state.dialogs,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(DialogActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
