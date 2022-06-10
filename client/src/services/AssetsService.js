import axios from 'axios';

class AssetsService {

    deleteAsset(id) {
        axios.get('http://localhost:5000/assets/assets/deleteAsset/' + id)
            .then(() => {
                if (alert('Asset Record Deleted !!!')) { }
                else window.location.reload();
            })
            .catch((error) => {
                console.log(error)
            }) 
    }
}

export default AssetsService;