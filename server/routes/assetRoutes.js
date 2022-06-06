import express from 'express';
const app = express();
const assetsRoute = express.Router();
import assetsModel from "../models/AssetsModel.js"



// To Get List Of Employees
assetsRoute.route('/assets').get(function (req, res) {
    assetsModel.find(function (err, assets) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(assets);
        }
    });
});

// To Add New Employee
assetsRoute.route('/assets/addAssets' ).post(function (req, res) {
    let assets = new assetsModel (req.body);
    assets.save()
        .then(game => {
            res.status(200).json({ 'assets': 'Assets record Added Successfully' });
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
assetsRoute.route('/assets/deleteAsset/:id').get(function (req, res) {
    assetsModel.findByIdAndRemove({ _id: req.params.id }, function (err, assets) {
        if (err) res.json(err);
        else res.json('Asset Record Deleted Successfully');
    });
});

export default assetsRoute;