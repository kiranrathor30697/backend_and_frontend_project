import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../Layouts/Footer'
import Header from '../Layouts/Header'

export default function CreateBill() {
    const navigate = useNavigate()
  return (
    <>
        <Header />
        <Row>
            <Col>
                <div className="d-flex justify-content-center mt-5">
                    <Form className=" bg-secondary p-3 rounded shadow-lg">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-light">Item Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Item Name" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="text-light">Quantity</Form.Label>
                            <Form.Control type="text" placeholder="Enter Quantity" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPrice">
                            <Form.Label className="text-light">Price/Unit</Form.Label>
                            <Form.Control type="text" placeholder="Enter Price/Unit" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicAmount">
                            <Form.Label className="text-light">Amount</Form.Label>
                            <Form.Control type="text" placeholder="Enter Amount" required/>
                        </Form.Group>
                        
                        <div className='d-flex justify-content-center'>
                            <Button variant="secondary" type="submit" className="btn btn-light  me-3 text-secondary">
                                Submit
                            </Button>
                            <Button variant="secondary" type="submit" className="btn btn-light  ms-3 text-secondary" onClick={()=>{navigate("/")}}>
                                Back
                            </Button>
                        </div>
                        
                    </Form>
                </div>
            </Col>
        </Row>
        <Footer />
    </>
  )
}
