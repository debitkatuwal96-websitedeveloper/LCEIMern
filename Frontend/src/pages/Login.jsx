import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


import '../assets/newSrc/Login.css';
import '../assets/newSrc/LCEICSS.css'
// import '../assets/newSrc/LCEICSS.css';


function Login() {
const { login } = useAuth();
  const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
   console.log('Form submitted with:', { email, password });
  try {
    const response = await axios.post('http://localhost:5000/api/login', {
      email,
      password
    });
console.log('Response received:', response.data); 
    

    if (response.data.success) {
      alert('Login successful');
        login({ email });
      // navigate('/dashboard'); // Change this route to your dashboard route
       navigate('/');
    } else {
      setError(response.data.message || 'Login failed');
    }
  } catch (err) {
    console.error(err);
      console.error('Error details:', err); 
    setError(err.response?.data?.message || 'Something went wrong');
  }
};


  return (
    <>   
    <div className="login-container">
      <div className="login-left">
        <div className="logo-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvvf48tTsJXPqG2njdmrl0HAsF_FrCxb035w&s"
            alt="LCEI Logo"
            className="logo"
          />
          <h1>
            Logistic Computer Educational <span>Institute</span>
          </h1>
        </div>

        <div className="illustration">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi5pkmLwtJpJmT4fDpGF6QRoNl2aD9tZMMttdHPHW7GRdxlTrUHA4Mz2lvh6bQPC8-iqk&usqp=CAU"
            alt="Computer Education Illustration"
          />
        </div>

        <div className="features">
          <div className="feature-item">
            <i className="fas fa-laptop-code"></i>
            <p>Hands-on Training</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-certificate"></i>
            <p>Certified Courses</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-chalkboard-teacher"></i>
            <p>Expert Instructors</p>
          </div>
        </div>
      </div>

      <div className="login-right">
        <div className="login-form-container">
          <h2>Welcome Back!</h2>
          <p className="subtitle">Sign in to access your student dashboard</p>

          <form className="login-form" onSubmit={handleSubmit}>
              {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="form-group">
              <label htmlFor="username">Student ID or Email</label>
              <div className="input-with-icon">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your student ID or email"
                   value={email}
        onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-with-icon">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                     value={password}
        onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="button" className="toggle-password">
                  <i className="fas fa-eye"></i>
                </button>
              </div>
            </div>

            <div className="form-options">
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link to="#" className="forgot-password">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="login-button">Log In</button>

            <div className="social-login">
              <p>Or sign in with</p>
              <div className="social-icons">
                <a href="#" className="social-icon google"><i className="fab fa-google"></i></a>
                <a href="#" className="social-icon microsoft"><i className="fab fa-microsoft"></i></a>
                <a href="#" className="social-icon apple"><i className="fab fa-apple"></i></a>
              </div>
            </div>

            <div className="register-link">
              <p>
                New to TechPro? <Link to="/signup">Create account</Link>
              </p>
            </div>
          </form>
        </div>
          <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-logo">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvvf48tTsJXPqG2njdmrl0HAsF_FrCxb035w&s"
                  alt="LCEI"
                  className="oo"
                />
              </div>
              <p className="footer-about">
                Logistic Computer Educational Institute provides industry-relevant tech education to students worldwide.
              </p>
              <div className="footer-social">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>

            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/courses">All Courses</Link></li>
                <li><Link to="/">Instructors</Link></li>
                <li><Link to="/">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Support</h3>
              <ul>
                <li><Link to="/">FAQ</Link></li>
                <li><Link to="/">Help Center</Link></li>
                <li><Link to="/">Terms of Service</Link></li>
                <li><Link to="/">Privacy Policy</Link></li>
                <li><Link to="/">Accessibility</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Newsletter</h3>
              <p>Subscribe to get updates on new courses and special offers.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email address" required />
                <button type="submit" className="btn btn-primary">
                  <i className="fas fa-paper-plane"></i> Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2023 Logistic Computer Educational Institute. All rights reserved.</p>
            <div className="footer-payments">
              <i className="fab fa-cc-visa"></i>
              <i className="fab fa-cc-mastercard"></i>
              <i className="fab fa-cc-paypal"></i>
              <i className="fab fa-cc-apple-pay"></i>
            </div>
          </div>
        </div>
      </footer>
      </div>

  
    </div>
      

     </>
  )
}

