import "./styles.scss";

import CreateEmployeeDialog from "../../components/CreateEmployeeDialog";
import EmployeeList from "../../components/EmployeeList";
import Navbar from "../../components/Navbar";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as DialogActions from "../../store/actions/dialogs";

function Home({ state, toggleDialog }) {
  return (
    <div id="home-container">
      <Navbar />
      <EmployeeList />
      <CreateEmployeeDialog
        visible={state.dialogs.employeeForm}
        onClickOutside={() =>
          toggleDialog({ ...state.dialogs, employeeForm: false })
        }
      />
    </div>
  );
}

const mapStateToProps = (state) => ({ state: state });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(DialogActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
