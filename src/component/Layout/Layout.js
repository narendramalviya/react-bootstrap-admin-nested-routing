import { React } from 'react';
import SideNav from '../SideNav/SideNav';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Report from '../../pages/Report/Report';
import Status from '../../pages/Status/Status';
import ClientList from '../../pages/Clients/ClientList';
import ViewClient from '../../pages/Clients/VIewClient';
const Layout = () => {

    return (
        <div className='row' style={{ height: '93%' }}>
            <div className='col-2' style={{
                padding: "10px",
                background: "#f0f0f0"
            }}>
                <SideNav />
            </div>
            <div className='col-10' style={{ padding: "10px" }}>
                <Switch >
                    <Route
                        path={'/admin'}
                        exact={true}
                        component={ClientList}
                    />
                    <Route
                        path={'/admin/report'}
                        exact={true}
                        component={Report}
                    />
                    <Route
                        path={'/admin/status'}
                        exact={true}
                        component={Status}
                    />
                    <Route
                        path={'/admin/client/view'}
                        component={ViewClient}
                    />
                </Switch>
            </div>
        </div>
    );
}

export default Layout;