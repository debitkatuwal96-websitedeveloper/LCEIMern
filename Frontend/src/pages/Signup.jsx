import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../assets/newSrc/Signup.css';
import '../assets/newSrc/LCEICSS.css'

function Signup() {
      
    const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (password !== confirmPassword) {
  //     alert("Passwords do not match!");
  //     return;
  //   }

  //   if (!agreedToTerms) {
  //     alert("You must agree to the terms.");
  //     return;
  //   }

  //   const formData = {
  //     firstName,
  //     lastName,
  //     email,
  //     phone,
  //     course,
  //     password,
  //   };

  //   try {
  //    const result = await axios.post('https://lceimern.onrender.com/api/signup', formData);

  //     console.log('Signup successful:', result.data);
  //     alert("Signup successful!");
  //       navigate('/login');
  //   } catch (error) {
  //     console.error('Signup error:', error);
  //     alert("Signup failed. Please try again.");
  //   }
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  if (!agreedToTerms) {
    alert("You must agree to the terms.");
    return;
  }

  const formData = {
    firstName,
    lastName,
    email,
    phone,
    course,
    password,
  };

  try {
    setLoading(true); // Start loading
    const result = await axios.post('https://lceimern.onrender.com/api/signup', formData);
    console.log('Signup successful:', result.data);
    alert("Signup successful!");
    navigate('/login');
  } catch (error) {
    console.error('Signup error:', error);
    alert("Signup failed. Please try again.");
  } finally {
    setLoading(false); // Stop loading
  }
};



  return (
    <div className="signup-page">
   
    

      <div className="signup-container">
        <div className="signup-left">
          <div className="logo-container">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvvf48tTsJXPqG2njdmrl0HAsF_FrCxb035w&s" 
              alt="Logistic Computer Educational Institute Logo" 
              className="logo" 
            />
            <h1>Logistic Computer Educational <span>Institute</span></h1>
          </div>
          <div className="illustration">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi5pkmLwtJpJmT4fDpGF6QRoNl2aD9tZMMttdHPHW7GRdxlTrUHA4Mz2lvh6bQPC8-iqk&usqp=CAU" 
              alt="Computer Education Illustration" 
            />
          </div>
          <div className="benefits">
            <h3>Why Join TechPro?</h3>
            <ul className="benefits-list">
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Access to premium courses</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Expert-led training programs</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Hands-on lab sessions</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Industry-recognized certifications</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Career support services</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="signup-right">
          <div className="signup-form-container">
            <h2>Create Your Account</h2>
            <p className="subtitle">Join our community of tech learners</p>
            
            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="first-name">First Name</label>
                  <div className="input-with-icon">
                    <i className="fas fa-user"></i>
                    <input type="text" id="first-name" placeholder="Enter your first name"   value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="last-name">Last Name</label>
                  <div className="input-with-icon">
                    <i className="fas fa-user"></i>
                    <input type="text" id="last-name" placeholder="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                  </div>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-with-icon">
                  <i className="fas fa-envelope"></i>
                  <input type="email" id="email" placeholder="Enter your email address"   value={email}
                onChange={(e) => setEmail(e.target.value)} required />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <div className="input-with-icon">
                  <i className="fas fa-phone"></i>
                  <input type="tel" id="phone" placeholder="Enter your phone number"  value={phone}
                onChange={(e) => setPhone(e.target.value)} required />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="course">Select Course Interest</label>
                <div className="input-with-icon">
                  <i className="fas fa-laptop-code"></i>
                  <select                 id="course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
 required>
                    <option value="" disabled>Select your course interest</option>
                    <option value="web-dev">Web Development</option>
                    <option value="data-science">Data Science</option>
                    <option value="cyber-security">Cyber Security</option>
                    <option value="ai-ml">AI & Machine Learning</option>
                    <option value="cloud-computing">Cloud Computing</option>
                    <option value="graphic-design">Graphic Design</option>
                  </select>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-with-icon">
                    <i className="fas fa-lock"></i>
                    <input type="password" id="password" placeholder="Create a password"   value={password}
                  onChange={(e) => setPassword(e.target.value)} required />
                    <button type="button" className="toggle-password">
                      <i className="fas fa-eye"></i>
                    </button>
                  </div>
                  <div className="password-strength">
                    <div className="strength-meter"></div>
                    <span className="strength-text">Password strength: <span>Weak</span></span>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="confirm-password">Confirm Password</label>
                  <div className="input-with-icon">
                    <i className="fas fa-lock"></i>
                    <input type="password" id="confirm-password" placeholder="Confirm your password" value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)} required />
                  </div>
                </div>
              </div>
              
              <div className="form-group terms-group">
                <input type="checkbox" id="terms" required  checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)} />
                <label htmlFor="terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
              </div>
              
              {/* <button type="submit" className="signup-button">Create Account</button> */}
              <button type="submit" className="signup-button" disabled={loading}>
  {loading ? (
    <div className="loader-btn"></div>
  ) : (
    "Create Account"
  )}
