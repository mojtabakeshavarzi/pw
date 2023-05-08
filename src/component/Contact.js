import { useState } from "react";
import { Col, Container , Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

function Contact() {
    const formInitialDetails = {
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:''
    }

    const[formDetailes , setFormDetailes] = useState(formInitialDetails);
    const[buttonText , setButtonText] = useState('Send');
    const[status , setStatus] = useState({});

    const onFormUpdate = (category , value) => {
        setFormDetailes({
            ...formDetailes,
            [category] : value
        })
    }

    const handelSubmit = async (e) => {
        e.preventDefault();
        setButtonText('sending ...');
        let response = await fetch("https://localhost:5000/contact" , {
        method: "POST",
        headers : {
            "Conent-Type" : "Application/json;charset=utf-8",
        } ,
        body : JSON.stringify(formDetailes),
    });
    setButtonText("Send");
    let result = response.json();
    setFormDetailes(formInitialDetails);
    if(result.code === 200) {
        setStatus({ success:true , message:'Message send succesfully'});
    }
    else {
        setStatus({ success:false , message:'Something went Wrong , Please Try again .'})
    }
};

    return ( 
        <section className="contact " id="contact">
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                <img src={contactImg} alt="Contact Us" />
                </Col>
                <Col md={6}>
                    <h2>Get In Touch</h2>
                    <form onSubmit={handelSubmit}>
                       <Row>
                        <Col sm={6} className="px-1">
                            <input type="text" value={formDetailes.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName' , e.target.value)} />
                        </Col>
                        <Col sm={6} className="px-1">
                        <input type="text" value={formDetailes.lastName} placeholder="last Name" onChange={(e) => onFormUpdate('lastName' , e.target.value)} />
                        </Col>
                        <Col sm={6} className="px-1">
                        <input type="email" value={formDetailes.email} placeholder="Email" onChange={(e) => onFormUpdate('email' , e.target.value)} />
                        </Col>
                        <Col sm={6} className="px-1">
                        <input type="phone" value={formDetailes.phone} placeholder="Phone" onChange={(e) => onFormUpdate('phone' , e.target.value)} />
                        </Col>
                        <Col>
                            <textarea row="6" value={formDetailes.message} placeholder="Message" onChange={(e) => onFormUpdate('message' , e.target.value)} > </textarea>
                            <button type="submit"><span>{buttonText}</span></button>
                        </Col>
                        {
                            status.message &&
                            <Col>
                                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                            </Col>
                        }
                       </Row> 
                    </form>
                </Col>
            </Row>
        </Container>
            
        </section>
     );
}

export default Contact;