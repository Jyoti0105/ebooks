import { useContext, useState } from "react";
import { ThemeContext } from "../Contexr/ThemeContext";
// import './Contact.css';

function Contact() {
    const{theme} =useContext(ThemeContext)
    console.log(theme)
    const [error, seterror] = useState({});

    const [formdata, setformdata] = useState({
        "uname": '',
        "email": '',
        "password": '',
        "address": '',
        "country": '',
        "subscribe": false

    });

    const handlesubmit = (event) => {
        event.preventDefault();
        seterror({});
        if (formdata.uname === '' || formdata.uname === null) {
            seterror({
                name: 'name cannot be blank or null'
            }

            );
        }

        if (formdata.password.length <= 3 || formdata.password.length >= 9 ) {
            seterror({
                password: 'password is less than 3 or greater than 9  '
            }
            );
        }
        if(formdata.password==='' || formdata.password===null)
        {
            seterror({
                password1:'password should not be blank'
            })
        }

        if(formdata.subscribe==false)
        {
            seterror({
                subscribe:'please check subscribtion'
            })

        }
    }

    const handlechange = (event) => {
        setformdata({
            ...formdata,
            [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
        })
    }

    return (
        <>
            <p>Contact us</p>

            <form onSubmit={handlesubmit} id="from">
                <p>Contact us</p>
                <input type="text" placeholder="Enter name"
                    name="uname"
                    value={formdata.uname}
                    onChange={handlechange}
                />
                <span style={{ color: 'red' }}>{error && error.name}</span>

                <br /><br />
                <input type="text" placeholder="Enter mail"
                    name="email"
                    value={formdata.email}
                    onChange={handlechange} /><br /><br />

                <input type="password" placeholder="Enter password"
                    name="password"
                    value={formdata.password}
                    onChange={handlechange} />
                <span style={{ color: 'red'} }>{error && error.password}</span>
                 <span style={{ color: 'red'} }>{error && error.password1}</span>
                <br /><br />

                <textarea
                    name="address"
                    value={formdata.address}
                    onChange={handlechange}
                /><br /><br />

                <select name="country"
                    value={formdata.country}
                    onChange={handlechange}>
                    <option value="INDIA">INDIA</option>
                    <option value="UK">UK</option>
                    <option value="NZ">NZ</option>
                    <option value="AUS">AUS</option>
                    <option value="SRL">SRL</option>

                </select>

                <br /><br />

                <input type="checkbox"
                    name="subscribe"
                    checked={formdata.subscribe}
                    onChange={handlechange}
                />
                  <span style={{ color: 'red'} }>{error && error.subscribe}</span>
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
            <p>Data :{JSON.stringify(formdata)}</p>

        </>
    )
}
export default Contact