import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'

export const Footer = () => {
  return (
    <div className="p-3 mt-5" style={{backgroundColor:"#abadaf"}}>
            <div className="container"> 
                {/* <Row> */}
                    {/* <Col className="text-white ps-0" md={6} sm={4} xs={2}> */}
                        {/* <Image className="text-center mt-3 ps-0" width="120"src={require('../img/header.png')} alt={"Image Not Found"}/> */}
                    {/* </Col> */}
                    {/* <Col className="text-white d-flex justify-content-end k_fontfamily" md={6} sm={8} xs={10}> */}
                        <div>
                            <h5 className="fw-bolder k_fontfamily text-dark text-center">KKR SOLUTION MALHARGARH</h5>
                            <h6 className="k_fontfamily text-dark text-center k_fontSize">Ward No 13 Char Bhuja Marg Malhargarh </h6>
                            <h6 className="k_fontfamily text-dark text-center k_fontSize">Dist : Mandsaur Pin - 458339</h6>
                            <h6 className="k_fontfamily text-dark text-center k_fontSize">Phone no.: 9300308230 </h6>
                            <h6 className="k_fontfamily text-dark text-center k_fontSize">Email: malhargarh1@gmail.com </h6>
                            <h6 className="k_fontfamily text-dark text-center k_fontSize">State: 23-Madhya Pradesh</h6>
                        </div>
                    {/* </Col> */}
                {/* </Row>  */}
            </div> 
        </div>
  )
}
