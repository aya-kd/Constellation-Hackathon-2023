import React from 'react';
import './footer.scss';
import fbW from '../../assets/fbW.png';
import instaW from '../../assets/instaW.png';
import xW from '../../assets/xW.png';
import lnkdnW from '../../assets/lnkdnW.png';
import GW from '../../assets/GW.png';
import PHONEW from '../../assets/PHONEW.png';
const Footer = () => {
  return (
    <div className='footer'>
        <div className="sb__footer section__padding">
            <div className="sb__footer-links">
                <div className='sb__footer-links-div'>
                    <h4>About Us</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque accusantium earum praesentium eum. </p>
                    <div className="follow">
                        <p>follow us</p>
                        <img src={fbW} alt="" />
                        <img src={xW} alt="" />
                        <img src={instaW} alt="" />
                        <img src={lnkdnW} alt="" />
                    </div>
                </div>
                <div className="sb__footer-links-div">
                    <h4>Links</h4>
                    <a href="#">
                        <p>About us</p>
                    </a>
                    <a href="#">
                        <p>meet our teams</p>
                    </a>
                    <a href="#">
                        <p>news & media</p>
                    </a>
                    <a href="#">
                        <p>our projects</p>
                    </a>
                    <a href="#">
                        <p>contacts</p>
                    </a>
                </div>
                <div className="sb__footer-links-div">
                    <h4>Help?</h4>
                    <a href="#">
                        <p className='faq'>FAQ</p>
                    </a>
                    <a href="#">
                        <p>term & condition</p>
                    </a>
                    <a href="#">
                        <p>contact support</p>
                    </a>
                    <a href="#">
                        <p>our services</p>
                    </a>
                </div>
                <div className='sb__footer-links-div'>
                    <h4>Quick Contact</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque accusantium earum praesentium eum.!</p>
                    <div className="contact">
                        <img src={GW} alt="" />
                        <p>infor@haven.com</p>
                    </div>
                    <div className="contact">
                        <img src={PHONEW} alt="" />
                        <p>+777 2536 7885</p>
                    </div>
                </div>

                
            </div>
            
        </div>
        <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} Haven.  All right reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="#"><div><p>Terms & Conditions</p></div></a>
                        <a href="#"><div><p>Privacy</p></div></a>
                        <a href="#"><div><p>Security</p></div></a>
                        <a href="#"><div><p>Cookie Declaration</p></div></a>
                    </div>
                </div>
    </div>
  )
}

export default Footer