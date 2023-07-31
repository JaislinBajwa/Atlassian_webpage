function Header(){
    return (
//         <div>
//             <img src = {require('./images/Atlassian-logo.png')} alt='logo2' height='130' width='300' className='logo' />
//         <div className='maindiv'>
//             <div className='navbar'>
//               <ul >
//                 <button>Products</button>
//                 <button>For Teams</button>
//                 <button>Support</button>
//               </ul>
//             </div>
           
//             <div className='navbar2'>
//               <ul>
//                 <button>Try Now</button>
//                 <button>Buy Now</button>
//                 <button>Login</button>
//               </ul>
//             </div>
                
//         </div>
//         </div>  
//     )
// }

// export default Header;
// src/components/Header.js
 
    
      <div className='mainNavbar'>
        <img
          src={require('./images/attlasian.png')} 
          alt="logo2"
          height="100"
          width="400"
          className="logo"
        />
<div className="navbar">
            <ul>
              <li>
                <button className="nav-button">Products &#9662;</button>
              </li>
              <li>
                <button className="nav-button">For Teams &#9662;</button>
              </li>
              <li>
                <button className="nav-button">Support &#9662;</button>
              </li>
            </ul>
          </div>

          <div className="navbar">
            <ul>
              <li>
                <button className="nav-button">Try Now</button>
              </li>
              <li>
                <button className="nav-button">Buy Now</button>
              </li>
              <li>
                <button className="nav-button">Login</button>
              </li>
            </ul>
          </div>
      </div>
    
  );
};

export default Header;
