import axios from 'axios';

class EmployeeService {

    deleteEmployee(id) {
        axios.get('http://localhost:5000/employees/deleteEmployee/' + id)
            .then(() => {
                if (alert('Employee Deleted !!!')) { }
                else window.location.reload();
            })
            .catch((error) => {
                console.log(error)
            })
    } 
}

export default EmployeeService;