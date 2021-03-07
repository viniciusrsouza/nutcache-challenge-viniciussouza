import "./styles.scss";

import CreateEmployeeDialog from "../../components/CreateEmployeeDialog";
import EmployeeList from "../../components/EmployeeList";
import Navbar from "../../components/Navbar";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as DialogActions from "../../store/actions/dialogs";
import DeleteEmployeeDialog from "../../components/DeleteEmployeeDialog";
import { api } from "../../services/ApiService";

function Home({ state, toggleDialog }) {
  const onDismissDelete = () => {
    toggleDialog({
      ...state.dialogs,
      deleteEmployee: { visible: false, employee: null },
    });
  };

  const onClickDelete = (employee) => {
    api.delete(`employee/${employee._id}/`).then(() => {
      onDismissDelete();
    });
  };
  return (
    <div id="home-container">
      <Navbar />
      <EmployeeList />
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

const mapStateToProps = (state) => ({ state: state });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(DialogActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
