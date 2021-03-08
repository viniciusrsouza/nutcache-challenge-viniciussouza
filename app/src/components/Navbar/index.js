import "./styles.scss";
import { FaPlus, FaSearch } from "react-icons/fa";

import { useSelector } from "react-redux";
import * as DialogActions from "../../store/actions/dialogs";
import { useAction } from "../../store/actions";

export default function Navbar() {
  const dialogs = useSelector((state) => state.dialogs);
  const toggleDialog = useAction(DialogActions.toggleDialog);

  return (
    <div id="navbar-container">
      <div id="navbar-search-bar">
        <FaSearch className="navbar-icon" />
        <input type="text" id="navbar-search-bar-input" />
      </div>
      <div>
        <FaPlus
          className="navbar-icon"
          onClick={() =>
            toggleDialog({
              ...dialogs,
              employeeForm: { visible: true, employee: null },
            })
          }
        />
      </div>
    </div>
  );
}
