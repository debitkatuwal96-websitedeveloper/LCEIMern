import React from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaWhatsapp 
} from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

// Form validation schema
const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string(),
  message: Yup.string().required('Message is required')
});

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    },
    validationSchema: ContactSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      // Send email using EmailJS
      emailjs.send(
        'roshan56', // Replace with your EmailJS service ID
        'rorshan', // Replace with your EmailJS template ID
        values,
        '-zuAwNB_OriqnbFsS' // Replace with your EmailJS public key
      )
      .then((response) => {
        alert('Message sent successfully!');
        resetForm();
      }, (error) => {
        alert('Failed to send the message, please try again.');
        console.error('EmailJS error:', error);
      })
      .finally(() => {
        setSubmitting(false);
      });
    }
  });

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

  return (
    <ContactPage>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Contact Us | Logistic Computer Education Institute</title>
        <meta 
          name="description" 
          content="Get in touch with Logistic Computer Education Institute for course inquiries, admissions, and support. We're here to help you start your tech education journey." 
        />
        <meta name="keywords" content="contact, computer institute, tech education, course inquiry, admissions" />
        <meta property="og:title" content="Contact Us | Logistic Institute" />
        <meta property="og:description" content="Reach out to us for course information and admissions support" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="https://your-institute.com/contact-og-image.jpg" />
        <link rel="canonical" href="https://your-institute.com/contact" />
      </Helmet>

      {/* Preconnect to important origins */}
      <link rel="preconnect" href="https://api.your-backend.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      
      {/* Page Header */}
      <ContactHero>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="hero-content"
        >
          <motion.h1 variants={itemVariants}>Get in Touch</motion.h1>
          <motion.p variants={itemVariants} className="subtext">
            We're here to answer your questions and help you get started.
          </motion.p>
        </motion.div>
      </ContactHero>

      {/* Main Content */}
      <ContactContainer>
        {/* Contact Form */}
        <FormSection>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Send Us a Message</h2>
            <p>Have questions about our courses? Fill out the form below and we'll get back to you soon.</p>
            
            <StyledForm onSubmit={formik.handleSubmit}>
              <FormGroup>
                <label htmlFor="name">Full Name*</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  placeholder="Enter your full name"
                  aria-required="true"
                  aria-invalid={formik.touched.name && Boolean(formik.errors.name)}
                />
                {formik.touched.name && formik.errors.name ? (
                  <ErrorText aria-live="polite">{formik.errors.name}</ErrorText>
                ) : null}
              </FormGroup>

              <FormGroup>
                <label htmlFor="email">Email Address*</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder="Enter your email address"
                  aria-required="true"
                  aria-invalid={formik.touched.email && Boolean(formik.errors.email)}
                />
                {formik.touched.email && formik.errors.email ? (
                  <ErrorText aria-live="polite">{formik.errors.email}</ErrorText>
                ) : null}
              </FormGroup>

              <FormGroup>
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  placeholder="Enter your phone number"
                  aria-invalid={formik.touched.phone && Boolean(formik.errors.phone)}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <ErrorText aria-live="polite">{formik.errors.phone}</ErrorText>
                ) : null}
              </FormGroup>

              <FormGroup>
                <label htmlFor="message">Your Message*</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  placeholder="How can we help you?"
                  aria-required="true"
                  aria-invalid={formik.touched.message && Boolean(formik.errors.message)}
                />
                {formik.touched.message && formik.errors.message ? (
                  <ErrorText aria-live="polite">{formik.errors.message}</ErrorText>
                ) : null}
              </FormGroup>

              <SubmitButton
                type="submit"
                disabled={formik.isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-busy={formik.isSubmitting}
              >
                {formik.isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <span>Send Message <IoIosArrowForward /></span>
                )}
              </SubmitButton>
            </StyledForm>
          </motion.div>
        </FormSection>

        {/* Contact Info */}
        <InfoSection>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Contact Information</h2>
            <p>Reach out to us through any of these channels:</p>
            
            <ContactInfoList>
              <ContactInfoItem>
                <div className="icon" aria-hidden="true">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4>Our Location</h4>
                  <address>
                    150 Bus Park, Sagarmatha Road<br />
                    Udayapur, Gaighat 56400
                  </address>
                </div>
              </ContactInfoItem>

              <ContactInfoItem>
                <div className="icon" aria-hidden="true">
                  <FaPhone />
                </div>
                <div>
                  <h4>Phone Number</h4>
                  <p>
                    <a href="tel:+919876543210">+977 035422894</a><br />
                    <a href="tel:+911234567890">+977 9801409602</a>
                  </p>
                </div>
              </ContactInfoItem>

              <ContactInfoItem>
                <div className="icon" aria-hidden="true">
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Email Address</h4>
                  <p>
                    <a href="mailto:info@logistic.edu">info@logistic.edu</a><br />
                    <a href="mailto:admissions@logistic.edu">admissions@logistic.edu</a>
                  </p>
                </div>
              </ContactInfoItem>

              <ContactInfoItem>
                <div className="icon" aria-hidden="true">
                  <FaClock />
                </div>
                <div>
                  <h4>Working Hours</h4>
                  <p>Sunday - Friday: 6AM - 5PM<br />Saturday: 10AM - 4PM</p>
                </div>
              </ContactInfoItem>
            </ContactInfoList>

            {/* Social Media Links */}
            <SocialMedia>
              <h4>Connect With Us</h4>
              <SocialIcons>
                <a href="#" aria-label="Facebook"><FaFacebook /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
              </SocialIcons>
            </SocialMedia>

            {/* Google Map Embed */}
            <MapContainer id="map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29891.234567890!2d86.691!3d26.784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39efc123456789ab%3A0xcafe1234567890ab!2sGaighat%2C%20Triyuga%20Municipality!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Institute Location on Google Maps"
                aria-label="Map showing institute location"
              ></iframe>
            </MapContainer>
          </motion.div>
        </InfoSection>
      </ContactContainer>

      {/* Call to Action Box */}
      <CTABox>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Still not sure?</h3>
          <p>Call us directly or visit our campus for a free counseling session!</p>
          <div className="cta-buttons">
            <a href="tel:+919876543210" className="cta-button">Call Now</a>
            <a href="#map" className="secondary-button">View Location</a>
          </div>
        </motion.div>
      </CTABox>

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
    </ContactPage>
  );
};

