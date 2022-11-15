import moment from 'moment';
// import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Header from '../Layouts/Header'


var totalAmount = []

export default function ViewBill() {
    const navigate = useNavigate();
    const localStorageCustData = JSON.parse(localStorage.getItem("cust_data"))
    const localStorageItemData = JSON.parse(localStorage.getItem("itemData"))
    // const [viewData, setViewData] = useState(localStorageItemData)

    const genrateBill = () => {
        window.print()
        // localStorage.clear()
        // navigate("/")
    }
    const totalItem = (data) => {
        if (Array.isArray(data)) {
            let totalAmount = 0;
            for (let i = 0; i < data.length; i++) {
                totalAmount += Number(data[i].quantity) * Number(data[i].price)
            }
            return totalAmount;
        }
        return 0;
    }
    return (
        <>
            <Header />
            <div className="container">
                <div className=" mt-3">
                    <h6 className="">Date - {moment(new Date()).format("DD/MM/YYYY")} </h6>
                </div>

                <div className='offset-4'>
                    <div className="mt-3 row">
                        <h6 className="col-4">Customer Name </h6>-
                        <h6 className="col-6 ms-2">{localStorageCustData.cust_name}</h6>
                    </div>

                    <div className="mt-3 row">
                        <h6 className="col-4">Phone Number </h6>-
                        <h6 className="col-6 ms-2">{localStorageCustData.phoneNumber}</h6>
                    </div>

                    <div className="mt-3 row">
                        <h6 className="col-4">Address </h6>-
                        <h6 className="col-6 ms-2">{localStorageCustData.address}</h6>
                    </div>

                    <div className="mt-3 row">
                        <h6 className="col-4">State</h6>-
                        <h6 className="col-6 ms-2">{localStorageCustData.state}</h6>
                    </div>

                    <div className="mt-3 row">
                        <h6 className="col-4">District</h6>-
                        <h6 className="col-6 ms-2">{localStorageCustData.dist}</h6>
                    </div>

                    <div className="mt-3 row">
                        <h6 className="col-4">City</h6>-
                        <h6 className="col-6 ms-2">{localStorageCustData.city}</h6>
                    </div>
                </div>

                <div className="d-flex justify-content-end">
                    <button className='btn btn-success' onClick={() => { navigate("/billitem") }}>Add item</button>
                </div>

                <Table striped bordered hover className="mt-5">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Price/Unit</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            localStorageItemData.map((item, id, arr) => {

                                totalAmount.push(item.amount)
                                return (
                                    <tr key={id}>
                                        <td>{id + 1}</td>
                                        <td>{item.item}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.price}</td>
                                        <td>{item.price * item.quantity}</td>
                                    </tr>
                                )
                            })
                        }
                        <tr>
                            <td colSpan="4">Total</td>
                            <td>
                                {totalItem(localStorageItemData)}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="">
                                <button className='btn btn-secondary bg-secondary' onClick={genrateBill}>Generate Bill</button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}
