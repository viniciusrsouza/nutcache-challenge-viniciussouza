import "./styles.scss";
import { Search, Add } from "react-ionicons";

export default function Navbar() {
  return (
    <div id="navbar-container">
      <div id="navbar-search-bar">
        <div className="navbar-icon">
          <Search color="#f6f6f6" height="32px" width="32px" />
        </div>
        <input type="text" id="navbar-search-bar-input" />
      </div>
      <div className="navbar-icon">
        <Add color="#f6f6f6" height="32px" width="32px" />
      </div>
    </div>
  );
}
