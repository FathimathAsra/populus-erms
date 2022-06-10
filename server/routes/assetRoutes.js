import express from 'express';
const app = express();
const assetsRoute = express.Router();
import assetsModel from "../models/AssetsModel.js"

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

assetsRoute.route('/assets/deleteAsset/:id').get(function (req, res) {
    assetsModel.findByIdAndRemove({ _id: req.params.id }, function (err, assets) {
        if (err) res.json(err);
        else res.json('Asset Record Deleted Successfully');
    });
});

export default assetsRoute;