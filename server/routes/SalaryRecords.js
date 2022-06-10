import express from 'express';
const app = express();
const salaryRoute = express.Router();
import salaryModel from "../models/SalaryModels.js"

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

salaryRoute.route('/salary/deleteSalary/:id').get(function (req, res) {
    salaryModel.findByIdAndRemove({ _id: req.params.id }, function (err, salary) {
        if (err) res.json(err);
        else res.json('Salary Record Deleted Successfully');
    });
});

export default salaryRoute;