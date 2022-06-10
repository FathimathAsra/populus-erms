import express from 'express';
const app = express();
const employeeRoute = express.Router();
import employeeModel from "../models/EmployeeModel.js"

employeeRoute.route('/').get(function (req, res) {
    employeeModel.find(function (err, employee) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(employee);
        }
    });
});


employeeRoute.route('/addEmployee').post(function (req, res) {
    let employee = new employeeModel(req.body);
    employee.save()
        .then(game => {
            res.status(200).json({ 'employee': 'Employee Added Successfully' });
        })
        .catch(err => {
            res.status(400).send("Something Went Wrong");
        });


});

employeeRoute.route('/deleteEmployee/:id').get(function (req, res) {
    employeeModel.findByIdAndRemove({ _id: req.params.id }, function (err, employee) {
        if (err) res.json(err);
        else res.json('Employee Deleted Successfully'); 
    });
});

export default employeeRoute;