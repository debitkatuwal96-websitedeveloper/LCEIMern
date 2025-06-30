// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import styled from '@emotion/styled';
// import { FaLaptopCode, FaCalculator, FaDesktop, FaPalette, FaChartLine } from 'react-icons/fa';
// import { IoIosArrowForward, IoIosClose } from 'react-icons/io';
// import { useAuth } from '../context/AuthContext';
// import { Link, Navigate } from 'react-router-dom';// or 'next/link' if using Next.js

// // Move course data outside the component to prevent recreation on every render
// const COURSES_DATA = [
//   {
//     id: 1,
//     title: "Web Development",
//     icon: <FaLaptopCode />,
//     shortDesc: "Master full-stack development with modern technologies like React, Node.js, and MongoDB.",
//     duration: "6 Months",
//     skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "Database Management"],
//     careers: ["Frontend Developer", "Backend Developer", "Full Stack Engineer"],
//     certification: "Diploma in Web Development"
//   },
//   {
//     id: 2,
//     title: "Accounting",
//     icon: <FaCalculator />,
//     shortDesc: "Learn professional accounting practices with industry-standard software training.",
//     duration: "4 Months",
//     skills: ["Financial Accounting", "Tally ERP", "Taxation", "GST Filing", "Auditing"],
//     careers: ["Accountant", "Tax Consultant", "Auditing Assistant"],
//     certification: "Certificate in Professional Accounting"
//   },
//   {
//     id: 3,
//     title: "Computer Application",
//     icon: <FaDesktop />,
//     shortDesc: "Essential computer skills for office productivity and business applications.",
//     duration: "3 Months",
//     skills: ["MS Office", "Internet Applications", "Basic Programming", "Database Fundamentals"],
//     careers: ["Office Assistant", "Data Entry Operator", "Computer Operator"],
//     certification: "Certificate in Computer Applications"
//   },
//   {
//     id: 4,
//     title: "Graphic Design",
//     icon: <FaPalette />,
//     shortDesc: "Create stunning visuals with professional design tools and principles.",
//     duration: "5 Months",
//     skills: ["Adobe Photoshop", "Illustrator", "UI/UX Principles", "Branding", "Print Design"],
//     careers: ["Graphic Designer", "UI Designer", "Digital Artist"],
//     certification: "Diploma in Graphic Design"
//   },
//   {
//     id: 5,
//     title: "Digital Marketing",
//     icon: <FaChartLine />,
//     shortDesc: "Master online marketing strategies including SEO, social media, and analytics.",
//     duration: "4 Months",
//     skills: ["SEO", "Social Media Marketing", "Google Ads", "Content Marketing", "Analytics"],
//     careers: ["Digital Marketer", "SEO Specialist", "Social Media Manager"],
//     certification: "Certificate in Digital Marketing"
//   }
// ];

// // Animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1 }
//   }
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { duration: 0.5 }
//   }
// };

// const cardHover = {
//   scale: 1.03,
//   boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
// };

// function Courses() {
//   const { user } = useAuth();
//   const [selectedCourse, setSelectedCourse] = useState(null);

//   // Prevent background scroll when modal is open
//   useEffect(() => {
//     if (selectedCourse) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
    
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [selectedCourse]);

//   if (!user) return <Navigate to="/login" />;

//   return (
//     <CoursesPage>
//       {/* Header Section */}
//       <CoursesHero>
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//           className="hero-content"
//         >
//           <motion.h1 variants={itemVariants}>Our Courses</motion.h1>
//           <motion.p variants={itemVariants} className="subtext">
//             Explore professional programs designed for today's job market.
//           </motion.p>
//         </motion.div>
//       </CoursesHero>

//       {/* Courses Grid */}
//       <CoursesContainer>
//         <motion.div 
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//           className="courses-grid"
//         >
//           {COURSES_DATA.map((course) => (
//             <CourseCard
//               key={course.id}
//               variants={itemVariants}
//               whileHover={cardHover}
//               onClick={() => setSelectedCourse(course)}
//               aria-label={`View details for ${course.title}`}
//             >
//               <div className="course-icon" aria-hidden="true">{course.icon}</div>
//               <h3>{course.title}</h3>
//               <p className="short-desc">{course.shortDesc}</p>
//               <div className="view-details">
//                 View Details <IoIosArrowForward />
//               </div>
//             </CourseCard>
//           ))}
//         </motion.div>
//       </CoursesContainer>

