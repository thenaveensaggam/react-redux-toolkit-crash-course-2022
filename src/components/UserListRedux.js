import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch , useSelector} from "react-redux";
import {getUsers} from "../redux/features/user-list.feature";

let UserListRedux = () => {
    let dispatch = useDispatch();

    //get data from Redux Store
    let userState = useSelector((store) => {
        return store["users"];
    })

    useEffect(async () => {
        dispatch(getUsers()); // dispatch action
    }, [dispatch]);

    let {loading , errorMessage , users} = userState;

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-primary">User List</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eum minus recusandae voluptate. Animi assumenda consequatur deserunt dignissimos eaque expedita natus omnis quaerat? A culpa ea expedita illum possimus quo.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {
                            loading && <h2 className="fw-bold">...Loading</h2>
                        }
                        {
                            !loading && errorMessage && <h3 className="text-danger">{errorMessage}</h3>
                        }
                        {
                            !loading && users.length > 0 &&
                            <table className="table table-hover text-center table-sthiped">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th>SNO</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Website</th>
                                        <th>Company</th>
                                        <th>Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map(user => {
                                            return(
                                                <tr key={user.id}>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.website}</td>
                                                    <td>{user.company.name}</td>
                                                    <td>{user.address.city}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default UserListRedux;
