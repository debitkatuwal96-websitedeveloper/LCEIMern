import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Load user from localStorage on initial render
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const checkAuth = () => {
  const storedUser = localStorage.getItem('user');
  return storedUser ? JSON.parse(storedUser) : null;
};

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);





// import { createContext, useContext, useState, useEffect } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // No localStorage
//   const [loading, setLoading] = useState(true); // Track auth check status

//   // Check if user is logged in on initial load (e.g., page refresh)
//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const response = await fetch('/api/auth/check', { 
//           credentials: 'include' // Required for cookies
//         });
//         if (response.ok) {
//           const userData = await response.json();
//           setUser(userData);
//         } else {
//           setUser(null);
//         }
//       } catch (error) {
//         console.error("Auth check failed:", error);
//         setUser(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkAuth();
//   }, []);

//   const login = async (credentials) => {
//     try {
//       const response = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(credentials),
//         credentials: 'include', // For cookies
//       });
//       if (response.ok) {
//         const userData = await response.json();
//         setUser(userData);
//       } else {
//         throw new Error('Login failed');
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       throw error;
//     }
//   };

//   const logout = async () => {
//     try {
//       await fetch('/api/auth/logout', { 
//         method: 'POST',
//         credentials: 'include' 
//       });
//       setUser(null);
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);




















// import React, { createContext, useContext, useState, useEffect } from 'react';
// import axios from 'axios';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // null = not logged in
//   const [loading, setLoading] = useState(true);

//   // Check authentication status
//   const checkAuth = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (token) {
//         const response = await axios.get('/api/auth/verify', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUser(response.data.user);
//       }
//     } catch (error) {
//       console.error('Auth check failed:', error);
//       localStorage.removeItem('token');
//       setUser(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Login function
//   const login = async (credentials) => {
//     try {
//       const response = await axios.post('/api/auth/login', credentials);
//       localStorage.setItem('token', response.data.token);
//       setUser(response.data.user);
//     } catch (error) {
//       throw new Error(error.response?.data?.message || 'Login failed');
//     }
//   };

//   // Logout function
//   const logout = () => {
//     localStorage.removeItem('token');
//     setUser(null);
//   };

//   // Check auth on initial load
//   useEffect(() => {
//     checkAuth();
//   }, []);

//   return (
//    <AuthContext.Provider value={{ user, login, logout, loading, checkAuth }}>
//     {children}
//   </AuthContext.Provider>
//   );
// };

// // Hook to use the auth context in components
// export const useAuth = () => useContext(AuthContext);

// import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
// import axios from 'axios';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const checkAuth = useCallback(async () => {
//     try {
//       const token = localStorage.getItem('token');
      
//       if (!token) {
//         setLoading(false);
//         return;
//       }

//       const response = await axios.get('/api/auth/verify', {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       if (response.data?.user) {
//         setUser({
//           ...response.data.user,
//           name: response.data.user.name || response.data.user.username || response.data.user.email,
//           email: response.data.user.email,
//           avatar: response.data.user.avatar,
//           role: response.data.user.role
//         });
//       } else {
//         throw new Error('Invalid user data');
//       }
//     } catch (err) {
//       console.error('Authentication check failed:', err);
//       localStorage.removeItem('token');
//       setUser(null);
//       setError(err.response?.data?.message || 'Session expired. Please login again.');
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   const login = async (credentials) => {
//     try {
//       setLoading(true);
//       setError(null);
      
//       const response = await axios.post('/api/auth/login', credentials);
      
//       if (response.data?.token && response.data?.user) {
//         localStorage.setItem('token', response.data.token);
//         if (response.data.refreshToken) {
//           localStorage.setItem('refreshToken', response.data.refreshToken);
//         }
//         setUser({
//           ...response.data.user,
//           name: response.data.user.name || response.data.user.username || response.data.user.email
//         });
//         return response.data.user;
//       }
//       throw new Error('Invalid response from server');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Login failed. Please try again.');
//       throw err;
//     } finally {
//       setLoading(false);
//     }
//   };

//   const logout = useCallback(() => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('refreshToken');
//     setUser(null);
//     setError(null);
//   }, []);

//   const register = async (userData) => {
//     try {
//       setLoading(true);
//       setError(null);
      
//       const response = await axios.post('/api/auth/register', userData);
      
//       if (response.data?.token && response.data?.user) {
//         localStorage.setItem('token', response.data.token);
//         if (response.data.refreshToken) {
//           localStorage.setItem('refreshToken', response.data.refreshToken);
//         }
//         setUser(response.data.user);
//         return response.data.user;
//       }
//       throw new Error('Registration failed');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Registration failed. Please try again.');
//       throw err;
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     checkAuth();

//     const interceptor = axios.interceptors.response.use(
//       response => response,
//       async (error) => {
//         const originalRequest = error.config;
        
//         if (error.response?.status === 401 && !originalRequest._retry) {
//           originalRequest._retry = true;
          
//           try {
//             const refreshToken = localStorage.getItem('refreshToken');
//             if (refreshToken) {
//               const response = await axios.post('/api/auth/refresh', { refreshToken });
//               localStorage.setItem('token', response.data.token);
//               axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
//               originalRequest.headers['Authorization'] = `Bearer ${response.data.token}`;
//               return axios(originalRequest);
//             }
//           } catch (refreshError) {
//             console.error('Refresh token failed:', refreshError);
//             logout();
//             return Promise.reject(refreshError);
//           }
//         }
//         return Promise.reject(error);
//       }
//     );

//     return () => {
//       axios.interceptors.response.eject(interceptor);
//     };
//   }, [checkAuth, logout]);

//   return (
//     <AuthContext.Provider value={{
//       user,
//       loading,
//       error,
//       login,
//       logout,
//       register,
//       checkAuth,
//       isAuthenticated: !!user
//     }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };