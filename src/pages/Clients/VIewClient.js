import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PurchaseList from "../Purchase/Purchase";
import Report from "../Report/Report";
import Sales from "../Sales/Sales";
const ViewClient = () => {
    return (

        <div className='row' style={{ height: '93%' }}>
            <div className='col-2' style={{
                padding: "10px",
                background: "#f0f0f0"
            }}>
                <div>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        <li>
                            <Link to="/admin/client/view/sales">Sales</Link>
                        </li>
                        <li>
                            <Link to={`/admin/client/view/purchase`}>Purchase</Link>
                        </li>
                        {/* <li>
                            <Link to={`/admin/client/view/`}>Profile</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
            <div className='col-10' style={{ padding: "10px" }}>
                ViewClient component
                <Switch >
                    <Route
                        path={'/admin/client/view/sales'}
                        exact={true}
                        component={Sales}
                    />
                    <Route
                        path={'/admin/client/view/purchase'}
                        exact={true}
                        component={PurchaseList}
                    />

                </Switch>
            </div>
        </div>

    )
}

export default ViewClient;