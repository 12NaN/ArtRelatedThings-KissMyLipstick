import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className = "bg-text2">
                <br/>
                <div className="col">
                 <h1>Contact</h1>
                 <br/>
                <h6 class="text-uppercase ">56-20 Myrtle Ave</h6>
                           
              <h6 class="text-uppercase ">
                Ridgewood, NY - 11385
              </h6>
              <h6> CALL (718) 821-0821 </h6>
              <h6> TEXT (718) 559-6905 </h6>

              </div>
    
            <div className="col">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.8138510047515!2d-73.90764138459538!3d40.700097179333206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25c242865eb1f%3A0x14cc0023176d16da!2sKissmylipstick%20Beauty%20Studio!5e0!3m2!1sen!2sus!4v1570389019226!5m2!1sen!2sus" 
                width="300" height="250" align = "right" frameborder="0" style={{border:0}}allowfullscreen=""></iframe>
            </div>
            <br/>
            <div className="col">
                    <h5 class="text-uppercase font-weight-bold">
                        Business Hours:
                    </h5>
                    <br/>

                <h6 class="text-uppercase">Sunday - Closed</h6>
                <h6 class="text-uppercase">Monday: 12pm - 6pm</h6>
                <h6 class="text-uppercase">Tuesday: 12pm - 6pm</h6>
                <h6 class="text-uppercase">Wednesday - Closed</h6>
                <h6 class="text-uppercase">Thursday: 11am - 8pm</h6>
                <h6 class="text-uppercase">Friday: 11am - 8pm</h6>
                <h6 class="text-uppercase">Saturday: 11pm - 8pm</h6>

            </div>
            </div>
        );
    }
}

export default Contact;