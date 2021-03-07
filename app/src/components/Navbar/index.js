import "./styles.scss";
import { FaPlus, FaSearch } from "react-icons/fa";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as DialogActions from "../../store/actions/dialogs";

function Navbar({ dialogs, toggleDialog }) {
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

const mapStateToProps = (state) => ({ dialogs: state.dialogs });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(DialogActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
