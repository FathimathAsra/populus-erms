import React, { useState, useEffect } from 'react';
import download from 'downloadjs';
import axios from 'axios';
import { API_URL } from '../routers/FileUploadeHandlerRouterUtil';


const FilesList = () => {
    const [filesList, setFilesList] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        const getFilesList = async () => {
            try {
                const { data } = await axios.get(`${API_URL}/getAllFiles`);
                setErrorMsg('');
                setFilesList(data);
            } catch (error) {
                error.response && setErrorMsg(error.response.data);
            }
        };

        getFilesList();
    }, []);

    const downloadFile = async (id, path, mimetype) => {
        try {
            const result = await axios.get(`${API_URL}/download/${id}`, {
                responseType: 'blob'
            });
            const split = path.split('/');
            const filename = split[split.length - 1];
            setErrorMsg('');
            return download(result.data, filename, mimetype);
        } catch (error) {
            if (error.response && error.response.status === 400) {
                console.log(error.response)
            }
        }
    };

    const deleteFile  = async (id) => {
        try {
        axios.get(`${API_URL}/delete/${id}`)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
        } catch (error) {
            if (error.response && error.response.status === 400) {
                console.log(error)
            }
        }
      }


    return (
        <div className="row px-5 " style={{ height: "auto" }}>
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className='col'>Title</th>
                        <th className='col'>Description</th>
                        <th className='col'>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {filesList.length > 0 ? (
                        filesList.map(
                            ({ _id, title, description, file_path, file_mimetype }) => (
                                <tr key={_id}>
                                    <td>{title}</td>
                                    <td>{description}</td>
                                    <td>
                                        <button href="#/" className="btn btn-inactive-green" type="submit" onClick={() => downloadFile(_id, file_path, file_mimetype)}>Download</button>
                                        <button className="btn btn-inactive-danger mx-3" type="submit" value="Delete" onClick={() => deleteFile(_id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        )
                    ) : (
                        <tr>
                            <td colSpan={3} style={{ fontWeight: '300' }}>
                                No files found. Please add some.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default FilesList;