//       {/* Course Details Modal */}
//       {selectedCourse && (
//         <ModalOverlay
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={() => setSelectedCourse(null)}
//           role="dialog"
//           aria-modal="true"
//           aria-labelledby="modal-title"
//         >
//           <motion.div 
//             className="modal-content"
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: 50, opacity: 0 }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button 
//               className="close-btn" 
//               onClick={() => setSelectedCourse(null)}
//               aria-label="Close modal"
//             >
//               <IoIosClose />
//             </button>
            
//             <div className="modal-header">
//               <div className="course-icon" aria-hidden="true">{selectedCourse.icon}</div>
//               <h3 id="modal-title">{selectedCourse.title}</h3>
//             </div>
            
//             <p className="course-desc">{selectedCourse.shortDesc}</p>
            
//             <div className="details-grid">
//               <div className="detail-item">
//                 <h4>Duration</h4>
//                 <p>{selectedCourse.duration}</p>
//               </div>
              
//               <div className="detail-item">
//                 <h4>Skills Covered</h4>
//                 <ul>
//                   {selectedCourse.skills.map((skill, index) => (
//                     <li key={index}>{skill}</li>
//                   ))}
//                 </ul>
//               </div>
              
//               <div className="detail-item">
//                 <h4>Career Opportunities</h4>
//                 <ul>
//                   {selectedCourse.careers.map((career, index) => (
//                     <li key={index}>{career}</li>
//                   ))}
//                 </ul>
//               </div>
              
//               <div className="detail-item">
//                 <h4>Certification</h4>
//                 <p>{selectedCourse.certification}</p>
//               </div>
//             </div>
            
//             <button className="enroll-btn">
//               Enroll Now <IoIosArrowForward />
//             </button>
//           </motion.div>
//         </ModalOverlay>
//       )}

//       {/* CTA Section */}
//       <CTASection>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h3>Not sure which course fits you best?</h3>
//           <p>Our career counselors can help you choose the right path based on your interests and goals.</p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="cta-button"
//           >
//             Book a Free Career Consultation
//           </motion.button>
//         </motion.div>
//       </CTASection>
//         {/* Add the Footer Here */}
//       <section className="footer">
//         <div className="container">
//           <div className="footer-grid">
//             <div className="footer-col">
//               <div className="footer-logo">
//                 <img
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvvf48tTsJXPqG2njdmrl0HAsF_FrCxb035w&s"
//                   alt="LCEI"
//                   className="oo"
//                 />
//               </div>
//               <p className="footer-about">
//                 Logistic Computer Educational Institute provides industry-relevant tech education to students worldwide.
//               </p>
//               <div className="footer-social">
//                 <a href="#"><i className="fab fa-facebook-f"></i></a>
//                 <a href="#"><i className="fab fa-twitter"></i></a>
//                 <a href="#"><i className="fab fa-linkedin-in"></i></a>
//                 <a href="#"><i className="fab fa-youtube"></i></a>
//               </div>
//             </div>

//             <div className="footer-col">
//               <h3>Quick Links</h3>
//               <ul>
//                 <li><Link to="/about">About Us</Link></li>
//                 <li><Link to="/courses">All Courses</Link></li>
//                 <li><Link to="/">Instructors</Link></li>
//                 <li><Link to="/">Blog</Link></li>
//                 <li><Link to="/contact">Contact</Link></li>
//               </ul>
//             </div>

//             <div className="footer-col">
//               <h3>Support</h3>
//               <ul>
//                 <li><Link to="/">FAQ</Link></li>
//                 <li><Link to="/">Help Center</Link></li>
//                 <li><Link to="/">Terms of Service</Link></li>
//                 <li><Link to="/">Privacy Policy</Link></li>
//                 <li><Link to="/">Accessibility</Link></li>
//               </ul>
//             </div>

