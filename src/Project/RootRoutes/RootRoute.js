import React from 'react'
// import {Route,Routes, BrowserRouter as Router} from 'react-router-dom'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Header from '../../Layout/Header/Header'
import Home from '../Home/Home'
import Course from '../Course/Course'
import Contact from '../Contact/Contact'
import Address from '../Address/Address'
import PNF from '../PageNotFound/PNF'
import './RootRoute.css'
import Registration from '../Registration/Registration'
import Login from '../Login/Login'
import StuReview from '../StudentReview/StuReview'
import Footer from '../Footer/Footer'
export default function RootRoute() {
  return (
      <section className="mainsection">
      <Router>
          <Header></Header>
          <Routes>

              <Route path="" element={<Home />} />
              <Route path="course/:world" element={<Course/>}/>
              <Route path="contact" element={<Contact/>}/>
              <Route path="Address" element={<Address/>}/>
              <Route path="registration" element={<Registration/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path ="review" element={<StuReview/>}/>
              

              <Route path="PNF" element={<PNF/>}/>
          </Routes>
          <Footer></Footer>
      </Router>
      </section>
  )
}