// Styled components
const ContactPage = styled.div`
  font-family: 'Inter', sans-serif;
  color: #374151;
  line-height: 1.6;
`;

const ContactHero = styled.section`
  position: relative;
  height: 40vh;
  min-height: 300px;
  background: url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center center;
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

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;

  @media (min-width: 992px) {
    flex-direction: row;
    gap: 3rem;
    padding: 5rem 2rem;
  }
`;

const FormSection = styled.div`
  flex: 1;
  margin-bottom: 3rem;

  @media (min-width: 992px) {
    margin-bottom: 0;
  }

  h2 {
    font-size: 1.8rem;
    color: #1f2937;
    margin-bottom: 1rem;
  }

  p {
    color: #6b7280;
    margin-bottom: 2rem;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #374151;
  }

  input, textarea {
    padding: 0.75rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    font-size: 1rem;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

const ErrorText = styled.div`
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const SubmitButton = styled(motion.button)`
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
  margin-top: 1rem;

  &:hover {
    background-color: #1d4ed8;
  }

  &:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
  }
`;

const InfoSection = styled.div`
  flex: 1;

  h2 {
    font-size: 1.8rem;
    color: #1f2937;
    margin-bottom: 1rem;
  }

  p {
    color: #6b7280;
    margin-bottom: 2rem;
  }
`;

const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ContactInfoItem = styled.div`
  display: flex;
  gap: 1rem;

  .icon {
    color: #2563eb;
    font-size: 1.5rem;
    margin-top: 0.25rem;
  }

  h4 {
    font-size: 1.1rem;
    color: #1f2937;
    margin-bottom: 0.25rem;
  }

  p, address {
    color: #6b7280;
    margin: 0;
    line-height: 1.6;
    font-style: normal;
  }

  a {
    color: #2563eb;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #1d4ed8;
      text-decoration: underline;
    }
  }
`;

const SocialMedia = styled.div`
  margin: 2rem 0;

  h4 {
    font-size: 1.1rem;
    color: #1f2937;
    margin-bottom: 1rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: #6b7280;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #2563eb;
    }
  }
`;

const MapContainer = styled.div`
  margin-top: 2rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

const CTABox = styled.div`
  background-color: #2563eb;
  color: white;
  padding: 3rem 1rem;
  text-align: center;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto 2rem;
    opacity: 0.9;
  }

  .cta-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .cta-button {
    padding: 0.75rem 1.5rem;
    background-color: white;
    color: #2563eb;
    border: none;
    border-radius: 0.375rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.9);
      transform: translateY(-2px);
    }
  }

  .secondary-button {
    padding: 0.75rem 1.5rem;
    background-color: transparent;
    color: white;
    border: 2px solid white;
    border-radius: 0.375rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
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

export default Contact;