import "./styles.scss";
import EmployeeComponent from "../EmployeeComponent";

import * as EmployeesActions from "../../store/actions/employees";
import { useAction } from "../../store/actions";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import { api } from "../../services/ApiService";

export default function EmployeeList() {
  const employees = useSelector((state) => state.employees);

  const refreshEmployees = useAction(EmployeesActions.refreshEmployees);

  useEffect(() => {
    if (!employees.list) {
      api.get("/nutemployee").then((res) => {
        if (res.data) {
          refreshEmployees({ list: res.data });
        }
      });
    }
  });

  return (
    <div className="employees-container">
      {employees.list?.map((employee) => (
        <EmployeeComponent employee={employee} key={employee._id} />
      ))}
    </div>
  );
}
