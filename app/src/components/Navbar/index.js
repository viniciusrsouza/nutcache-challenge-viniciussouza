import "./styles.scss";
import { FaPlus, FaSearch } from "react-icons/fa";

export default function Navbar({ context }) {
  return (
    <div id="navbar-container">
      <div id="navbar-search-bar">
        <FaSearch className="navbar-icon" />
        <input type="text" id="navbar-search-bar-input" />
      </div>
      <div>
        <FaPlus
          className="navbar-icon"
          onClick={() => context.setCreateDialog(true)}
        />
      </div>
    </div>
  );
}