//             <div className="footer-col">
//               <h3>Newsletter</h3>
//               <p>Subscribe to get updates on new courses and special offers.</p>
//               <form className="newsletter-form">
//                 <input type="email" placeholder="Your email address" required />
//                 <button type="submit" className="btn btn-primary">
//                   <i className="fas fa-paper-plane"></i> Subscribe
//                 </button>
//               </form>
//             </div>
//           </div>

//           <div className="footer-bottom">
//             <p>&copy; 2023 Logistic Computer Educational Institute. All rights reserved.</p>
//             <div className="footer-payments">
//               <i className="fab fa-cc-visa"></i>
//               <i className="fab fa-cc-mastercard"></i>
//               <i className="fab fa-cc-paypal"></i>
//               <i className="fab fa-cc-apple-pay"></i>
//             </div>
//           </div>
//         </div>
//       </section>
//     </CoursesPage>
//   );
// }

// // Styled components remain the same as in your original code
// const CoursesPage = styled.div`
//   font-family: 'Inter', sans-serif;
//   color: #374151;
//   line-height: 1.6;
// `;

// const CoursesHero = styled.section`
//   position: relative;
//   height: 40vh;
//   min-height: 300px;
//   background: url('https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center center;
//   background-size: cover;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   color: white;
  
//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.6);
//   }

//   .hero-content {
//     position: relative;
//     z-index: 1;
//     padding: 0 1rem;
//     max-width: 800px;

//     h1 {
//       font-size: 2.5rem;
//       font-weight: 700;
//       margin-bottom: 1rem;

//       @media (min-width: 768px) {
//         font-size: 3rem;
//       }
//     }

//     .subtext {
//       font-size: 1.2rem;
//       opacity: 0.9;

//       @media (min-width: 768px) {
//         font-size: 1.3rem;
//       }
//     }
//   }
// `;

// const CoursesContainer = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 3rem 1rem;

//   @media (min-width: 768px) {
//     padding: 4rem 2rem;
//   }

//   .courses-grid {
//     display: grid;
//     grid-template-columns: 1fr;
//     gap: 1.5rem;

//     @media (min-width: 768px) {
//       grid-template-columns: repeat(2, 1fr);
//     }

//     @media (min-width: 1024px) {
//       grid-template-columns: repeat(3, 1fr);
//     }
//   }
// `;

// const CourseCard = styled(motion.div)`
//   background-color: white;
//   border-radius: 0.5rem;
//   padding: 2rem;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
//   cursor: pointer;
//   transition: all 0.3s ease;
//   display: flex;
//   flex-direction: column;
//   border: 1px solid #e5e7eb;

//   .course-icon {
//     font-size: 2.5rem;
//     color: #2563eb;
//     margin-bottom: 1.5rem;
//   }

//   h3 {
//     font-size: 1.5rem;
//     margin-bottom: 1rem;
//     color: #1f2937;
//   }

//   .short-desc {
//     color: #6b7280;
//     margin-bottom: 1.5rem;
//     flex-grow: 1;
//   }

//   .view-details {
//     display: flex;
//     align-items: center;
//     color: #2563eb;
//     font-weight: 600;
//     gap: 0.5rem;
//     transition: all 0.3s ease;

//     svg {
//       transition: transform 0.3s ease;
//     }
//   }

//   &:hover {
//     .view-details {
//       color: #1d4ed8;

//       svg {
//         transform: translateX(3px);
//       }
//     }
//   }

//   &:focus {
//     outline: 2px solid #2563eb;
//     outline-offset: 2px;
//   }
// `;

// const ModalOverlay = styled(motion.div)`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;
//   padding: 1rem;

//   .modal-content {
//     background-color: white;
//     border-radius: 0.5rem;
//     padding: 2rem;
//     max-width: 800px;
//     width: 100%;
//     max-height: 90vh;
//     overflow-y: auto;
//     position: relative;
//     box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);

//     .close-btn {
//       position: absolute;
//       top: 1rem;
//       right: 1rem;
//       background: none;
//       border: none;
//       font-size: 1.5rem;
//       cursor: pointer;
//       color: #6b7280;
//       transition: color 0.3s ease;
//       padding: 0.5rem;

