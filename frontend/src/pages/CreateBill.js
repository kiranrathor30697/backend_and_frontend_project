import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../Layouts/Footer'
import Header from '../Layouts/Header'
import { createBillValidation } from './Validation/validation'

let initialState = {
    cust_name:"",
    phoneNumber:"",
    date:"",
    address:"",
    state:"",
    dist:"",
    city:"",
    billcreatorname:"",
    item:"",
    quantity:"",
    price:"",
    amount:""
}

export default function CreateBill() {
    const navigate = useNavigate()
    const [billData, setBillData] = useState(initialState)
    const [err, setErr] = useState([])

    var myData = []

    const handleChange = (e) => {
        const { name , value} = e.target
        let newData = {[name]:value}

        setBillData({
            ...billData,
            [name]: value
        })

        const { error } = createBillValidation(newData)
        setErr({
            ...err,
            ...error
        })
    }

    const createInvoiceBill = (e) => {
        e.preventDefault();

        const {  error , isValid } = createBillValidation(billData)
        setErr(error)
        if (!isValid) return;
        myData.push(billData)
        setBillData(initialState)
        console.log(myData,"===myData")
        localStorage.setItem("billdata",JSON.stringify(myData))
        navigate('/viewbill')

    }

    // const localStorageData = JSON.parse(localStorage.getItem("billdata"))
    // console.log("+++++",localStorageData[0].cust_name)
     
  return (
    <>
        <Header />
        <div className='d-flex justify-content-center mt-5'>
            <form className='bg_color p-4 rounded w-75' onSubmit={createInvoiceBill}>
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-white text-center fw-bold mt-2 mb-3">Create invoice Bill</h3>
                    </div>
                </div>
                <div className="row">
{/* 
                    {
                        !localStorageData[0].cust_name ?
                    <> */}
                        <div className="col-md-6 col-sm-6 col-xs-6">
                            <div className="form-group mb-2">
                                <label
                                    className="form-label mb-1 text-white">
                                    Customer Name
                                </label>
                                <input
                                    type="text"
                                    name="cust_name"
                                    className="form-control"
                                    placeholder="Enter Your Name"
                                    onChange={handleChange}
                                />
                            </div>
                            <p className='text-danger text-center m-0'>{err.cust_name}</p>
                        </div>

                        <div className="col-md-6 col-sm-6 col-xs-6">
                            <div className="form-group mb-2">
                                <label
                                    className="form-label mb-1 text-white">
                                    Phone number
                                </label>
                                <input
                                    type="number"
                                    name="phoneNumber"
                                    className="form-control"
                                    placeholder="Enter Your Phone Number"
                                    onChange={handleChange}
                                />
                            </div>
                            <p className='text-danger text-center m-0'>{err.phoneNumber}</p>
                        </div>

                        <div className="col-md-6 col-sm-6 col-xs-6">
                            <div className="form-group mb-2">
                                <label
                                    className="form-label mb-1 text-white">
                                    Date
                                </label>
                                <input
                                    // max={new Date().toISOString().split('T')[0]}
                                    type="text"
                                    name="date"
                                    className="form-control"
                                    onChange={handleChange}
                                    placeholder="Enter Date"
                                    onFocus={
                                        (e)=> {
                                        e.currentTarget.type = "date";
                                        e.currentTarget.focus();
                                        }
                                    }
                                />
                            </div>
                            <p className='text-danger text-center m-0'>{err.date}</p>
                        </div>

                        <div className="col-md-6 col-sm-6 col-xs-6">
                            <div className="form-group mb-2">
                                <label className="form-label mb-1 text-white">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    className="form-control"
                                    placeholder="Enter Your Address"
                                    onChange={handleChange}
                                />
                            </div>
                            <p className='text-danger text-center m-0'>{err.address}</p>
                        </div>

                        <div className="col-md-6 col-sm-6 col-xs-6">
                            <div className="form-group mb-1">
                                <label
                                    className="form-label mb-1 text-white">
                                    State
                                </label>
                                <input
                                    type="text"
                                    name="state"
                                    className="form-control"
                                    placeholder="Enter Your State"
                                    onChange={handleChange}
                                />
                            </div>
                            <p className='text-danger text-center m-0'>{err.state}</p>
                        </div>
                        
                        <div className="col-md-6 col-sm-6 col-xs-6">
                            <div className="form-group mb-2">
                                <label
                                    className="form-label mb-1 text-white">
                                    District
                                </label>
                                <input
                                    type="text"
                                    name="dist"
                                    className="form-control"
                                    placeholder="Enter Your District"
                                    onChange={handleChange}
                                />
                            </div>
                            <p className='text-danger text-center m-0'>{err.dist}</p>
                        </div>

                        <div className="col-md-6 col-sm-6 col-xs-6">
                            <div className="form-group mb-2">
                                <label
                                    className="form-label mb-1 text-white">
                                    City
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    className="form-control"
                                    placeholder="Enter Your City"
                                    onChange={handleChange}
                                />
                            </div>
                            <p className='text-danger text-center m-0'>{err.city}</p>
                        </div>

                        <div className="col-md-6 col-sm-6 col-xs-6">
                            <div className="form-group mb-2">
                                <label
                                    className="form-label mb-1 text-white">
                                    Bill creator
                                </label>
                                <input
                                    type="text"
                                    name="billcreatorname"
                                    className="form-control"
                                    placeholder="Enter Bill Creator Name"
                                    onChange={handleChange}
                                />
                            </div>
                            <p className='text-danger text-center m-0'>{err.billcreatorname}</p>
                        </div>
                    {/* </>
                    :null
                    } */}

                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <div className="form-group mb-2">
                            <label
                                className="form-label mb-1 text-white">
                                Item Name
                            </label>
                            <input
                                type="text"
                                name="item"
                                className="form-control"
                                placeholder="Enter Your Item Name"
                                onChange={handleChange}
                            />
                        </div>
                        <p className='text-danger text-center m-0'>{err.item}</p>
                    </div>

                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <div className="form-group mb-2">
                            <label
                                className="form-label mb-1 text-white">
                                Quantity
                            </label>
                            <input
                                type="text"
                                name="quantity"
                                className="form-control"
                                placeholder="Enter Your Quantity"
                                onChange={handleChange}
                            />
                        </div>
                        <p className='text-danger text-center m-0'>{err.quantity}</p>
                    </div>

                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <div className="form-group mb-2">
                            <label
                                className="form-label mb-1 text-white">
                                Price/Unit
                            </label>
                            <input
                                type="text"
                                name="price"
                                className="form-control"
                                placeholder="Enter Your Price/Unit"
                                onChange={handleChange}
                            />
                        </div>
                        <p className='text-danger text-center m-0'>{err.price}</p>
                    </div>

                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <div className="form-group mb-2">
                            <label
                                className="form-label mb-1 text-white">
                                Amount
                            </label>
                            <input
                                type="number"
                                name="amount"
                                className="form-control"
                                placeholder="Enter Your Amount"
                                onChange={handleChange}
                            />
                        </div>
                        <p className='text-danger text-center m-0'>{err.amount}</p>
                    </div>

                    <div className="col-md-12 d-flex justify-content-center mt-3">
                        <button className="btn btn-light me-5">Submit</button>
                        <button className="btn btn-light ms-5" onClick={()=>{navigate("/")}}>Back</button>
                    </div>

                </div>
            </form>
        </div>
        <Footer />
    </>
  )
}
