import React from "react";
import { Link } from 'react-router-dom';
const ClientList = () => {
    return (
        <div>
            Clients component
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td><Link to="/admin/client/view">view</Link></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td><Link to="/admin/client/view">view</Link></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td><Link to="/admin/client/view">view</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ClientList;