//       &:hover {
//         color: #1f2937;
//       }

//       &:focus {
//         outline: 2px solid #2563eb;
//         outline-offset: 2px;
//       }
//     }

//     .modal-header {
//       display: flex;
//       align-items: center;
//       gap: 1rem;
//       margin-bottom: 1.5rem;

//       .course-icon {
//         font-size: 2rem;
//         color: #2563eb;
//       }

//       h3 {
//         font-size: 1.8rem;
//         color: #1f2937;
//       }
//     }

//     .course-desc {
//       color: #6b7280;
//       margin-bottom: 2rem;
//       font-size: 1.1rem;
//     }

//     .details-grid {
//       display: grid;
//       grid-template-columns: 1fr;
//       gap: 1.5rem;
//       margin-bottom: 2rem;

//       @media (min-width: 768px) {
//         grid-template-columns: repeat(2, 1fr);
//       }

//       .detail-item {
//         h4 {
//           font-size: 1.1rem;
//           color: #1f2937;
//           margin-bottom: 0.5rem;
//         }

//         p, li {
//           color: #6b7280;
//           line-height: 1.7;
//         }

//         ul {
//           list-style-type: none;
//           padding-left: 0;

//           li {
//             position: relative;
//             padding-left: 1.5rem;
//             margin-bottom: 0.5rem;

//             &::before {
//               content: "•";
//               color: #2563eb;
//               font-size: 1.5rem;
//               position: absolute;
//               left: 0;
//               top: -0.25rem;
//             }
//           }
//         }
//       }
//     }

//     .enroll-btn {
//       padding: 0.75rem 1.5rem;
//       background-color: #2563eb;
//       color: white;
//       border: none;
//       border-radius: 0.375rem;
//       font-weight: 600;
//       font-size: 1rem;
//       cursor: pointer;
//       display: inline-flex;
//       align-items: center;
//       justify-content: center;
//       gap: 0.5rem;
//       transition: background-color 0.3s ease;
//       width: 100%;

//       &:hover {
//         background-color: #1d4ed8;
//       }

//       &:focus {
//         outline: 2px solid #1d4ed8;
//         outline-offset: 2px;
//       }
//     }
//   }
// `;

// const CTASection = styled.section`
//   background-color: #f3f4f6;
//   padding: 4rem 1rem;
//   text-align: center;

//   @media (min-width: 768px) {
//     padding: 5rem 2rem;
//   }

//   h3 {
//     font-size: 1.8rem;
//     color: #1f2937;
//     margin-bottom: 1rem;

//     @media (min-width: 768px) {
//       font-size: 2rem;
//     }
//   }

//   p {
//     color: #6b7280;
//     max-width: 600px;
//     margin: 0 auto 2rem;
//     font-size: 1.1rem;
//   }

//   .cta-button {
//     padding: 0.75rem 1.5rem;
//     background-color: #2563eb;
//     color: white;
//     border: none;
//     border-radius: 0.375rem;
//     font-weight: 600;
//     font-size: 1rem;
//     cursor: pointer;
//     transition: background-color 0.3s ease;

//     &:hover {
//       background-color: #1d4ed8;
//     }

//     &:focus {
//       outline: 2px solid #1d4ed8;
//       outline-offset: 2px;
//     }
//   }
// `;

// export default Courses;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';
import { 
  FaLaptopCode, 
  FaCalculator, 
  FaDesktop, 
  FaPalette, 
  FaChartLine 
} from 'react-icons/fa';
import { IoIosArrowForward, IoIosClose } from 'react-icons/io';
import { useAuth } from '../context/AuthContext';
import { Link, Navigate } from 'react-router-dom';

