import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div className='bigFt'>
            <div className='bottomPicc'>
                <img id="bottomPic" src="https://assets.fontsinuse.com/use-media/16973/upto-700xauto/56702e13/1/png/whole-foods-market-logo-2008.png" 
                    width="75px" height="75px"></img>
            </div>
            <div className='shopping'>
                <h3>Shopping</h3>
                <ul>
                    <li><a href="https://www.wholefoodsmarket.com/sales-flyer">Weekly Sales</a></li>
                    <li><a href="https://www.wholefoodsmarket.com/products">Browse In-store</a></li>
                    <li><a href="https://www.amazon.com/alm/storefront?almBrandId=VUZHIFdob2xlIEZvb2Rz&ref_=US_TRF_ALL_UFG_WFM_REFER_0422447">Grocery Pickup & Delivery</a></li>
                    <li><a href="https://www.wholefoodsmarket.com/shop/choose">Catering</a></li>
                    <li><a href="https://www.wholefoodsmarket.com/shipped-to-you">Shipped to You</a></li>
                    <li><a href="https://www.wholefoodsmarket.com/amazon">Amazon Prime at Whole Foods</a></li>
                    <li><a href="https://wholefoods.buyatab.com/custom/wholefoods/?page=giftcards&accessible=null">Gift Cards</a></li>
                    <li><a href="https://www.wholefoodsmarket.com/special-diets">Special Diets</a></li>
                    <li><a href="https://www.wholefoodsmarket.com/tips-and-ideas">Tips and Ideas</a></li>
                    <li><a href="https://www.wholefoodsmarket.com/online-ordering">Order Online</a></li>
                </ul>
            </div>
            <div className='mission'>
                <h3>Mission in Action</h3>
                    <ul>
                        <li><a href="https://www.wholefoodsmarket.com/mission-in-action/responsible-sourcing">Responsible Sourcing</a></li>
                        <li><a href="https://www.wholefoodsmarket.com/quality-standards">Quality Standards</a></li>
                        <li><a href="https://www.wholefoodsmarket.com/mission-in-action/community-giving">Community Giving</a></li>
                        <li><a href="https://www.wholefoodsmarket.com/mission-in-action/environmental-stewardship">Environmental Stewardship</a></li>
                    </ul>
            </div>
            <div className='about'>
                <h3>About</h3>
                <ul>
                    <li><a href="https://www.wholefoodsmarket.com/company-info">About Whole Foods Market</a></li>
                    <li><a href="https://www.wholefoodsmarket.com/mission-values">Our Values</a></li>
                    <li><a href="https://www.wholefoodsmarket.com/departments">Departments</a></li>
                    <li><a href="https://www.wholefoodsmarket.com/company-info/information-potential-suppliers">Information and Potential Suppliers</a></li>
                    <li><a href="https://careers.wholefoodsmarket.com/global/en">Careers</a></li>
                    <li><a href="https://media.wholefoodsmarket.com/">Newsroom</a></li>
                </ul></div>
            <div className='help'>
                <h3>Need Help?</h3>
                <ul>
                    <li><a href="https://www.wholefoodsmarket.com/customer-service">Visit customer care</a></li>
                </ul>
                <div className='help' id="connect">
                    <h3>Connect With Us</h3>
                    <div className='socials'>
                        <img id="fb" src="https://cdn.icon-icons.com/icons2/2985/PNG/512/facebook_social_media_icon_187125.png" 
                            width ="50px" height="50px"></img>
                        <img id="twit" src="https://cdn.icon-icons.com/icons2/815/PNG/512/Twitter_I_icon-icons.com_66277.png" 
                            width ="50px" height="50px"></img>
                        <img id="insta" src="https://cdn.icon-icons.com/icons2/792/PNG/512/INSTAGRAM_icon-icons.com_65535.png" 
                            width ="50px" height="50px"></img><br></br>
                        <img id="pin" src="https://cdn.icon-icons.com/icons2/815/PNG/512/Pinterest_icon-icons.com_66272.png" 
                            width ="50px" height="50px"></img>
                        <img id="tube" src="https://cdn.icon-icons.com/icons2/815/PNG/512/Youtube_I_icon-icons.com_66276.png"
                            width="50px" height="50px"></img>
                    </div>
                    <button className='signUp'>Sign up for email</button>
                </div>
            </div>
        </div>
        <div className='lilFt'>
            <div className='list'>
                <ul className='bottomBottom'>
                    <li><a href="https://www.wholefoodsmarket.com/legal/trademarks">Copyright 2023 WholeFoods Market IP, Inc.</a></li>
                    <li><a href="https://www.wholefoodsmarket.com/site-information/privacy-notice">Privacy Notice</a></li>
                    <li><a href="https://www.amazon.com/privacyprefs">Your Adds Privacy Choices</a></li>
                    <li><a href="https://www.wholefoodsmarket.com/legal/conditions-of-use">Conditions of Use</a></li>
                    <li><a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=GLVB9XDF9M8MU7UZ">Interest-Based Ads</a></li>
                    <li><a href="https://www.wholefoodsmarket.com/site-information/site-map">Site Map</a></li>
                    <li><a href="https://www.wholefoodsmarket.com/site-information">Site Information</a></li>
                    <li><a href="https://www.wholefoodsmarket.com/legal">Legal</a></li>
                    <li><a href="https://www.wholefoodsmarket.com/company-info/corporate-policies">Corporate Policies</a></li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer
