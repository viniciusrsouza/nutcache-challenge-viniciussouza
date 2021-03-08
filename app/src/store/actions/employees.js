export function refreshEmployees(employees) {
  return {
    type: "REFRESH_EMPLOYEES",
    employees,
  };
}
