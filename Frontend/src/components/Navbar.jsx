// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// import { Link } from 'react-router-dom';
// import '../assets/newSrc/LCEICSS.css';
// import '../css/lcei.css';

// function Navbar() {
//   const { user, logout } = useAuth();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       <div className="container">
//         <Link to="/" className="logo" onClick={closeMobileMenu}>
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvvf48tTsJXPqG2njdmrl0HAsF_FrCxb035w&s"
//             alt="Logistic Computer Educational Institute"
//             className="logo-img"
//           />
//           <span className="logo-text">LOGISTIC</span>
//         </Link>

//         <div className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
//           <div className="breadcrumbs">
//             <Link to="/" onClick={closeMobileMenu}>Home</Link>
//           </div>

//           <div className="main-nav">
//             {user && <Link to="/courses" onClick={closeMobileMenu}>Courses</Link>}
//             <Link to="/about" onClick={closeMobileMenu}>About</Link>
//             <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
//           </div>

//           <div className="auth-nav">
//             {user ? (
//               <>
//                 <span className="welcome-text">Welcome, {user.name}</span>
//                 <button 
//                   onClick={() => {
//                     logout();
//                     alert('Logged out successfully');
//                     closeMobileMenu();
//                   }}
//                   className="btn btn-outline" 
//                   style={{ color: '#2563EB' }}
//                 >
//                   Log Out
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link to="/login" onClick={closeMobileMenu} className="btn btn-outline" style={{ color: '#2563EB' }}>
//                   Log In
//                 </Link>
//                 <Link to="/signup" onClick={closeMobileMenu} className="btn btn-primary" style={{ color: '#fcfdfe' }}>
//                   Sign Up
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>

//         <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
//           <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import '../assets/newSrc/LCEICSS.css';
import '../css/lcei.css';

function Navbar() {
 const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" onClick={closeMobileMenu} className="logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvvf48tTsJXPqG2njdmrl0HAsF_FrCxb035w&s"
            alt="Logistic Computer Educational Institute"
            className="logo-img"
          />
          <span className="logo-text">LOGISTIC</span>
        </Link>

        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <div className="breadcrumbs">
            <Link to="/" onClick={closeMobileMenu}>Home</Link>
          </div>

          <div className="main-nav">
            {user && <Link to="/courses" onClick={closeMobileMenu}>Courses</Link>}
            <Link to="/about" onClick={closeMobileMenu}>About</Link>
            <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
          </div>

           <div className="auth-nav">
                     {user ? (
                       <>
                         <span className="welcome-text">{user.name}</span>
                         <button 
                           onClick={() => {
                             logout();
                             alert('Logged out successfully');
                           }}
                           className="btn btn-outline" 
                           style={{ color: '#2563EB' }}
                         >
                           Log Out
                         </button>
                       </>
                     ) : (
                       <>
                         <Link to="/login" className="btn btn-outline Suit" >
                           Log In
                         </Link>
                         <Link to="/signup" className="btn btn-primary" style={{ color: '#fcfdfe' }}>
                           Sign Up
                         </Link>
                       </>
                     )}
                   </div>
                 </div>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;