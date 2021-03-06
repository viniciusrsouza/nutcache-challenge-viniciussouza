import "./styles.scss";

export default function FormField({ FormIcon, children, ...props }) {
  return (
    <div className="form-field">
      <FormIcon className="form-icon" />
      <input {...props} />
    </div>
  );
}
