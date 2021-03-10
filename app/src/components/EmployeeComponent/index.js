import "./styles.scss";

import { FaEllipsisV, FaUser } from "react-icons/fa";
import { monthToString } from "../../util/DateParser";
import DropdownIcon from "../DropdownIcon";

import * as DialogActions from "../../store/actions/dialogs";
import { useAction } from "../../store/actions";

import { useSelector } from "react-redux";

export default function EmployeeComponent({ employee }) {
  const dialogs = useSelector((state) => state.dialogs);

  const toggleDialog = useAction(DialogActions.toggleDialog);

  const prettyDate = (date) => {
    const [y, m] = date.split("T")[0].split("-");
    return `${monthToString(parseInt(m) - 1)}, ${y}`;
  };

  const parseTeam = (team) => {
    return team || "Not part of a team";
  };

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
    <div className="employee-container">
      <div style={{ display: "flex" }}>
        <FaUser className="icon" />
        <div className="data-container">
          <div className="text name">{employee.name}</div>
          <a className="text email" href={`mailto: ${employee.email}`}>
            ({employee.email})
          </a>
          <div>
            <span className="text start_date">
              Joined at {prettyDate(employee.start_date)}
            </span>
            <span>{" - "}</span>
            <span className="text team">{parseTeam(employee.team)}</span>
          </div>
        </div>
      </div>
      <div className="clickable-icon-container">
        <DropdownIcon
          Icon={FaEllipsisV}
          className="clickable-icon"
          options={Object.keys(OPTIONS)}
          onClickOption={(option) => OPTIONS[option](employee)}
        />
      </div>
    </div>
  );
}
