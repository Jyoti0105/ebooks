import { useState } from "react";
import { useForm } from "react-hook-form";


function About() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(`${data.username} ${data.mail} ${data.password} ${data.subscription} ${data.country} ${data.age}`);
    }


    return (
        <>
            <p>About us Page</p>
            <form onSubmit={handleSubmit(onSubmit)} id="from">

                <input type="text" placeholder="Enter name"  {...register('username', {
                    required: 'field is mandatory',
                    minLength: {
                        value: 2,
                        message: 'Min length should be 2'
                    },
                    maxLength: {
                        value: 9,
                        message: 'Max length should be 9'
                    }
                })} />
                <span style={{ color: 'red' }}>{errors.username?.message}</span>

                <br /><br />

                <input type="text" placeholder="Enter mail" {...register('mail', { required: 'please enter email' })} />
                <span style={{ color: 'red' }}>{errors.mail?.message}</span>
                {/* {errors.mail && <span  style={{color:'red'}}>this filed is required</span>} */}
                <br /><br />


                <input type="password" placeholder="Enter password" {...register('password', {
                    required: 'Please enter password',
                    pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,10}$/,
                        message: 'Password must contain at least one letter, one digit, and be 8–10 characters long'
                    }
                })} />
                <span style={{ color: 'red' }}>{errors.password?.message}</span>
                <br /><br />


                <input type="number" placeholder="Enter Age" {...register('age', {
                    required: 'fiels is mandatory',
                    min: {
                        value: 18,
                        message: 'Age should be 18'
                    },
                    max: {
                        value: 29,
                        message: 'Age not greter than 29'
                    }
                })} />
                <span style={{ color: 'red' }}>{errors.age?.message}</span>


                <br /><br />
                <textarea {...register('subscription')} /><br /><br />

                <select name="country" {...register('country')}>
                    <option value="INDIA">INDIA</option>
                    <option value="UK">UK</option>
                    <option value="NZ">NZ</option>
                    <option value="AUS">AUS</option>
                    <option value="SRL">SRL</option>

                </select>

                <br /><br />

                <input type="checkbox" />

                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        </>
    )
}
export default About;