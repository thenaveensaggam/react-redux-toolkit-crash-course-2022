import counterReducer from './features/counter.feature';
import employeeReducer from './features/employees.feature';
import userListReducer from './features/user-list.feature';

const rootReducer = {
    counter : counterReducer,
    employees : employeeReducer,
    users : userListReducer
}
export default rootReducer;
