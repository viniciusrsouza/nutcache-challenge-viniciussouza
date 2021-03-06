export function onUpdateEmployee(employee) {
  return {
    type: "ON_UPDATE_EMPLOYEE",
    employee,
  };
}

export function onFormSave(form) {
  return {
    type: "ON_FORM_SAVE",
    form,
  };
}
