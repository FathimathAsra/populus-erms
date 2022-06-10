import axios from 'axios';

class SalaryRecordsService {

    deleteSalary(id) {
        axios.get('http://localhost:5000/salary/salary/deleteSalary/' + id)
            .then(() => {
                if (alert('Salary Record Deleted !!!')) { }
                else window.location.reload();
            })
            .catch((error) => {
                console.log(error) 
            })
    }
}

export default SalaryRecordsService;