export default Login



// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import { Helmet } from 'react-helmet';
// import '../assets/newSrc/Login.css';
// import '../assets/newSrc/LCEICSS.css';

// function Login() {
//   const { login } = useAuth();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');
    
//     try {
//       const response = await axios.post('http://localhost:5000/api/login', {
//         email,
//         password
//       }, {
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         withCredentials: true // For secure cookies
//       });

//       if (response.data.success) {
//         login({ email: response.data.user.email, token: response.data.token });
//         navigate('/');
//       } else {
//         setError(response.data.message || 'Login failed');
//       }
//     } catch (err) {
//       console.error('Login error:', err);
//       setError(err.response?.data?.message || 'Something went wrong. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     const passwordInput = document.getElementById('password');
//     const toggleIcon = document.querySelector('.toggle-password i');
//     if (passwordInput.type === 'password') {
//       passwordInput.type = 'text';
//       toggleIcon.classList.replace('fa-eye', 'fa-eye-slash');
//     } else {
//       passwordInput.type = 'password';
//       toggleIcon.classList.replace('fa-eye-slash', 'fa-eye');
//     }
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Login | Logistic Computer Education Institute</title>
//         <meta 
//           name="description" 
//           content="Login to your student account at Logistic Computer Education Institute to access courses and resources." 
//         />
//         <meta name="keywords" content="login, student portal, computer education, tech courses" />
//         <meta property="og:title" content="Student Login | Logistic Institute" />
//         <meta property="og:description" content="Access your student dashboard and learning resources" />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content={window.location.href} />
//         <link rel="canonical" href="https://your-institute.com/login" />
//       </Helmet>

//       <div className="login-container">
//         <div className="login-left">
//           <div className="logo-container">
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvvf48tTsJXPqG2njdmrl0HAsF_FrCxb035w&s"
//               alt="LCEI Logo"
//               className="logo"
//               loading="lazy"
//               width="120"
//               height="120"
//             />
//             <h1>
//               Logistic Computer Educational <span>Institute</span>
//             </h1>
//           </div>

//           <div className="illustration">
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi5pkmLwtJpJmT4fDpGF6QRoNl2aD9tZMMttdHPHW7GRdxlTrUHA4Mz2lvh6bQPC8-iqk&usqp=CAU"
//               alt="Computer Education Illustration"
//               loading="lazy"
//               width="400"
//               height="300"
//             />
//           </div>

//           <div className="features">
//             <div className="feature-item">
//               <i className="fas fa-laptop-code" aria-hidden="true"></i>
//               <p>Hands-on Training</p>
//             </div>
//             <div className="feature-item">
//               <i className="fas fa-certificate" aria-hidden="true"></i>
//               <p>Certified Courses</p>
//             </div>
//             <div className="feature-item">
//               <i className="fas fa-chalkboard-teacher" aria-hidden="true"></i>
//               <p>Expert Instructors</p>
//             </div>
//           </div>
//         </div>

//         <div className="login-right">
//           <div className="login-form-container">
//             <h1>Welcome Back!</h1>
//             <p className="subtitle">Sign in to access your student dashboard</p>

//             <form className="login-form" onSubmit={handleSubmit}>
//               {error && <div className="error-message" role="alert">{error}</div>}
              
//               <div className="form-group">
//                 <label htmlFor="email">Email Address</label>
//                 <div className="input-with-icon">
//                   <i className="fas fa-envelope" aria-hidden="true"></i>
//                   <input
//                     type="email"
//                     id="email"
//                     placeholder="Enter your email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     autoComplete="email"
//                     aria-required="true"
//                   />
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label htmlFor="password">Password</label>
//                 <div className="input-with-icon">
//                   <i className="fas fa-lock" aria-hidden="true"></i>
//                   <input
//                     type="password"
//                     id="password"
//                     placeholder="Enter your password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     autoComplete="current-password"
//                     aria-required="true"
//                   />
//                   <button 
//                     type="button" 
//                     className="toggle-password"
//                     onClick={togglePasswordVisibility}
//                     aria-label="Toggle password visibility"
//                   >
//                     <i className="fas fa-eye"></i>
//                   </button>
//                 </div>
//               </div>

