import React, { useState, useRef } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { API_URL } from '../routers/FileUploadeHandlerRouterUtil'

const FileUploadForm = (props) => {
    const [file, setFile] = useState(null);
    const [previewSrc, setPreviewSrc] = useState('');
    const [state, setState] = useState({
        title: '',
        description: ''
    });
    const [errorMsg, setErrorMsg] = useState('');
    const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
    const dropRef = useRef();

    const handleInputChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    const onDrop = (files) => {
        const [uploadedFile] = files;
        setFile(uploadedFile);

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewSrc(fileReader.result);
        };
        fileReader.readAsDataURL(uploadedFile);
        setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));

        dropRef.current.style.border = '2px dashed #e9ebeb';
    };

    const updateBorder = (dragState) => {
        if (dragState === 'over') {
            dropRef.current.style.border = '2px solid #000';
        } else if (dragState === 'leave') {
            dropRef.current.style.border = '2px dashed #e9ebeb';
        }
    };

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        try {
            const { title, description } = state;
            if (title.trim() !== '' && description.trim() !== '') {
                if (file) {
                    const formData = new FormData();
                    formData.append('file', file);
                    formData.append('title', title);
                    formData.append('description', description);

                    setErrorMsg('');
                    await axios.post(`${API_URL}/upload`, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });
                } else {
                    setErrorMsg('Please select a file to add.');
                }
            } else {
                setErrorMsg('Please enter all the field values.');
            }
        } catch (error) {
            error.response && setErrorMsg(error.response.data);
        }
    };

    return (

        <div>
            <form className='' onSubmit={handleOnSubmit}>
                {errorMsg && <p className="errorMsg">{errorMsg}</p>}
                <div className='row'>
                    <div className='col'>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="title" name="title" value={state.title || ''} placeholder="Enter a file name" onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className='col'>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="description" name="description" value={state.description || ''} placeholder="Enter a description" onChange={handleInputChange} />
                        </div>
                    </div>
                </div>


                <div className="card mb-4 text-muted">

                    <div className="card-body text-center">
                        <Dropzone
                            onDrop={onDrop}
                            onDragEnter={() => updateBorder('over')}
                            onDragLeave={() => updateBorder('leave')}
                        >
                            {({ getRootProps, getInputProps }) => (
                                <div {...getRootProps({ className: 'drop-zone' })} ref={dropRef}>
                                    <input {...getInputProps()} />
                                    <p>Drag and drop a file OR click here to select a file</p>
                                    {file && (
                                        <div>
                                            <strong>Selected file:</strong> {file.name}
                                        </div>
                                    )}
                                    {previewSrc ? (
                                        isPreviewAvailable ? (
                                            <div>
                                                <img className="img-fluid img-thumbnail r-circle mx-auto mb-3" src={previewSrc} alt="Preview" />
                                            </div>
                                        ) : (
                                            <div className="preview-message">
                                                <p>No preview available for this file</p>
                                            </div>
                                        )
                                    ) : (
                                        <div className="preview-message">
                                            <p>Image preview will be shown here after selection</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </Dropzone>
                    </div>
                </div>
                <button type="submit" className="btn btn-inactive px-4 ">Add file</button>
            </form>
        </div>

    );
};

export default FileUploadForm;