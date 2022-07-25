import React from 'react'
// import { Button } from 'react-bootstrap'
// import{Form,Container} from 'react-bootstrap'
import axios from 'axios'
import { useFormik } from 'formik'
import { Container } from 'react-bootstrap';

const form_validation=(form_value)=>{
    // let errors={};
    let errors={};
    // let valid_mail=/^([a-z0-9,-]+)@([a-z]{4,12}).([a-z.]{2,20})$/

    if(!form_value.mail){
        errors.mail="Required field"
    }

    if (!form_value.pwd){
        errors.pwd="Required field"
    }
    console.log("Errors:",errors);
    return errors;
}

export default function Login() {
    const formik=useFormik({
        initialValues:{
            mail:'',
            pwd:''
        },

        validate:form_validation, onSubmit:(form_value)=>{
            console.log("Received value:",form_value);
            let data={email:form_value.mail,password:form_value.pwd}
            axios.post("https://node-project-storage.herokuapp.com/postLoginData",data)
            .then((res)=>{
                console.log("Data Submitted :",res);
                //for generate the token
                window.sessionStorage.setItem("TokenValue:",res.data.token);

                alert("Data submitted successfully");
            })
            .catch((err)=>{
                console.log("Error to submit data:",err);
            })
        }
    })
  return (
    <section> 
        <Container>
        <form onSubmit={formik.handleSubmit}>
        <h5>Login page</h5><br />
        <label>Email id:</label>
        <input type="text" name="mail" value={formik.values.mail} onChange={formik.handleChange} placeholder="enter email" onBlur={formik.handleBlur} ></input><br /><br />
        {formik.touched.mail && formik.errors.mail?<p style={{color:"red"}}>{formik.errors.mail}</p>:""}

        <label>Password:</label>
        <input type="pwd" name="pwd" value={formik.values.pwd} onChange={formik.handleChange} placeholder="enter password" onBlur={formik.handleBlur}></input><br /><br /><br />

        {formik.touched.pwd && formik.errors.pwd?<p style={{color:"red"}}>{formik.errors.pwd}</p>:""}


        <input type="submit" value="submit" disabled={!(formik.dirty && formik.isValid)}></input>

        {/* <input type ="submit" value = "Registration data" disabled={!(formik.dirty && formik.isValid)}></input> */}
        </form>
        </Container>
    </section>
  )
}
