import React, { Component } from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';
class Service extends Component {
    render() {
        return (
            <div className="bg-text3">
                <h1 style={{"text-align":"center"}}>Services</h1>
                <h1><u>Vanity Makeup</u></h1>
                <p><b>Glam Doll Exclusive</b>
                    <br/>
                    $75
                </p>
                <p><b>Glam Doll</b>
                    <br/>
                    $60
                </p>
                <p><b>Sweet Face</b>
                    <br/>
                    $50
                </p>
                
                <br/>
                <h1><u>Facials</u></h1>
                <p><b>Breakup Exclusive</b>
                    <br/>
                    $60
                </p>
                <p><b>Cougar Facial</b>
                    <br/>
                    $50
                </p>
                <p><b>Doll Face Facial</b>
                    <br/>
                    $45
                </p>
                <br/>
                <h1><u>Foot Jobs</u></h1>
                <p><b>Foot Fetish Exclusive</b>
                    <br/>
                    $60
                </p>
                <p><b>Foot Fetish</b>
                    <br/>
                    $35
                </p>
                
                <br/>

                {/*
                <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Vanity Makeup
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <p>Glam Doll Exclusive - First Class Service priority + includes all the treats .............. $75</p>
                        <p>Glam Doll - Glitzy​ & gorgeous full makeup service + Strip Lash included ........................ $60</p>
                        <p>Sweet Face - Elegant & classic makeup for a polished look that’s never over-done (*does not include lashes) ....................... $50</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Facials
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <p>Breakup Exclusive - First Class Service priority + includes all the treats. Customized
                   facial deep cleanse exfoliate & <br/> nourish with enzyme packed ingredients .................. $60</p>
                        <p>Cougar Facial - Moisturizing facial using supercharged ingredients & stimulating facial massage for smoother, more lifted skin tone ...................... $50</p>
                        <p>Doll Face Facial - Our favorite beautifying facial designed to restore natural glow & brighten your complexion for luminous skin ................... $45</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Foot Jobs
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <p>Foot Fetish Exclusive - First Class Service priority includes Happy Ending massage + all the treats ................ $60</p>
                        <p>Foot Fetish - Our most popular pedicure service includes a Bubble Bath Foot Soak 
                      with tension relieving stones & essential oils followed 
                      by our FOOTSY pedi & a relaxing lower leg & foot massage  .......................... $35</p>
                        <p>Footsy - KML classic essential oil infused hot towel pedicure 
                    is relaxing sanitary & eco friendly. Includes exfoliating 
                    foot scrub Cuticle Care & SOFT SOLES  
                    (*does not include bubble bath foot soak) ............................... $28</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Massage
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <p>Rubdown - First Class Service + priority *NON-EROTIC ................ $75</p>
                        <p>Relaxation Rub Down - Sensually relaxing body massage x 60 m *NON-EROTIC .......................... $60</p>
                        <p>Back Rub - Tension relieving massage for head neck shoulders & back x 30 m *NON-EROTIC............................... $45</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
                */}
            </div>
        );
    }
}

export default Service;