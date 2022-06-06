import React from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: '50%',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function PopModal() {
    // let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <div>
            
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="New Employee Form"
            >
                <div className='conatiner px-4 align-items-center'>
                    <h2 className='poppinsh fw-bold mb-5'>Add New Employee</h2>
                    <form className="row needs-validation" noValidate>
                        <div className='row mb-4'>
                            <div className="col-md-4">
                                <label htmlFor="EmployeeName" className="form-label">Full name</label>
                                <input type="text" className="form-control text-secondary fw-light" id="EmployeeName" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="EmployeeAddress" className="form-label">Addess</label>
                                <input type="text" className="form-control text-secondary fw-light" id="EmployeeAddress" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="EmployeePhone" className="form-label">Phone No.:</label>
                                <input type="text" className="form-control text-secondary fw-light" id="EmployeePhone" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                        </div>

                        <div className='row mb-4'>

                            <div className="col-md-4">
                                <label htmlFor="EmployeeName1" className="form-label">Position</label>
                                <input type="text" className="form-control text-secondary fw-light" id="EmployeeName1" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="EmployeeAddress1" className="form-label">Department</label>
                                <input type="text" className="form-control text-secondary fw-light" id="EmployeeAddress1" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="EmployeePhone1" className="form-label">Education</label>
                                <input type="text" className="form-control text-secondary fw-light" id="EmployeePhone1" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                        </div>


                        <div className='row mb-4'>

                            <div className="col-md-4">
                                <label htmlFor="EmployeePhone2" className="form-label">Marital Status</label>
                                <input type="text" className="form-control text-secondary fw-light" id="EmployeePhone2" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="EmployeeAddress2" className="form-label">Email</label>
                                <input type="text" className="form-control text-secondary fw-light" id="EmployeeAddress2" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="EmployeePhone3" className="form-label">Password</label>
                                <input type="text" className="form-control text-secondary fw-light" id="EmployeePhone3" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                       </div>
                       <div className="row">
                            <div className='container d-flex flex-row-reverse'>
                                <button type="submit" className="btn btn-style px-4">Add</button>
                            </div>
                        </div>


                    </form>
                </div>
            </Modal>
        </div>
    );
}

export default PopModal;