import CreateEmployeeDialog from "../../components/CreateEmployeeDialog";
import Navbar from "../../components/Navbar";
import { useHomeContext } from "./context";
import "./styles.scss";

export default function Home() {
  const context = useHomeContext();
  return (
    <div id="home-container">
      <Navbar context={context} />
      <CreateEmployeeDialog
        visible={context.createDialog}
        onClickOutside={() => context.setCreateDialog(false)}
      />
    </div>
  );
}
