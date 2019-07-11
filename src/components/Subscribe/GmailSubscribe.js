import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';

const GmailSubscribe = ({ data }) => {
    const [inputvalue, setInputvalue] = useState('')
    const [bordercolor, setBordercolor] = useState(true)

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }



    const subscribeMail = () => {
        if (validateEmail(inputvalue)) {
            axios.post('api/blogs/subscribe', { 
                email: inputvalue
            })
                .then(function (response) {
                    console.log(response);
                    setInputvalue('')
                    setBordercolor(true)
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            setBordercolor(false)
        }
    }




    const { email, placeholder, subtitle, title } = data
    return (
        <div className="padding_div">
            <div className="subscribe_div"  >
                <h3>
                    {title}
                </h3>
                <p>
                    {subtitle}
                </p>
                <div className="gmail_input">
                    <Form.Group md="" controlId="validationCustomUsername">
                        <Form.Label>{email}</Form.Label>
                        <InputGroup>
                            <Form.Control
                                style={bordercolor ? { border: "1px solid #ced4da" } : { border: "1px solid red" }}
                                onChange={(e) => setInputvalue(e.target.value)}
                                type="email"
                                placeholder={placeholder}
                                aria-describedby="inputGroupPrepend"
                                value={inputvalue}
                                required
                            />
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend" onClick={() => subscribeMail()}><FaPaperPlane /></InputGroup.Text>
                            </InputGroup.Prepend>
                        </InputGroup>
                    </Form.Group>
                </div>
            </div>
        </div>
    )
}
export default GmailSubscribe;