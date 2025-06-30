import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  FaLaptopCode, 
  FaChalkboardTeacher, 
  FaBriefcase, 
  FaFlask,
    FaPalette, 
  FaChartLine,
   FaCalculator, 
  FaDesktop,   
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { useAuth } from '../context/AuthContext';
import '../css/Home.scss';
import '../assets/newSrc/LCEICSS.css';

// Constants for reusable data
const COURSES = [
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

const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Full Stack Developer",
    quote: "The hands-on projects and industry-relevant curriculum helped me land my dream job at a tech startup.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Rahul Patel",
    role: "UI/UX Designer",
    quote: "The instructors at Logistic have real-world experience that they bring into the classroom.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
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

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Home = () => {
  const { user } = useAuth();

  // Check authentication status on component mount
  // useEffect(() => {
  //   checkAuth();   checkAuth 
  // }, [checkAuth]);

  return (
    <div className="home-page">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Logistic Computer Education Institute | Tech Courses & Training</title>
        <meta 
          name="description" 
          content="Logistic Computer Education Institute offers industry-relevant tech courses in Full Stack Development, UI/UX Design, Data Science and more. Start your tech career today." 
        />
        <meta name="keywords" content="computer education, tech courses, programming, web development, data science, UI/UX design" />
        <meta property="og:title" content="Logistic Computer Education Institute" />
        <meta property="og:description" content="Industry-relevant tech education for aspiring developers and designers" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="https://your-institute.com/logo.png" />
        <link rel="canonical" href="https://your-institute.com/" />
      </Helmet>

      {/* Preconnect to important origins */}
      <link rel="preconnect" href="https://api.your-backend.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Us Section */}
      <AboutSection />
      
      {/* Courses Section */}
      <CoursesSection courses={COURSES} />
      
      {/* Why Choose Us Section */}
      <WhyChooseSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection testimonials={TESTIMONIALS} />
      
      {/* CTA Section */}
      <CTASection user={user} />
      
      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};

// Extracted Components for better organization
const HeroSection = () => (
  <section className="hero-section" aria-label="Welcome to Logistic Institute">
    <div className="hero-overlay"></div>
    <div className="hero-content">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="hero-text"
      >
        <motion.h1 variants={itemVariants}>Empowering Future Innovators in Tech</motion.h1>
        <motion.p variants={itemVariants} className="subtext">
          Bridging the gap between education and industry with cutting-edge computer courses and practical training.
        </motion.p>
        <Link to="/courses">
          <motion.button variants={itemVariants} className="cta-button">
            Explore Courses <IoIosArrowForward />
          </motion.button>
        </Link>
      </motion.div>
    </div>
  </section>
);

const AboutSection = () => (
  <section className="about-section" aria-labelledby="about-heading">
    <div className="container">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        className="section-header"
      >
        <h2 id="about-heading">About Logistic Institute</h2>
        <p className="section-subtitle">Shaping the tech leaders of tomorrow</p>
      </motion.div>
      
      <div className="about-content">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="about-text"
        >
          <p>
            Founded in 2010, Logistic Computer Education Institute has been at the forefront of technology education, 
            providing students with the skills needed to thrive in the digital economy.
          </p>
          <div className="mission-vision">
            <div className="mv-item">
              <h3>Our Mission</h3>
              <p>To deliver industry-relevant technical education that empowers individuals and transforms careers.</p>
            </div>
            <div className="mv-item">
              <h3>Our Vision</h3>
              <p>To be the premier institute for practical computer education in the region.</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="about-image"
        >
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
            alt="Students learning at Logistic Institute" 
            loading="lazy"
            width="500"
            height="300"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const CoursesSection = ({ courses }) => (
  <section className="courses-section" aria-labelledby="courses-heading">
    <div className="container">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        className="section-header"
      >
        <h2 id="courses-heading">Our Popular Courses</h2>
        <p className="section-subtitle">Designed to get you job-ready</p>
      </motion.div>
      
      <div className="courses-grid">
        {courses.map((course, index) => (
          <CourseCard 
            key={course.id}
            course={course}
            index={index}
          />
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="view-all"
      >
        <Link to="/courses">
          <button className="secondary-button">
            View All Courses
          </button>
        </Link>
      </motion.div>
    </div>
  </section>
);

const CourseCard = ({ course, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="course-card"
    role="article"
    aria-label={`Course: ${course.title}`}
  >
    <div className="course-icon" aria-hidden="true">{course.icon}</div>
    <h3>{course.title}</h3>
    <p>{course.description}</p>
    {/* <Link to={`/courses/${course.slug}`}> */}
    <Link to={'/courses'}>
      <button className="learn-more-btn">
        Learn More <IoIosArrowForward />
      </button>
    </Link>
  </motion.div>
);

const WhyChooseSection = () => (
  <section className="why-choose-section" aria-labelledby="why-choose-heading">
    <div className="container">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        className="section-header"
      >
        <h2 id="why-choose-heading">Why Choose Logistic</h2>
        <p className="section-subtitle">What makes us different</p>
      </motion.div>
      
      <div className="features-grid">
        <FeatureCard 
          icon={<FaChalkboardTeacher size={40} />}
          title="Expert Instructors"
          description="Learn from industry professionals with years of practical experience."
          delay={0.1}
        />
        <FeatureCard 
          icon={<FaLaptopCode size={40} />}
          title="Updated Curriculum"
          description="Courses designed to match current industry requirements and trends."
          delay={0.2}
        />
        <FeatureCard 
          icon={<FaBriefcase size={40} />}
          title="Career Support"
          description="Resume building, interview prep, and placement assistance."
          delay={0.3}
        />
        <FeatureCard 
          icon={<FaFlask size={40} />}
          title="Practical Learning"
          description="Hands-on labs and real-world projects for experiential learning."
          delay={0.4}
        />
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="feature-card"
    role="article"
    aria-label={`Feature: ${title}`}
  >
    <div className="feature-icon" aria-hidden="true">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </motion.div>
);

const TestimonialsSection = ({ testimonials }) => (
  <section className="testimonials-section" aria-labelledby="testimonials-heading">
    <div className="container">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        className="section-header"
      >
        <h2 id="testimonials-heading">What Our Students Say</h2>
        <p className="section-subtitle">Success stories from our alumni</p>
      </motion.div>
      
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={testimonial.id}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </div>
    </div>
  </section>
);

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="testimonial-card"
    role="article"
    aria-label={`Testimonial from ${testimonial.name}`}
  >
    <div className="testimonial-content">
      <p className="quote">"{testimonial.quote}"</p>
      <div className="student-info">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          loading="lazy"
          width="60"
          height="60"
        />
        <div>
          <h4>{testimonial.name}</h4>
          <p>{testimonial.role}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const CTASection = ({ user }) => (
  <section className="cta-section" aria-labelledby="cta-heading">
    <div className="container">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="cta-content"
      >
        <h2 id="cta-heading">Ready to Start Your Tech Journey?</h2>
        <p>Join hundreds of students who have transformed their careers with our programs.</p>
        <div className="cta-buttons">
          {user ? (
            // <Link to="/dashboard">  
            <Link>
              <button className="cta-button">Go to Dashboard</button>
            </Link>
          ) : (
            // <Link to="/signup">
             <Link>
              <button className="cta-button">Join Now</button>
            </Link>
          )}
          <Link to="/demo">
            <button className="secondary-button">Book a Free Demo Class</button>
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

const FooterSection = () => (
  <footer className="footer" role="contentinfo">
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
  </footer>
);

export default Home;