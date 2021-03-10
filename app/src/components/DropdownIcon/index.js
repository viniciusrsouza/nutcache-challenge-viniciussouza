import { useState } from "react";
import "./styles.scss";

export default function DropdownIcon({
  Icon,
  options,
  onClickOption,
  ...props
}) {
  const [show, setShow] = useState(false);
  const onClickOutside = (event) => {
    if (show) {
      event.stopPropagation();
      setShow(false);
    }
  };

  const _onClickOption = (option) => {
    onClickOption(option);
    setShow(false);
  };

  return (
    <div>
      <div
        className={`drop-outside ${show ? "drop-outside-visible" : ""}`}
        onClick={onClickOutside}
      />
      <Icon className="drop-button" onClick={() => setShow(true)} {...props} />
      <div className={`drop-content ${show ? "display-content-visible" : ""}`}>
        {options.map((option, index) => (
          <div key={index} onClick={() => _onClickOption(option)}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
