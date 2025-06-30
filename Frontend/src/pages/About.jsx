import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  FaBullseye,
  FaEye,
  FaHeart,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaAward,
  FaBriefcase
} from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { useAuth } from '../context/AuthContext';
import '../css/About.scss';

// Constants
const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Dr. Amit Sharma",
    role: "Founder & Director",
    bio: "With 15+ years in tech education, Dr. Sharma envisioned an institute that bridges the industry-academia gap.",
    image: "https://randomuser.me/api/portraits/men/51.jpg"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Head of Curriculum",
    bio: "Former lead developer at TechSolutions, brings real-world experience to course design.",
    image: "https://randomuser.me/api/portraits/women/63.jpg"
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Senior Instructor",
    bio: "Specializes in full-stack development with a passion for mentoring new coders.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  }
];

const MILESTONES = [
  { id: 1, icon: <FaUserGraduate size={24} />, number: "5000+", text: "Students Trained" },
  { id: 2, icon: <FaAward size={24} />, number: "10+", text: "Years of Experience" },
  { id: 3, icon: <FaChalkboardTeacher size={24} />, number: "25+", text: "Expert Instructors" },
  { id: 4, icon: <FaBriefcase size={24} />, number: "100%", text: "Placement in Core Programs" }
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

const About = () => {
  const { user, checkAuth } = useAuth();

  // Check authentication status on component mount
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <div className="about-page">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About Logistic Institute | Tech Education Pioneers</title>
        <meta 
          name="description" 
          content="Learn about Logistic Computer Education Institute's mission, vision, and team of experts dedicated to transforming tech education since 2010." 
        />
        <meta name="keywords" content="tech education, computer institute, about us, our story, our team" />
        <meta property="og:title" content="About Logistic Computer Education Institute" />
        <meta property="og:description" content="Discover our journey in revolutionizing technical education since 2010" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="https://your-institute.com/about-og-image.jpg" />
        <link rel="canonical" href="https://your-institute.com/about" />
      </Helmet>

      {/* Preconnect to important origins */}
      <link rel="preconnect" href="https://api.your-backend.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      
      <HeroSection />
      <OurStory />
      <MissionSection />
      <VideoSection />
      <TeamSection teamMembers={TEAM_MEMBERS} />
      <AchievementsSection milestones={MILESTONES} />
      <AboutCTA user={user} />
      <FooterSection />
    </div>
  );
};

// Extracted Components
const HeroSection = () => (
  <section className="about-hero" aria-label="About Logistic Institute">
    <div className="hero-overlay"></div>
    <div className="hero-content">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="hero-text"
      >
        <motion.h1 variants={itemVariants}>About Logistic Institute</motion.h1>
        <motion.p variants={itemVariants} className="subtext">
          Shaping the Next Generation of Tech Professionals
        </motion.p>
      </motion.div>
    </div>
  </section>
);

