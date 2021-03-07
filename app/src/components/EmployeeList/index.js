import "./styles.scss";
import { connect } from "react-redux";
import { FaEllipsisH } from "react-icons/fa";
import DropdownIcon from "../DropdownIcon";

function EmployeeList({ employees, ...props }) {
  console.log(employees);

  const OPTIONS = {
    edit: () => {
      console.log("editing");
    },
    delete: () => {
      console.log("deleting");
    },
  };

  return (
    <div className="emplyee-list-container">
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
                  onClickOption={(option) => OPTIONS[option]()}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => ({ employees: state.employees });

export default connect(mapStateToProps)(EmployeeList);
