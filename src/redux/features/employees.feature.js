import {EmployeeService} from "../../services/EmployeeService";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    employees : EmployeeService.getAllEmployees()
}

const employeeSlice = createSlice({
    name : 'employees',
    initialState : initialState,
    reducers : {
        updateSelected : function (state , action){
           state.employees = state.employees.map(employee => {
                if(employee.id === action.payload){
                    return {
                        ...employee,
                        isSelected : !employee.isSelected
                    }
                }
                else return employee;
            });
        }
    }
});
export const {updateSelected} = employeeSlice.actions;
export default employeeSlice.reducer;
