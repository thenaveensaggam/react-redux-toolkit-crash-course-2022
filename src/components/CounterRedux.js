import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment , decrement , incrementBy } from "../redux/features/counter.feature";

let CounterRedux = () => {

    let dispatch = useDispatch();

    // get data from Redux Store
    let counterState = useSelector((state) => {
        return state["counter"];
    });

    let {count} = counterState;

    let clickIncr = () => {
        dispatch(increment());
    };

    let clickDecr = () => {
        dispatch(decrement());
    };

    let clickIncrBy = () => {
        dispatch(incrementBy(5));
    };

    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <p className="h3 display-3">{count}</p>
                                <button onClick={clickIncr} className="btn btn-success m-1">Increment</button>
                                <button onClick={clickDecr} className="btn btn-warning m-1">Decrement</button>
                                <button onClick={clickIncrBy} className="btn btn-danger m-1">Increment by 5</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default CounterRedux;
