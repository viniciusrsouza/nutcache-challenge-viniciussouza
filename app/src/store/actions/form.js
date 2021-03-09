export function onUpdateEmployee(employee) {
  return {
    type: "ON_UPDATE_EMPLOYEE",
    employee,
  };
}

export function onFormSave() {
  return {
    type: "ON_FORM_SAVE",
  };
}

export function onError(errors) {
  return {
    type: "ON_ERROR",
    errors,
  };
}
