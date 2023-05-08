import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useEffect, useState } from "react";

function Banner() {

    const [loopNum , setLoopNum] = useState(0);
    const [isDeleting , setIsDeleting] = useState(false);

    const toRotate = ["web Developer" , "React Developer" , "Freelancer"];

    const [text , setText] = useState('');
    const [delta , setDelta] = useState(200 - Math.random() * 100);

    const period = 1000;

    useEffect(() => {
        let tricker = setInterval(() => {
            tick();
            
        }, delta );
        return () => {clearInterval(tricker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0 , text.length - 1) : fullText.substring(0 , text.length + 1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(300);
        }
    }
    return ( 
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={6}>
                        <span className="tagline"> Welcome to my portfolio</span>
                        <h1> {`Hi I'm Mojtaba a `} <p className="wrap">{text}</p> </h1>
                        <button onClick={()=> console.log('conect')}>Let's Connect <ArrowRightCircle size={25}/> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img className="bimg" src={headerImg} width={350} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
     );
}

export default Banner;