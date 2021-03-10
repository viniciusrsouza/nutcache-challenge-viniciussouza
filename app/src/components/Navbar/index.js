import "./styles.scss";
import { FaPlus } from "react-icons/fa";

import { useSelector } from "react-redux";
import * as DialogActions from "../../store/actions/dialogs";
import { useAction } from "../../store/actions";

export default function Navbar() {
  const dialogs = useSelector((state) => state.dialogs);
  const toggleDialog = useAction(DialogActions.toggleDialog);

  return (
    <div className="navbar-container">
      <div className="navbar-title">Employees Management</div>
      <div
        className="add-container"
        onClick={() =>
          toggleDialog({
            ...dialogs,
            employeeForm: { visible: true, employee: null },
          })
        }
      >
        <FaPlus className="navbar-icon" />
      </div>
    </div>
  );
}
