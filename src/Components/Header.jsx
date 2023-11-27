import React from 'react'

function Header() {
  return (
    <div className="header">
        <img id="logo" src ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Whole_Foods_Market_201x_logo.svg/330px-Whole_Foods_Market_201x_logo.svg.png"
            width="130px" height="130px"></img>
        <input id="search" type="text" placeholder='Search In-Store Products' ></input>
        <img id="icon" src="https://st4.depositphotos.com/21557188/23286/v/950/depositphotos_232864112-stock-illustration-simple-person-icon-linear-symbol.jpg"
            width="30px" height="30px"></img>
        <div>Login</div>
        <img src="https://www.iconpacks.net/icons/2/free-shopping-cart-icon-3045-thumb.png"
            width="30px" height="30px"></img>
        <div>Shopping Cart</div>
    </div>
  )
}

export default Header
