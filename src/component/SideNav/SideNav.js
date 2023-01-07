
import React, { useEffect } from "react";
import {
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";
import './SideNav.css';
const SideNav = (props) => {
    let location = useLocation();
    useEffect(() => {
        console.log('SideNav location', location);
    }, [])
    return (
            <div>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li>
                        <Link to="/">Client</Link>
                    </li>
                    <li>
                        <Link to={`/admin/report`}>report</Link>
                    </li>
                    <li>
                        <Link to={`/admin/Status`}>Status</Link>
                    </li>
                </ul>
            </div>
    );
}

export default SideNav;