const OurStory = () => (
  <section className="our-story" aria-labelledby="our-story-heading">
    <div className="container">
      <div className="story-content">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="story-text"
        >
          <h2 id="our-story-heading">Our Story</h2>
          <p>
            Founded in 2010 by Dr. Amit Sharma, Logistic Computer Education Institute began as a small training center 
            with a vision to revolutionize technical education. What started with just two classrooms and three courses 
            has now grown into a premier institute offering comprehensive programs in emerging technologies.
          </p>
          <p>
            Over the past decade, we've evolved by constantly adapting to industry needs, incorporating hands-on learning 
            methodologies, and building partnerships with leading tech companies. Our alumni network now spans across 
            top organizations worldwide, a testament to our commitment to quality education.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="story-image"
        >
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
            alt="Our institute campus" 
            loading="lazy"
            width="500"
            height="300"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const MissionSection = () => (
  <section className="mission-section" aria-labelledby="principles-heading">
    <div className="container">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        className="section-header"
      >
        <h2 id="principles-heading">Our Guiding Principles</h2>
        <p className="section-subtitle">The foundation of everything we do</p>
      </motion.div>
      
      <div className="principles-grid">
        <PrincipleCard 
          icon={<FaBullseye size={40} />}
          title="Mission"
          content="To empower individuals with practical, industry-relevant technical skills that transform 
          careers and drive innovation in the digital economy."
          delay={0.1}
        />
        <PrincipleCard 
          icon={<FaEye size={40} />}
          title="Vision"
          content="To be recognized as the most trusted institute for career-focused technical education, 
          producing job-ready professionals who lead technological advancement."
          delay={0.2}
        />
        <PrincipleCard 
          icon={<FaHeart size={40} />}
          title="Values"
          isList={true}
          items={[
            "Excellence in Education",
            "Student-Centric Approach",
            "Industry Relevance",
            "Integrity & Transparency",
            "Continuous Innovation"
          ]}
          delay={0.3}
        />
      </div>
    </div>
  </section>
);

const PrincipleCard = ({ icon, title, content, items, isList = false, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="principle-card"
    role="article"
    aria-label={`Principle: ${title}`}
  >
    <div className="principle-icon" aria-hidden="true">{icon}</div>
    <h3>{title}</h3>
    {isList ? (
      <ul className="values-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : (
      <p>{content}</p>
    )}
  </motion.div>
);

const VideoSection = () => (
  <section className="video-section" aria-labelledby="video-heading">
    <div className="container">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        className="section-header"
      >
        <h2 id="video-heading">See Us in Action</h2>
        <p className="section-subtitle">Get a glimpse of life at Logistic</p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="video-wrapper"
      >
        <div className="video-container">
          <iframe 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="About Logistic Institute - Campus Tour" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    </div>
  </section>
);

const TeamSection = ({ teamMembers }) => (
  <section className="team-section" aria-labelledby="team-heading">
    <div className="container">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        className="section-header"
      >
        <h2 id="team-heading">Meet Our Team</h2>
        <p className="section-subtitle">The experts behind your success</p>
      </motion.div>
      
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <TeamCard 
            key={member.id}
            member={member}
            index={index}
          />
        ))}
      </div>
    </div>
  </section>
);

const TeamCard = ({ member, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="team-card"
    role="article"
    aria-label={`Team member: ${member.name}, ${member.role}`}
  >
    <div className="team-image">
      <img 
        src={member.image} 
        alt={`Portrait of ${member.name}`} 
        loading="lazy"
        width="200"
        height="200"
      />
    </div>
    <h3>{member.name}</h3>
    <p className="role">{member.role}</p>
    <p className="bio">{member.bio}</p>
  </motion.div>
);

const AchievementsSection = ({ milestones }) => (
  <section className="achievements-section" aria-labelledby="achievements-heading">
    <div className="container">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        className="section-header"
      >
        <h2 id="achievements-heading">Our Achievements</h2>
        <p className="section-subtitle">Proud milestones in our journey</p>
      </motion.div>
      
      <div className="milestones-grid">
        {milestones.map((milestone, index) => (
          <MilestoneCard 
            key={milestone.id}
            milestone={milestone}
            index={index}
          />
        ))}
      </div>
    </div>
  </section>
);

const MilestoneCard = ({ milestone, index }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="milestone-card"
    role="article"
    aria-label={`Milestone: ${milestone.number} ${milestone.text}`}
  >
    <div className="milestone-icon" aria-hidden="true">{milestone.icon}</div>
    <div className="milestone-number">{milestone.number}</div>
    <div className="milestone-text">{milestone.text}</div>
  </motion.div>
);

const AboutCTA = ({ user }) => (
  <section className="about-cta" aria-labelledby="cta-heading">
    <div className="container">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="cta-content"
      >
        <h2 id="cta-heading">Ready to Start Your Tech Journey With Us?</h2>
        <div className="cta-buttons">
          {user ? (
            // <Link to="/dashboard">
             <Link>
              <button className="cta-button">Go to Dashboard <IoIosArrowForward /></button>
            </Link>
          ) : (
            <Link to="/courses">
              <button className="cta-button">View Courses <IoIosArrowForward /></button>
            </Link>
          )}
          <Link to="/contact">
            <button className="secondary-button" >Get in Touch</button>
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

export default About;