//               <div className="form-options">
//                 <div className="remember-me">
//                   <input 
//                     type="checkbox" 
//                     id="remember" 
//                     aria-label="Remember me"
//                   />
//                   <label htmlFor="remember">Remember me</label>
//                 </div>
//                 <Link to="/forgot-password" className="forgot-password">
//                   Forgot password?
//                 </Link>
//               </div>

//               <button 
//                 type="submit" 
//                 className="login-button"
//                 disabled={isLoading}
//               >
//                 {isLoading ? 'Logging in...' : 'Log In'}
//               </button>

//               <div className="social-login">
//                 <p>Or sign in with</p>
//                 <div className="social-icons">
//                   <a href="#" className="social-icon google" aria-label="Sign in with Google">
//                     <i className="fab fa-google" aria-hidden="true"></i>
//                   </a>
//                   <a href="#" className="social-icon microsoft" aria-label="Sign in with Microsoft">
//                     <i className="fab fa-microsoft" aria-hidden="true"></i>
//                   </a>
//                   <a href="#" className="social-icon apple" aria-label="Sign in with Apple">
//                     <i className="fab fa-apple" aria-hidden="true"></i>
//                   </a>
//                 </div>
//               </div>

//               <div className="register-link">
//                 <p>
//                   New to LCEI? <Link to="/signup">Create account</Link>
//                 </p>
//               </div>
//             </form>
//           </div>

//           <footer className="footer">
//             <div className="container">
//               <div className="footer-grid">
//                 <div className="footer-col">
//                   <div className="footer-logo">
//                     <img
//                       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvvf48tTsJXPqG2njdmrl0HAsF_FrCxb035w&s"
//                       alt="LCEI Logo"
//                       className="oo"
//                       loading="lazy"
//                       width="120"
//                       height="40"
//                     />
//                   </div>
//                   <p className="footer-about">
//                     Logistic Computer Educational Institute provides industry-relevant tech education to students worldwide.
//                   </p>
//                   <div className="footer-social">
//                     <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
//                     <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
//                     <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
//                     <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
//                   </div>
//                 </div>

//                 <div className="footer-col">
//                   <h3>Quick Links</h3>
//                   <ul>
//                     <li><Link to="/about">About Us</Link></li>
//                     <li><Link to="/courses">All Courses</Link></li>
//                     <li><Link to="/instructors">Instructors</Link></li>
//                     <li><Link to="/blog">Blog</Link></li>
//                     <li><Link to="/contact">Contact</Link></li>
//                   </ul>
//                 </div>

//                 <div className="footer-col">
//                   <h3>Support</h3>
//                   <ul>
//                     <li><Link to="/faq">FAQ</Link></li>
//                     <li><Link to="/help">Help Center</Link></li>
//                     <li><Link to="/terms">Terms of Service</Link></li>
//                     <li><Link to="/privacy">Privacy Policy</Link></li>
//                     <li><Link to="/accessibility">Accessibility</Link></li>
//                   </ul>
//                 </div>

//                 <div className="footer-col">
//                   <h3>Newsletter</h3>
//                   <p>Subscribe to get updates on new courses and special offers.</p>
//                   <form className="newsletter-form">
//                     <label htmlFor="newsletter-email" className="sr-only">Email address</label>
//                     <input 
//                       type="email" 
//                       id="newsletter-email" 
//                       placeholder="Your email address" 
//                       required 
//                       aria-required="true"
//                     />
//                     <button type="submit" className="btn btn-primary">
//                       <i className="fas fa-paper-plane"></i> Subscribe
//                     </button>
//                   </form>
//                 </div>
//               </div>

//               <div className="footer-bottom">
//                 <p>&copy; {new Date().getFullYear()} Logistic Computer Educational Institute. All rights reserved.</p>
//                 <div className="footer-payments" aria-hidden="true">
//                   <i className="fab fa-cc-visa"></i>
//                   <i className="fab fa-cc-mastercard"></i>
//                   <i className="fab fa-cc-paypal"></i>
//                   <i className="fab fa-cc-apple-pay"></i>
//                 </div>
//               </div>
//             </div>
//           </footer>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;