import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';
import { 
  FaChartLine, 
  FaBook, 
  FaEnvelope, 
  FaUsers, 
  FaCog, 
  FaSignOutAlt,
  FaPlus,
  FaEdit,
  FaTrash,
  FaCheck,
  FaReply
} from 'react-icons/fa';

const Admin = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [adminEmail, setAdminEmail] = useState('admin@logistic.edu');

  // Mock data - replace with API calls in real implementation
  const [stats, setStats] = useState({
    totalCourses: 5,
    totalEnrollments: 124,
    pendingInquiries: 8,
    activeStudents: 89,
    websiteVisits: 1245
  });

  const [inquiries, setInquiries] = useState([
    { id: 1, name: 'Rahul Sharma', email: 'rahul@example.com', message: 'Interested in Web Development course...', date: '2023-05-15', status: 'pending' },
    { id: 2, name: 'Priya Patel', email: 'priya@example.com', message: 'Question about payment options...', date: '2023-05-14', status: 'pending' },
    { id: 3, name: 'Amit Kumar', email: 'amit@example.com', message: 'Want to know course duration...', date: '2023-05-12', status: 'replied' }
  ]);

  const [courses, setCourses] = useState([
    { id: 1, title: 'Web Development', enrollments: 45 },
    { id: 2, title: 'Accounting', enrollments: 32 },
    { id: 3, title: 'Computer Application', enrollments: 28 },
    { id: 4, title: 'Graphic Design', enrollments: 19 },
    { id: 5, title: 'Digital Marketing', enrollments: 22 }
  ]);

  // Check auth status (mock implementation)
  useEffect(() => {
    const checkAuth = async () => {
      // In real app, verify admin token here
      setIsLoading(true);
      setTimeout(() => {
        const mockAuth = true; // Set to false to test unauthorized state
        setIsLoggedIn(mockAuth);
        setIsLoading(false);
      }, 1000);
    };

    checkAuth();
  }, []);

  const handleLogout = () => {
    // In real app, clear auth token
    setIsLoggedIn(false);
    navigate('/login');
  };

  const markAsRead = (id) => {
    setInquiries(inquiries.map(inq => 
      inq.id === id ? { ...inq, status: 'read' } : inq
    ));
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  if (isLoading) {
    return <LoadingScreen>Loading Dashboard...</LoadingScreen>;
  }

  if (!isLoggedIn) {
    return (
      <UnauthorizedScreen>
        <Helmet>
          <title>Unauthorized Access | Logistic Institute Admin</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <h2>Unauthorized Access</h2>
        <p>Please login to access the admin dashboard.</p>
        <button onClick={() => navigate('/login')}>Go to Login</button>
      </UnauthorizedScreen>
    );
  }

  return (
    <AdminContainer>
      <Helmet>
        <title>Admin Dashboard | Logistic Computer Education Institute</title>
        <meta name="description" content="Administrative dashboard for managing courses, students, and inquiries" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen}>
        <h2>Logistic Institute</h2>
        <NavMenu>
          <NavItem 
            active={activeTab === 'dashboard'}
            onClick={() => setActiveTab('dashboard')}
            aria-label="Dashboard"
          >
            <FaChartLine /> {sidebarOpen && 'Dashboard'}
          </NavItem>
          <NavItem 
            active={activeTab === 'courses'}
            onClick={() => setActiveTab('courses')}
            aria-label="Manage Courses"
          >
            <FaBook /> {sidebarOpen && 'Manage Courses'}
          </NavItem>
          <NavItem 
            active={activeTab === 'inquiries'}
            onClick={() => setActiveTab('inquiries')}
            aria-label="Student Inquiries"
          >
            <FaEnvelope /> {sidebarOpen && 'Student Inquiries'}
          </NavItem>
          <NavItem 
            active={activeTab === 'students'}
            onClick={() => setActiveTab('students')}
            aria-label="Enrolled Students"
          >
            <FaUsers /> {sidebarOpen && 'Enrolled Students'}
          </NavItem>
          <NavItem 
            active={activeTab === 'settings'}
            onClick={() => setActiveTab('settings')}
            aria-label="Settings"
          >
            <FaCog /> {sidebarOpen && 'Settings'}
          </NavItem>
        </NavMenu>
        <SidebarToggle 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          {sidebarOpen ? '◄' : '►'}
        </SidebarToggle>
      </Sidebar>

      {/* Main Content */}
      <MainContent sidebarOpen={sidebarOpen}>
        {/* Admin Header */}
        <AdminHeader>
          <h1>Admin Dashboard</h1>
          <AdminControls>
            <AdminInfo>
              <span>{adminEmail}</span>
            </AdminInfo>
            <LogoutButton onClick={handleLogout}>
              <FaSignOutAlt /> Logout
            </LogoutButton>
          </AdminControls>
        </AdminHeader>

        {/* Dashboard Content */}
        {activeTab === 'dashboard' && (
          <DashboardContent>
            <StatsGrid>
              <StatCard
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h3>Total Courses</h3>
                <StatValue>{stats.totalCourses}</StatValue>
              </StatCard>
              <StatCard
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h3>Total Enrollments</h3>
                <StatValue>{stats.totalEnrollments}</StatValue>
              </StatCard>
              <StatCard
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h3>Pending Inquiries</h3>
                <StatValue>{stats.pendingInquiries}</StatValue>
              </StatCard>
              <StatCard
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h3>Active Students</h3>
                <StatValue>{stats.activeStudents}</StatValue>
              </StatCard>
              <StatCard
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h3>Website Visits</h3>
                <StatValue>{stats.websiteVisits}</StatValue>
              </StatCard>
            </StatsGrid>

            <Section>
              <SectionHeader>
                <h2>Recent Inquiries</h2>
              </SectionHeader>
              <InquiriesTable>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {inquiries.map((inquiry) => (
                    <tr key={inquiry.id}>
                      <td>{inquiry.name}</td>
                      <td>{inquiry.email}</td>
                      <td className="message-preview">{inquiry.message}</td>
                      <td>{inquiry.date}</td>
                      <td>
                        <ActionButton 
                          onClick={() => markAsRead(inquiry.id)}
                          variant="success"
                          aria-label={`Mark inquiry from ${inquiry.name} as read`}
                        >
                          <FaCheck /> Mark Read
                        </ActionButton>
                        <ActionButton 
                          variant="primary"
                          aria-label={`Reply to ${inquiry.name}`}
                        >
                          <FaReply /> Reply
                        </ActionButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </InquiriesTable>
            </Section>
          </DashboardContent>
        )}

        {/* Courses Management */}
        {activeTab === 'courses' && (
          <Section>
            <SectionHeader>
              <h2>Manage Courses</h2>
              <AddCourseButton aria-label="Add new course">
                <FaPlus /> Add New Course
              </AddCourseButton>
            </SectionHeader>
            <CoursesTable>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Course Title</th>
                  <th>Enrollments</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id}>
                    <td>{course.id}</td>
                    <td>{course.title}</td>
                    <td>{course.enrollments}</td>
                    <td>
                      <ActionButton 
                        variant="primary"
                        aria-label={`Edit ${course.title} course`}
                      >
                        <FaEdit /> Edit
                      </ActionButton>
                      <ActionButton 
                        variant="danger"
                        onClick={() => deleteCourse(course.id)}
                        aria-label={`Delete ${course.title} course`}
                      >
                        <FaTrash /> Delete
                      </ActionButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </CoursesTable>
          </Section>
        )}

        {/* Settings */}
        {activeTab === 'settings' && (
          <Section>
            <SectionHeader>
              <h2>Admin Settings</h2>
            </SectionHeader>
            <SettingsForm>
              <FormGroup>
                <label htmlFor="admin-email">Email Address</label>
                <input 
                  id="admin-email"
                  type="email" 
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  aria-required="true"
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="current-password">Current Password</label>
                <input 
                  id="current-password"
                  type="password" 
                  aria-required="true"
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="new-password">New Password</label>
                <input 
                  id="new-password"
                  type="password" 
                  aria-required="true"
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="confirm-password">Confirm New Password</label>
                <input 
                  id="confirm-password"
                  type="password" 
                  aria-required="true"
                />
              </FormGroup>
              <SaveButton type="submit">Save Changes</SaveButton>
            </SettingsForm>
          </Section>
        )}
      </MainContent>
    </AdminContainer>
  );
};

// Styled Components
const AdminContainer = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  background-color: #f5f7fa;
`;

const Sidebar = styled.aside`
  width: ${props => props.sidebarOpen ? '250px' : '60px'};
  background-color: #2563eb;
  color: white;
  padding: 1rem;
  transition: width 0.3s ease;
  position: fixed;
  height: 100vh;
  z-index: 100;
  overflow: hidden;

  h2 {
    margin-bottom: 2rem;
    padding-left: 0.5rem;
    white-space: nowrap;
    font-size: ${props => props.sidebarOpen ? '1.25rem' : '0'};
    opacity: ${props => props.sidebarOpen ? '1' : '0'};
    transition: opacity 0.3s ease;
  }
`;

const NavMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  border-radius: 0.375rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  white-space: nowrap;
  background-color: ${props => props.active ? '#1d4ed8' : 'transparent'};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1d4ed8;
  }

  &:focus {
    outline: 2px solid white;
    outline-offset: 2px;
  }

  svg {
    font-size: 1.25rem;
    min-width: 1.25rem;
  }
`;

const SidebarToggle = styled.button`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:focus {
    outline: 2px solid white;
  }
`;

const MainContent = styled.main`
  margin-left: ${props => props.sidebarOpen ? '250px' : '60px'};
  flex: 1;
  transition: margin-left 0.3s ease;
  padding: 1rem;

  @media (max-width: 768px) {
    margin-left: 60px;
  }
`;

const AdminHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;

  h1 {
    font-size: 1.5rem;
    color: #1f2937;
  }
`;

const AdminControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AdminInfo = styled.div`
  span {
    font-weight: 500;
    color: #4b5563;
  }
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #dc2626;
  }

  &:focus {
    outline: 2px solid #dc2626;
    outline-offset: 2px;
  }
