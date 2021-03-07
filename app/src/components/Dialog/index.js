import "./styles.scss";

export default function Dialog({
  children,
  visible,
  title,
  onClickOutside,
  ...props
}) {
  return (
    <div
      className={`dialog-root ${getVisibilityClass(visible)}`}
      onClick={onClickOutside}
    >
      <div
        {...props}
        id="dialog-container"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="title">
          <h1>{title}</h1>
          <h2 className="button" onClick={onClickOutside}>
            {"X"}
          </h2>
        </div>
        {children}
      </div>
    </div>
  );
}

function getVisibilityClass(isVisible) {
  if (isVisible) return "dialog-root-visible";
  else return "dialog-root-invisible";
}
