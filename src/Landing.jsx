import React from 'react';
import './Landing.css';
import donImage from './images/Group3.jpg';
import firstImage from './images/img1.png';
import secondImage from './images/img2.png';
import thirdImage from './images/img3.png';


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
        </div>
        
    )
}