`;

const DashboardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  h3 {
    font-size: 0.875rem;
    color: #6b7280;
    margin-bottom: 0.5rem;
  }
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
`;

const Section = styled.section`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  h2 {
    font-size: 1.25rem;
    color: #1f2937;
  }
`;

const InquiriesTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
  }

  th {
    font-weight: 600;
    color: #374151;
    background-color: #f9fafb;
  }

  .message-preview {
    max-width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  tr:hover {
    background-color: #f9fafb;
  }
`;

const CoursesTable = styled(InquiriesTable)`
  // Inherits from InquiriesTable
`;

const ActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  cursor: pointer;
  margin-right: 0.5rem;
  border: none;
  transition: all 0.3s ease;

  background-color: ${props => 
    props.variant === 'primary' ? '#2563eb' : 
    props.variant === 'danger' ? '#ef4444' : 
    props.variant === 'success' ? '#10b981' : 
    '#e5e7eb'};
  
  color: white;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: 2px solid ${props => 
      props.variant === 'primary' ? '#1d4ed8' : 
      props.variant === 'danger' ? '#dc2626' : 
      props.variant === 'success' ? '#059669' : 
      '#9ca3af'};
    outline-offset: 2px;
  }
`;

const AddCourseButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #10b981;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #059669;
  }

  &:focus {
    outline: 2px solid #059669;
    outline-offset: 2px;
  }
`;

const SettingsForm = styled.form`
  max-width: 600px;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #374151;
  }

  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }
  }
`;

const SaveButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1d4ed8;
  }

  &:focus {
    outline: 2px solid #1d4ed8;
    outline-offset: 2px;
  }
`;

const LoadingScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
  color: #4b5563;
`;

const UnauthorizedScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #f3f4f6;

  h2 {
    font-size: 2rem;
    color: #1f2937;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: #4b5563;
    margin-bottom: 2rem;
  }

  button {
    padding: 0.75rem 1.5rem;
    background-color: #2563eb;
    color: white;
    border: none;
    border-radius: 0.375rem;
    font-weight: 600;
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

export default Admin;