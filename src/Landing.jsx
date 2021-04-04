import React from 'react';
import './Landing.css';
import donImage from './images/Group3.jpg';
import firstImage from './images/img1.png';
import secondImage from './images/img2.png';
import thirdImage from './images/img3.png';
import groupImage from './images/Group8.jpg';
import connectImage from './images/connect.jpg';
import wearImage from './images/wear.jpg';
import recordImage from './images/record.jpg';
import improveImage from './images/improve.jpg';
import rectImage from './images/rect.jpg';

export default function Landing() {
    return (
        <div>
            <div className="main">
                <img src={donImage} style={{width: "85rem"}} />
                <div class="caption top">Posture Corrector</div>
                <div class="caption center">We've Got Yo Back!</div>
                <div class="caption bottom">The purpose of this project is to create a wearable
                <p>device that helps users correct their posture.</p></div>
                <button type="button" class="btn btn-dark btn-lg download-button"> START</button>
                <div class="caption mid">Practicing Yoga</div>
                
            </div>
   

    <section id="features">
    <div class="caption middle">Enhance your yoga posture<p>by practicing with our wearable device</p></div>
    <div class="row">
      <div class="yoga1-column feature-box col-lg-4">
        <img src={firstImage} style={{width: "15rem"}} />
        <h3 class="aa">Aerial Yoga</h3>
      </div>
      
      <div class="yoga2-column feature-box col-lg-4">
        <img src={secondImage} style={{width: "13rem"}} />
        <h3 class="ab">Antistress Yoga</h3>
      </div>

      <div class="yoga3-column feature-box col-lg-4">
        <img src={thirdImage} style={{width: "15rem"}} />
        <h3 class="ac">Classic Yoga</h3>
      </div>
    </div>

  </section>

  <section id="about">
    <div className="about_screen">
    <img src={groupImage} style={{width: "95rem"}} />
    <div class="end">Welcome To Posture Corrector</div>
    <div class="endnext">Take your Yoga to the<p>next level with us</p> </div>
    <div class="last">While completing this project, biological<p>research was done on the different types of </p>
    </div>
    <div class="lastone">bad postures in order to get a better sense of <p>where our sensor should be placed.</p>
    </div>
    <button class="btn success">Learn More</button>
    </div>

  </section>
    
  <section id="steps">
    <div className="step">
      <div class="caption work">How it works?</div>

      <div class="row">
      <div class="step1-column feature-box col-lg-3">
        <h3 class="pa">1</h3>
        <img src={connectImage} style={{width: "15rem"}} />
        <h3 class="ka">Connect</h3>
        
      </div>
      
      <div class="step2-column feature-box col-lg-3">
        <h3 class="pb">2</h3>
        <img src={wearImage} style={{width: "13rem"}} />
        <h3 class="kb">Wear</h3>
        
      </div>

      <div class="step3-column feature-box col-lg-3">
        <h3 class="pc">3</h3>
        <img src={recordImage} style={{width: "15rem"}} />
        <h3 class="kc">Record</h3>
        
      </div>

      <div class="step4-column feature-box col-lg-3">
        <h3 class="pd">4</h3>
        <img src={improveImage} style={{width: "15rem"}} />
        <h3 class="kd">Improve</h3>
        
      </div>
    </div>

    </div>

    </section>  

    <section id="lst">
      <div class="abc">
      <img src={rectImage} style={{width: "95rem"}} />
      <h3 class="bd">All rights reserved @2021</h3>
      </div>
    </section>
        </div>
        
    )
}