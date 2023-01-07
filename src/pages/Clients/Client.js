import React from "react";
import ClientList from "./ClientList";

const Client = () => {
    return (
        <div>
            Client
            <ul>
                <li>client1</li>
                <li>client2</li>
                <li>client3</li>
            </ul>

            {/* routees */}
            <Route
                path={`/clients/list`}
                exact={true}
                component={ClientList}
            />
        </div>
    )
}

export default Client;