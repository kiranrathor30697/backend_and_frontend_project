import moment from 'moment';
import React from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Header from '../Layouts/Header'

export default function ViewBill() {
    const navigate = useNavigate();
    const localStorageData = JSON.parse(localStorage.getItem("billdata"))
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
                    <h6 className="col-6 ms-2">{localStorageData[0].cust_name}</h6>
                </div>

                <div className="mt-3 row">
                    <h6 className="col-4">Phone Number </h6>-
                    <h6 className="col-6 ms-2">{localStorageData[0].phoneNumber}</h6>
                </div>

                <div className="mt-3 row">
                    <h6 className="col-4">Address </h6>-
                    <h6 className="col-6 ms-2">{localStorageData[0].address}</h6>
                </div>

                <div className="mt-3 row">
                    <h6 className="col-4">State</h6>-
                    <h6 className="col-6 ms-2">{localStorageData[0].state}</h6>
                </div>

                <div className="mt-3 row">
                    <h6 className="col-4">District</h6>-
                    <h6 className="col-6 ms-2">{localStorageData[0].dist}</h6>
                </div>

                <div className="mt-3 row">
                    <h6 className="col-4">City</h6>-
                    <h6 className="col-6 ms-2">{localStorageData[0].city}</h6>
                </div>

            </div>

            <div className="d-flex justify-content-end">
                <button className='btn btn-success' onClick={()=>{navigate("/createbill")}}>Add other item</button>
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
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </>
  )
}