</button>

              <div className="login-link">
                <p>Already have an account? <a href="/login">Log in</a></p>
              </div>
            </form>
          </div>
          
          {/* Footer */}
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
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/courses">All Courses</a></li>
                    <li><a href="/">Instructors</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/contact">Contact</a></li>
                  </ul>
                </div>
                
                <div className="footer-col">
                  <h3>Support</h3>
                  <ul>
                    <li><a href="/">FAQ</a></li>
                    <li><a href="/">Help Center</a></li>
                    <li><a href="/">Terms of Service</a></li>
                    <li><a href="/">Privacy Policy</a></li>
                    <li><a href="/">Accessibility</a></li>
                  </ul>
                </div>
                
                <div className="footer-col">
                  <h3>Newsletter</h3>
                  <p>Subscribe to get updates on new courses and special offers.</p>
                  <form className="newsletter-form">
                    <input type="email" placeholder="Your email address" aria-label="Email for newsletter" required />
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
    </div>
  );
}

export default Signup;


// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
// import '../assets/newSrc/Signup.css';
// import '../assets/newSrc/LCEICSS.css';

// function Signup() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     course: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [agreedToTerms, setAgreedToTerms] = useState(false);
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [passwordStrength, setPasswordStrength] = useState({
//     score: 0,
//     label: 'Weak'
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));

//     // Check password strength when password changes
//     if (name === 'password') {
//       checkPasswordStrength(value);
//     }
//   };

//   const checkPasswordStrength = (password) => {
//     let score = 0;
//     // Length check
//     if (password.length >= 8) score++;
//     if (password.length >= 12) score++;
//     // Complexity checks
//     if (/[A-Z]/.test(password)) score++;
//     if (/[0-9]/.test(password)) score++;
//     if (/[^A-Za-z0-9]/.test(password)) score++;

//     const labels = ['Weak', 'Fair', 'Good', 'Strong', 'Very Strong'];
//     setPasswordStrength({
//       score,
//       label: labels[Math.min(score, labels.length - 1)]
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     // Validation
//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match!");
//       setIsLoading(false);
//       return;
//     }

//     if (!agreedToTerms) {
//       setError("You must agree to the terms.");
//       setIsLoading(false);
//       return;
//     }

//     try {
//       const result = await axios.post('http://localhost:5000/api/signup', {
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         email: formData.email,
//         phone: formData.phone,
//         course: formData.course,
//         password: formData.password
//       }, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       console.log('Signup successful:', result.data);
//       navigate('/login');
//     } catch (error) {
//       console.error('Signup error:', error);
//       setError(error.response?.data?.message || "Signup failed. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const togglePasswordVisibility = (fieldId) => {
//     const field = document.getElementById(fieldId);
//     const toggleIcon = document.querySelector(`#${fieldId} + .toggle-password i`);
//     if (field.type === 'password') {
//       field.type = 'text';
//       toggleIcon.classList.replace('fa-eye', 'fa-eye-slash');
//     } else {
//       field.type = 'password';
//       toggleIcon.classList.replace('fa-eye-slash', 'fa-eye');
//     }
//   };

//   return (
//     <div className="signup-page">
//       <Helmet>
//         <title>Sign Up | Logistic Computer Education Institute</title>
//         <meta 
//           name="description" 
//           content="Create your account at Logistic Computer Education Institute to access our tech courses and learning resources." 
//         />
//         <meta name="keywords" content="signup, register, computer education, tech courses" />
//         <meta property="og:title" content="Sign Up | Logistic Institute" />
//         <meta property="og:description" content="Join our community of tech learners" />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content={window.location.href} />
//         <link rel="canonical" href="https://your-institute.com/signup" />
//       </Helmet>

//       <div className="signup-container">
//         <div className="signup-left">
//           <div className="logo-container">
//             <img 
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvvf48tTsJXPqG2njdmrl0HAsF_FrCxb035w&s" 
//               alt="Logistic Computer Educational Institute Logo" 
//               className="logo" 
//               loading="lazy"
//               width="120"
//               height="120"
//             />
//             <h1>Logistic Computer Educational <span>Institute</span></h1>
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
//           <div className="benefits">
//             <h3>Why Join LCEI?</h3>
//             <ul className="benefits-list">
//               <li>
//                 <i className="fas fa-check-circle" aria-hidden="true"></i>
//                 <span>Access to premium courses</span>
//               </li>
//               <li>
//                 <i className="fas fa-check-circle" aria-hidden="true"></i>
//                 <span>Expert-led training programs</span>
//               </li>
//               <li>
//                 <i className="fas fa-check-circle" aria-hidden="true"></i>
//                 <span>Hands-on lab sessions</span>
//               </li>
//               <li>
//                 <i className="fas fa-check-circle" aria-hidden="true"></i>
//                 <span>Industry-recognized certifications</span>
//               </li>
//               <li>
//                 <i className="fas fa-check-circle" aria-hidden="true"></i>
//                 <span>Career support services</span>
//               </li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="signup-right">
//           <div className="signup-form-container">
//             <h2>Create Your Account</h2>
//             <p className="subtitle">Join our community of tech learners</p>
            
