import { useFormik } from 'formik'
import React from 'react'
import { Container, Form } from 'react-bootstrap'
import './Registration.css'
import {axios} from 'axios'

export default function Registration() {

  
const formvalidation =(regvalue)=>{

  let errors={};

  if(!regvalue.username)
  {
    errors.username="Required field"
  } else if(regvalue.username.length<3)
  {
    errors.username="please text shoud be more than 3 letter"
  }

}
  

  
  const formik=useFormik({
    initialValues:{username:'',address:'',number:'', mail:'',},

    validate:formvalidation,
    onSubmit: (regvalue) => {
     console.log("Reaceived value",regvalue);
    // alert(JSON.stringify(regvalue, null, 2));

    let data={username:regvalue.username,email:regvalue.mail,Password:regvalue.Password}
    axios.post("https://node-project-storage.herokuapp.com/postUserData",data)
    .then((res)=>{
      console.log("data submitted",res);
      alert("Data submitted successfully")
    })
    .catch((err)=>{
      console.log("erroe to submitted data,please check it",err);
    })
    }

  });
  

 
  return (
    
    <div className="form">
   
      <h1 className="stureg">Student Registration Form</h1>
      <Container>
        <Form onSubmit={formik.handleSubmit}>
          <label>Name:</label><br />
          <input type="text" name="username" placeholder="username"  onChange={formik.handleChange} 
        value={formik.values.username} onBlur={formik.handleBlur}></input><br /><br />
        {formik.touched.username && formik.errors.username?<p style={{color:"red"}}>{formik.errors.username}</p>:""}


          <label>Address:</label><br />
          <input type="text" name="address"   onChange={formik.handleChange}
        value={formik.values.address}></input><br /><br />
        {formik.touched.address && formik.errors.address?<p style={{color:"red"}}>{formik.errors.address}</p>:""}

          <label>Mobile No:</label><br />
          <input type="number" name="number" ></input><br /><br />
          <label>Email</label><br />
          <input type="text" name="mail" onChange={formik.handleChange}></input><br /><br />
          <label>City:</label><br />
          <select>
          <option value="S">select your state</option>
            <option value="KOL">Kolkata</option>
            <option value="BIHAR">Bihar</option>
            <option value="HYD">Hyderabad</option>
            <option value="PNJ">Panjab</option>
            <option value="ODDI">Odissa</option>
            <option value="DL">Delhi</option>
            <option value="RAJ">Rajasthan</option>
            <option value="BANG">Banglore</option>
            <option value="MP">Madhya Pradesh</option>
            <option value="KERALA">Kerala</option>
            <option value="UP">Uttar Pradesh</option>
            <option value="TN">Tamil Nadu</option>
          </select><br /><br />

          <label>Course:</label><br />

          <select>
          <option value="SL">select your course</option>
            <option value="AL">Core Java</option>
            <option value="AK">C Language</option>
            <option value="AZ">C++ language</option>
            <option value="AR">.Net</option>
            <option value="CA">Pyton</option>
            <option value="CO">Javascript</option>
            <option value="CT">PHP</option>
            <option value="DE">React.Js</option>
          </select><br /><br />
          <label>Password:</label><br />
          <input type="pwd" name="pwd"></input><br /><br />
          <button type="submit">Register</button>
      


        </Form>
      </Container>

    </div>
  )
}
