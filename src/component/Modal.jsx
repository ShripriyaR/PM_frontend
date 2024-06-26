import React from "react";
import { useDispatch } from "react-redux";
import { deleteAppFromUser } from '../redux/slice/userSlice';
import { API } from "../util/constants";
import { webClient } from "../util/config";

function DeleteAppModal(props) {
    const dispatch = useDispatch();
    const appName = props.appName;

    function handleDeleteApp() {
        const req = {
            "username": props.username,
            "appName": appName,
        };

        console.log("entered handleDelete: " + appName);
        
        webClient.post(API.ENDPOINT_DELETE_APP, req, { timeout: 5000 })
            .then(resp => {
                console.log(`${appName} deleted successfully`);
                dispatch(deleteAppFromUser({ appName }));
                var modalElement = document.getElementById('deleteAppModal');
                var modal = bootstrap.Modal.getInstance(modalElement);
                modal.hide();
                console.log(resp);
            }).catch(err => {
                console.log(err);
            });
    }

    return (
        <div className="modal modal-md fade" id="deleteAppModal" tabIndex="-1" aria-labelledby="deleteAppModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fs-5" id="deleteAppModalLabel">Delete Application</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete the application?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" onClick={handleDeleteApp}>Delete</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteAppModal;