// Move course data outside the component to prevent recreation on every render
const COURSES_DATA = [
  {
    id: 1,
    title: "Web Development",
    slug: "web-development",
    icon: <FaLaptopCode />,
    shortDesc: "Master full-stack development with modern technologies like React, Node.js, and MongoDB.",
    duration: "6 Months",
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "Database Management"],
    careers: ["Frontend Developer", "Backend Developer", "Full Stack Engineer"],
    certification: "Diploma in Web Development"
  },
  {
    id: 2,
    title: "Accounting",
    slug: "accounting",
    icon: <FaCalculator />,
    shortDesc: "Learn professional accounting practices with industry-standard software training.",
    duration: "4 Months",
    skills: ["Financial Accounting", "Tally ERP", "Taxation", "GST Filing", "Auditing"],
    careers: ["Accountant", "Tax Consultant", "Auditing Assistant"],
    certification: "Certificate in Professional Accounting"
  },
  {
    id: 3,
    title: "Computer Application",
    slug: "computer-application",
    icon: <FaDesktop />,
    shortDesc: "Essential computer skills for office productivity and business applications.",
    duration: "3 Months",
    skills: ["MS Office", "Internet Applications", "Basic Programming", "Database Fundamentals"],
    careers: ["Office Assistant", "Data Entry Operator", "Computer Operator"],
    certification: "Certificate in Computer Applications"
  },
  {
    id: 4,
    title: "Graphic Design",
    slug: "graphic-design",
    icon: <FaPalette />,
    shortDesc: "Create stunning visuals with professional design tools and principles.",
    duration: "5 Months",
    skills: ["Adobe Photoshop", "Illustrator", "UI/UX Principles", "Branding", "Print Design"],
    careers: ["Graphic Designer", "UI Designer", "Digital Artist"],
    certification: "Diploma in Graphic Design"
  },
  {
    id: 5,
    title: "Digital Marketing",
    slug: "digital-marketing",
    icon: <FaChartLine />,
    shortDesc: "Master online marketing strategies including SEO, social media, and analytics.",
    duration: "4 Months",
    skills: ["SEO", "Social Media Marketing", "Google Ads", "Content Marketing", "Analytics"],
    careers: ["Digital Marketer", "SEO Specialist", "Social Media Manager"],
    certification: "Certificate in Digital Marketing"
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const cardHover = {
  scale: 1.03,
  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
};

function Courses() {
  const { user, checkAuth } = useAuth();
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Check authentication and prevent background scroll when modal is open
  useEffect(() => {
    checkAuth();
    
    if (selectedCourse) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCourse, checkAuth]);

  if (!user) return <Navigate to="/login" />;

  return (
    <CoursesPage>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Courses | Logistic Computer Education Institute</title>
        <meta 
          name="description" 
          content="Explore our professional courses in Web Development, Accounting, Computer Applications, Graphic Design, and Digital Marketing. Start your career today." 
        />
        <meta name="keywords" content="computer courses, web development course, accounting training, graphic design course, digital marketing certification" />
        <meta property="og:title" content="Professional Courses | Logistic Institute" />
        <meta property="og:description" content="Industry-relevant courses designed for today's job market" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="https://your-institute.com/courses-og-image.jpg" />
        <link rel="canonical" href="https://your-institute.com/courses" />
      </Helmet>

      {/* Preconnect to important origins */}
      <link rel="preconnect" href="https://api.your-backend.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      
      {/* Header Section */}
      <CoursesHero>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="hero-content"
        >
          <motion.h1 variants={itemVariants}>Our Courses</motion.h1>
          <motion.p variants={itemVariants} className="subtext">
            Explore professional programs designed for today's job market.
          </motion.p>
        </motion.div>
      </CoursesHero>

      {/* Courses Grid */}
      <CoursesContainer>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="courses-grid"
        >
          {COURSES_DATA.map((course) => (
            <CourseCard
              key={course.id}
              variants={itemVariants}
              whileHover={cardHover}
              onClick={() => setSelectedCourse(course)}
              aria-label={`View details for ${course.title} course`}
            >
              <div className="course-icon" aria-hidden="true">{course.icon}</div>
              <h3>{course.title}</h3>
              <p className="short-desc">{course.shortDesc}</p>
              <div className="view-details">
                View Details <IoIosArrowForward />
              </div>
            </CourseCard>
          ))}
        </motion.div>
      </CoursesContainer>

      {/* Course Details Modal */}
      {selectedCourse && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCourse(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div 
            className="modal-content"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="close-btn" 
              onClick={() => setSelectedCourse(null)}
              aria-label="Close course details"
            >
              <IoIosClose />
            </button>
            
            <div className="modal-header">
              <div className="course-icon" aria-hidden="true">{selectedCourse.icon}</div>
              <h3 id="modal-title">{selectedCourse.title}</h3>
            </div>
            
            <p className="course-desc">{selectedCourse.shortDesc}</p>
            
            <div className="details-grid">
              <div className="detail-item">
                <h4>Duration</h4>
                <p>{selectedCourse.duration}</p>
              </div>
              
              <div className="detail-item">
                <h4>Skills Covered</h4>
                <ul>
                  {selectedCourse.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
              
              <div className="detail-item">
                <h4>Career Opportunities</h4>
                <ul>
                  {selectedCourse.careers.map((career, index) => (
                    <li key={index}>{career}</li>
                  ))}
                </ul>
              </div>
              
              <div className="detail-item">
                <h4>Certification</h4>
                <p>{selectedCourse.certification}</p>
              </div>
            </div>
            
            {/* <Link to={`/enroll/${selectedCourse.slug}`} className="enroll-btn"> */}
            <Link className="enroll-btn">
              Enroll Now <IoIosArrowForward />
            </Link>
          </motion.div>
        </ModalOverlay>
      )}

      {/* CTA Section */}
      <CTASection>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Not sure which course fits you best?</h3>
          <p>Our career counselors can help you choose the right path based on your interests and goals.</p>
          {/* <Link to="/consultation"> */}
          <Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-button"
            >
              Book a Free Career Consultation
            </motion.button>
          </Link>
        </motion.div>
      </CTASection>

      {/* Footer Section */}
      <Footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-logo">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvvf48tTsJXPqG2njdmrl0HAsF_FrCxb035w&s"
                  alt="LCEI Logo"
                  className="oo"
                  loading="lazy"
                  width="120"
                  height="40"
                />
              </div>
              <p className="footer-about">
                Logistic Computer Educational Institute provides industry-relevant tech education to students worldwide.
              </p>
              <div className="footer-social">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              </div>
            </div>

            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/courses">All Courses</Link></li>
                <li><Link to="/instructors">Instructors</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Support</h3>
              <ul>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/help">Help Center</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/accessibility">Accessibility</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Newsletter</h3>
              <p>Subscribe to get updates on new courses and special offers.</p>
              <form className="newsletter-form">
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input 
                  type="email" 
                  id="newsletter-email" 
                  placeholder="Your email address" 
                  required 
                  aria-required="true"
                />
                <button type="submit" className="btn btn-primary">
                  <i className="fas fa-paper-plane"></i> Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Logistic Computer Educational Institute. All rights reserved.</p>
            <div className="footer-payments" aria-hidden="true">
              <i className="fab fa-cc-visa"></i>
              <i className="fab fa-cc-mastercard"></i>
              <i className="fab fa-cc-paypal"></i>
              <i className="fab fa-cc-apple-pay"></i>
            </div>
          </div>
        </div>
      </Footer>
    </CoursesPage>
  );
}

// Styled components
const CoursesPage = styled.div`
  font-family: 'Inter', sans-serif;
  color: #374151;
  line-height: 1.6;
`;

const CoursesHero = styled.section`
  position: relative;
  height: 40vh;
  min-height: 300px;
  background: url('https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .hero-content {
    position: relative;
    z-index: 1;
    padding: 0 1rem;
    max-width: 800px;

    h1 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;

      @media (min-width: 768px) {
        font-size: 3rem;
      }
    }

    .subtext {
      font-size: 1.2rem;
      opacity: 0.9;

      @media (min-width: 768px) {
        font-size: 1.3rem;
      }
    }
  }
`;

const CoursesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }

  .courses-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

const CourseCard = styled(motion.div)`
  background-color: white;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e7eb;

  .course-icon {
    font-size: 2.5rem;
    color: #2563eb;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #1f2937;
  }

  .short-desc {
    color: #6b7280;
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }

  .view-details {
    display: flex;
    align-items: center;
    color: #2563eb;
    font-weight: 600;
    gap: 0.5rem;
    transition: all 0.3s ease;

    svg {
      transition: transform 0.3s ease;
    }
  }

  &:hover {
    .view-details {
      color: #1d4ed8;

      svg {
        transform: translateX(3px);
      }
    }
  }

  &:focus {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;

  .modal-content {
    background-color: white;
    border-radius: 0.5rem;
    padding: 2rem;
    max-width: 800px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);

    .close-btn {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #6b7280;
      transition: color 0.3s ease;
      padding: 0.5rem;

      &:hover {
        color: #1f2937;
      }

      &:focus {
        outline: 2px solid #2563eb;
        outline-offset: 2px;
      }
    }

    .modal-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;

      .course-icon {
        font-size: 2rem;
        color: #2563eb;
      }

      h3 {
        font-size: 1.8rem;
        color: #1f2937;
      }
    }

    .course-desc {
      color: #6b7280;
      margin-bottom: 2rem;
      font-size: 1.1rem;
    }

    .details-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
      margin-bottom: 2rem;

      @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }

      .detail-item {
        h4 {
          font-size: 1.1rem;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }

        p, li {
          color: #6b7280;
          line-height: 1.7;
        }

        ul {
          list-style-type: none;
          padding-left: 0;

          li {
            position: relative;
            padding-left: 1.5rem;
            margin-bottom: 0.5rem;

            &::before {
              content: "•";
              color: #2563eb;
              font-size: 1.5rem;
              position: absolute;
              left: 0;
              top: -0.25rem;
            }
          }
        }
      }
    }

    .enroll-btn {
      padding: 0.75rem 1.5rem;
      background-color: #2563eb;
      color: white;
      border: none;
      border-radius: 0.375rem;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      transition: background-color 0.3s ease;
      width: 100%;
      text-decoration: none;
      text-align: center;

      &:hover {
        background-color: #1d4ed8;
      }

      &:focus {
        outline: 2px solid #1d4ed8;
        outline-offset: 2px;
      }
    }
  }
`;

const CTASection = styled.section`
  background-color: #f3f4f6;
  padding: 4rem 1rem;
  text-align: center;

  @media (min-width: 768px) {
    padding: 5rem 2rem;
  }

  h3 {
    font-size: 1.8rem;
    color: #1f2937;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    color: #6b7280;
    max-width: 600px;
    margin: 0 auto 2rem;
    font-size: 1.1rem;
  }

  .cta-button {
    padding: 0.75rem 1.5rem;
    background-color: #2563eb;
    color: white;
    border: none;
    border-radius: 0.375rem;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #1d4ed8;
    }

    &:focus {
      outline: 2px solid #1d4ed8;
      outline-offset: 2px;
    }
  }
`;

const Footer = styled.footer`
  background-color: #1f2937;
  color: white;
  padding: 3rem 1rem;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .footer-col {
    h3 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      color: #f9fafb;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 0.5rem;

        a {
          color: #d1d5db;
          text-decoration: none;
          transition: color 0.3s ease;

          &:hover {
            color: #ffffff;
          }
        }
      }
    }
  }

  .footer-logo img {
    max-width: 150px;
    margin-bottom: 1rem;
  }

  .footer-about {
    color: #d1d5db;
    margin-bottom: 1rem;
  }

  .footer-social {
    display: flex;
    gap: 1rem;

    a {
      color: #d1d5db;
      font-size: 1.2rem;
      transition: color 0.3s ease;

      &:hover {
        color: #ffffff;
      }
    }
  }

  .newsletter-form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    input {
      padding: 0.5rem;
      border-radius: 0.25rem;
      border: 1px solid #4b5563;
      background-color: #374151;
      color: white;
    }

    button {
      padding: 0.5rem;
      background-color: #2563eb;
      color: white;
      border: none;
      border-radius: 0.25rem;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #1d4ed8;
      }
    }
  }

  .footer-bottom {
    border-top: 1px solid #374151;
    padding-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
    color: #9ca3af;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .footer-payments {
    display: flex;
    gap: 1rem;
    font-size: 1.5rem;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;

export default Courses;