//             {error && <div className="error-message" role="alert">{error}</div>}
            
//             <form className="signup-form" onSubmit={handleSubmit}>
//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="first-name">First Name</label>
//                   <div className="input-with-icon">
//                     <i className="fas fa-user" aria-hidden="true"></i>
//                     <input 
//                       type="text" 
//                       id="first-name" 
//                       name="firstName"
//                       placeholder="Enter your first name"   
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       required
//                       autoComplete="given-name"
//                     />
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="last-name">Last Name</label>
//                   <div className="input-with-icon">
//                     <i className="fas fa-user" aria-hidden="true"></i>
//                     <input 
//                       type="text" 
//                       id="last-name" 
//                       name="lastName"
//                       placeholder="Enter your last name" 
//                       value={formData.lastName} 
//                       onChange={handleChange} 
//                       required 
//                       autoComplete="family-name"
//                     />
//                   </div>
//                 </div>
//               </div>
              
//               <div className="form-group">
//                 <label htmlFor="email">Email Address</label>
//                 <div className="input-with-icon">
//                   <i className="fas fa-envelope" aria-hidden="true"></i>
//                   <input 
//                     type="email" 
//                     id="email" 
//                     name="email"
//                     placeholder="Enter your email address"   
//                     value={formData.email}
//                     onChange={handleChange} 
//                     required 
//                     autoComplete="email"
//                   />
//                 </div>
//               </div>
              
//               <div className="form-group">
//                 <label htmlFor="phone">Phone Number</label>
//                 <div className="input-with-icon">
//                   <i className="fas fa-phone" aria-hidden="true"></i>
//                   <input 
//                     type="tel" 
//                     id="phone" 
//                     name="phone"
//                     placeholder="Enter your phone number"  
//                     value={formData.phone}
//                     onChange={handleChange} 
//                     required 
//                     autoComplete="tel"
//                   />
//                 </div>
//               </div>
              
//               <div className="form-group">
//                 <label htmlFor="course">Select Course Interest</label>
//                 <div className="input-with-icon">
//                   <i className="fas fa-laptop-code" aria-hidden="true"></i>
//                   <select 
//                     id="course"
//                     name="course"
//                     value={formData.course}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="" disabled>Select your course interest</option>
//                     <option value="web-dev">Web Development</option>
//                     <option value="data-science">Data Science</option>
//                     <option value="cyber-security">Cyber Security</option>
//                     <option value="ai-ml">AI & Machine Learning</option>
//                     <option value="cloud-computing">Cloud Computing</option>
//                     <option value="graphic-design">Graphic Design</option>
//                   </select>
//                 </div>
//               </div>
              
//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="password">Password</label>
//                   <div className="input-with-icon">
//                     <i className="fas fa-lock" aria-hidden="true"></i>
//                     <input 
//                       type="password" 
//                       id="password" 
//                       name="password"
//                       placeholder="Create a password"   
//                       value={formData.password}
//                       onChange={handleChange} 
//                       required 
//                       autoComplete="new-password"
//                     />
//                     <button 
//                       type="button" 
//                       className="toggle-password"
//                       onClick={() => togglePasswordVisibility('password')}
//                       aria-label="Toggle password visibility"
//                     >
//                       <i className="fas fa-eye"></i>
//                     </button>
//                   </div>
//                   <div className="password-strength">
//                     <div 
//                       className="strength-meter"
//                       data-strength={passwordStrength.score}
//                     ></div>
//                     <span className="strength-text">
//                       Password strength: <span>{passwordStrength.label}</span>
//                     </span>
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="confirm-password">Confirm Password</label>
//                   <div className="input-with-icon">
//                     <i className="fas fa-lock" aria-hidden="true"></i>
//                     <input 
//                       type="password" 
//                       id="confirm-password" 
//                       name="confirmPassword"
//                       placeholder="Confirm your password" 
//                       value={formData.confirmPassword} 
//                       onChange={handleChange} 
//                       required 
//                       autoComplete="new-password"
//                     />
//                     <button 
//                       type="button" 
//                       className="toggle-password"
//                       onClick={() => togglePasswordVisibility('confirm-password')}
//                       aria-label="Toggle password visibility"
//                     >
//                       <i className="fas fa-eye"></i>
//                     </button>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="form-group terms-group">
//                 <input 
//                   type="checkbox" 
//                   id="terms" 
//                   required  
//                   checked={agreedToTerms}
//                   onChange={(e) => setAgreedToTerms(e.target.checked)} 
//                 />
//                 <label htmlFor="terms">
//                   I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
//                 </label>
//               </div>
              
//               <button 
//                 type="submit" 
//                 className="signup-button"
//                 disabled={isLoading}
//               >
//                 {isLoading ? 'Creating Account...' : 'Create Account'}
//               </button>
              
//               <div className="login-link">
//                 <p>Already have an account? <Link to="/login">Log in</Link></p>
//               </div>
//             </form>
//           </div>
          
//           {/* Footer */}
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
//                       aria-label="Email for newsletter" 
//                       required 
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
//     </div>
//   );
// }

// export default Signup;