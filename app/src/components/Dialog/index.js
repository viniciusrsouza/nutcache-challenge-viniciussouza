import "./styles.scss";

export default function Dialog({
  children,
  visible,
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
        {children}
      </div>
    </div>
  );
}

function getVisibilityClass(isVisible) {
  if (isVisible) return "dialog-root-visible";
  else return "dialog-root-invisible";
}
