import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { loginApi } from '../axios/loginApi'
import { Footer } from '../Layouts/Footer'
import Header from '../Layouts/Header'

export const Login = () => {

    const navigate = useNavigate()
    const [data,setData] = useState({
        email:"",
        password:""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]:value
        })
    }

    const handleLogin = (e) => {
        console.log(data)
        e.preventDefault()
        loginApi(data)
    }

  return (
    <div>
        <Header />
        <Row>
            <Col>
                <div className="d-flex justify-content-center mt-5">
                    <Form className=" bg-secondary p-3 rounded shadow-lg">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-light">Email</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter Email" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicAmount">
                            <Form.Label className="text-light" >Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Enter Password" onChange={handleChange} />
                        </Form.Group>

                        <div className='d-flex justify-content-center'>
                            <Button variant="secondary" type="submit" className="btn btn-light me-3 text-secondary" onClick={handleLogin}>
                                Login
                            </Button>

                            <Button variant="secondary" type="submit" className="btn btn-light ms-3 text-secondary" onClick={()=>{navigate('/register')}}>
                                Register
                            </Button>
                        </div>
                    </Form>
                </div>
            </Col>
        </Row>
        <Footer />
    </div>
  )
}
