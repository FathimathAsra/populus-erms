import express from 'express';
const app = express();
const salaryRoute = express.Router();
import salaryModel from "../models/SalaryModels.js"


// To Get List Of Employees
salaryRoute.route('/salary').get(function (req, res) {
    salaryModel.find(function (err, salary) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(salary);
        }
    });
});

// To Add New Employee
salaryRoute.route('/salary/addSalary').post(function (req, res) {
    let salary = new salaryModel (req.body);
    salary.save()
        .then(game => {
            res.status(200).json({ 'salary': 'Salary record Added Successfully' });
        })
        .catch(err => {
            res.status(400).send("Something Went Wrong");
        });


});

// To Get Employee Details By Employee ID
// salaryRoute.route('/editSalary/:id').get(function (req, res) {
//     let id = req.params.id;
//     employeeModel.findById(id, function (err, employee) {
//         res.json(employee);
//     });
// });

// To Update The Employee Details
// employeeRoute.route('/updateEmployee/:id').post(function (req, res) {
//     employeeModel.findById(req.params.id, function (err, employee) {
//         if (!employee)
//             return next(new Error('Unable To Find Employee With This Id'));
//         else {
//             employee.name = req.body.name;
//             employee.position = req.body.position;
//             employee.phoneno = req.body.phoneno;
//             employee.department = req.body.department;
//             employee.address = req.body.address;
//             employee.email = req.body.email;
//             employee.education = req.body.education;
//             employee.mstatus = req.body.mstatus;
//             employee.salary = req.body.salary;

//             employee.save().then(emp => {
//                 res.json('Employee Updated Successfully');
//             })
//                 .catch(err => {
//                     res.status(400).send("Unable To Update Employee");
//                 });
//         }
//     });
// });

// To Delete The Employee
salaryRoute.route('/salary/deleteSalary/:id').get(function (req, res) {
    salaryModel.findByIdAndRemove({ _id: req.params.id }, function (err, salary) {
        if (err) res.json(err);
        else res.json('Salary Record Deleted Successfully');
    });
});

export default salaryRoute;