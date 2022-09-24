import React from 'react'
import logoo from '../Images/Logoo.svg';
import { Link } from "react-router-dom";
import FootExtension from './FootExtension.jsx';
import Facebook from '../Images/Facebook-icon.svg';
import Linkedin from '../Images/Linkedin.svg';
import Instagram from '../Images/Insta-icon.svg';
import Twitter from '../Images/twitter-icon.svg';
import styled from 'styled-components';
function Footer() {
  const FaceBook = styled.input`
    background: #1877F2;
    padding: .5rem;
    border-radius:45%;
    width: 2rem;
    height: 2rem;
    // marging-right:1rem;
    `
  const Socialdiv = styled.div`
    display: flex;
    padding-left: 3rem;
    @media only screen (max-width: 768px) {
      justify-content: center;
    }
    `
  const Linkedinn = styled.input`
    margin-left: 1rem;
    marging-right:1rem;
    width: 2rem;
    height: 2rem;
    `
  const Insta =styled.input`
    margin-left: 1rem;
    marging-right:1rem;
    width: 2rem;
    height: 2rem;
    `
  const Tweet = styled.input`
    margin-left: 1rem;
    marging-right:1rem;
    width: 2rem;
    height: 2rem;

    `
  const Homefooterhead = styled.div`
  display:flex;
  flex-direction: row;
    @media (max-width:786px){
      display:block;
    width: 100%;
    margin:0;
    }
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  background-color: #131E47;
  // margin-bottom: -4vw;
  padding: 2rem;
  padding-bottom:3rem;
  border-radius: .5rem;
  margin-bottom: 2rem;
  `
  const FormBtn = styled.div`
  
  width: 80%;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size:20px;
  border: 2px solid white;
  border-radius: 5px;
  padding: 7px;
  height: 5rem;
  // padding: 3rem;
  background-color: #131E47;
  flex-direction: row;
  align-items: center;
  margin-top: 3rem;
  @media (max-width:786px){
    display: block;
    // padding:3rem;
    // padding-right:5rem;
    height: 8rem;
    width: 100%;
  }
  `
  const JoinUs = styled.button`
  border:2px solid white;
  border-radius: 5px;
  padding: .5rem;
  margin-left: 8%;
  font-size: 20px;
  font-weight: 10px;
  color: #131E47;
  width:6vw;
  background-color: #fff;
  @media (max-width:786px){
    // margin:2rem;
    padding:.2rem;
    width:22vw;
    margin-left: 35%;
    margin-top: 1rem;
  }
  
  `
  const Subscribeinput = styled.input`
  width:100%;
  border: 2px solid #fff;
  outline-style:none;
  color:#fff;
  border-radius: 5px;
  padding:.5rem;
  @media(max-width:786px){
    width: 100%;
    border: 2px solid #fff;
    outline-style:none;
    color:#fff;
  }
  `
  const Subscribeform = styled.form`
  @media(max-width:786px){
    // padding:3rem;
    width: 100%;

  }
  `
  const Subscribeform2 = styled.div`
  @media(max-width:786px){
    width: 100%;
  }
  `
  const Socialli = styled.li`
  @media(max-width:786px){
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left:27%;

  }
  `
  const Logodiv = styled.div`
  @media(max-width:786px){
    margin-top:-4rem;
    margin-left: auto;
    margin-right: auto;
  `
  const Uldiv = styled.div`
  @media(max-width:786px){
    padding:0;
    margin-left: auto;
    margin-right: auto; 
  }
  `
  const Mainul = styled.ul`
  @media(max-width:786px){
    padding:0;
    margin-left: auto;
    margin-right: auto; 
    line-height:24px;
  }
  `
  return (
    <div className='FootWork'>
     <Homefooterhead>
    <div className='homesubscribe1'>
    <h1>Subscribe</h1>
    <p>Join our community and get the latest information about our products and services. </p>
    </div>
    <FormBtn>
    <Subscribeform>
    <Subscribeinput type="text" placeholder="your email address" id="homeform"></Subscribeinput>
   </Subscribeform>
    <Subscribeform2> <JoinUs>Join Us</JoinUs> </Subscribeform2>
  
    </FormBtn>
    </Homefooterhead>



    <div className="Foot-nav">
        <div className="logo-nav">
        <Logodiv>
        <img src={logoo} alt="Logo" />
        </Logodiv>
        <Uldiv>
        <Mainul>
          <li>Quick Links</li>
          <li>FAQ</li>
          <li>News</li>
          <li>Nupat Initiative</li>
        </Mainul>
        </Uldiv>
        </div>
        <Uldiv>
        <Mainul style={{textAlign:'center'}}>
          <li>What we do</li>
          <li>Codecamp</li>
          <li>IT Services</li>
          {/* <li>Our products</li> */}
         
        </Mainul>
        </Uldiv>
        <Uldiv>
        <Mainul style={{textAlign:'center'}}>
          <li>About</li>
          <li>
            <Link to="/About-us">About Us</Link>
          </li>
          <li>Career</li>
          <li><Link to="/OurTeam">Leadership</Link></li>
          <li>Mentors</li>
          <li>Contact us</li>
        </Mainul>
        </Uldiv>
         <div>
        <Mainul style={{textAlign:'center'}}>
          <li>48, Community Road,Akoka Lagos</li>
          <li>Contact +2348031958586, +2347081475750</li>
          <Socialli>
            <Socialdiv>
            <FaceBook type='image' src={Facebook}/>
            <Linkedinn type='image' src={Linkedin}/>
            <Insta type='image' src={Instagram}/>
            <Tweet type='image' src={Twitter}/>
            </Socialdiv>

          </Socialli>
        
        </Mainul>
       
        </div>
       
        </div>
        <FootExtension/>
    </div>
    );
  }
  
  export default Footer;