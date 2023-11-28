import React from 'react'

function Header() {
  return (
    <div>
      <div className="header">
          <img id="logo" src ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Whole_Foods_Market_201x_logo.svg/900px-Whole_Foods_Market_201x_logo.svg.png"
              width="90px" height="85px"></img>
          <input id="search" type="text" placeholder='Search In-Store Products' ></input>
          <div className='location'>
          <a href="https://www.google.com/maps/search/Whole+Foods/@41.0944249,-80.7190709,13z/data=!3m1!4b1?entry=ttu"><img id="gps" src="https://cdn1.iconfinder.com/data/icons/web-and-mobile-ui-outline-icon-kit/512/UI_Icons-05-512.png"
              width="40px" height="40px"></img></a>
            <div>Whole Foods Market <br></br>Find a Store</div>
          </div>
          <div id="login">
            <a href="https://www.amazon.com/ap/signin?clientContext=135-8775863-4851230&openid.pape.max_auth_age=15780000&openid.return_to=https%3A%2F%2Fwww.wholefoodsmarket.com%2Flogin%3Fdestination%3D%2F&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_wfm_web_us&openid.mode=checkid_setup&marketPlaceId=A1QRSCDALJFUQ9&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0">
              <img id="icon" src="https://st4.depositphotos.com/21557188/23286/v/950/depositphotos_232864112-stock-illustration-simple-person-icon-linear-symbol.jpg"
                width="30px" height="30px"></img></a>
            <div>Login</div>
          </div>
          <div id="cart">
            <a href="https://www.wholefoodsmarket.com/shipped-to-you/cart"><img src="https://www.iconpacks.net/icons/2/free-shopping-cart-icon-3045-thumb.png"
                width="30px" height="30px"></img></a>
            <div>Shopping Cart</div>
          </div>
      </div>
      <div className='nav'>
        <a href="https://www.wholefoodsmarket.com/products">Browse In-Store</a>
        <a href="https://www.wholefoodsmarket.com/sales-flyer">Weekly Sales</a>
        <a href="https://www.amazon.com/alm/storefront?almBrandId=VUZHIFdob2xlIEZvb2Rz&ref_=US_TRF_ALL_UFG_WFM_REFER_0472746">Grocery Pickup & Delivery</a>
        <a href="https://www.wholefoodsmarket.com/shop/choose">Catering</a>
        <a href="https://www.wholefoodsmarket.com/shipped-to-you">Shipped to You</a>
        <a href="https://www.wholefoodsmarket.com/app/lunch-dinner-to-go?_branch_match_id=1152276426739166503&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL8%2FIz0lNy89PKdZLLCjQy8nMy9aP9DRMz89KM%2FN1TAIAAYnv3ycAAAA%3D">Lunch & Dinner to Go</a>
        <a href="https://www.wholefoodsmarket.com/recipes">Recipes</a>
      </div>
    </div>
  )
}

export default Header
