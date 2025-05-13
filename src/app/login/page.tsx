'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');
    
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real application, you would post to your API here
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email: formData.email, password: formData.password })
      // });
      
      // if (!response.ok) throw new Error('Invalid credentials');
      
      // Simulate login success
      // In a real app, you'd save the token from the response
      localStorage.setItem('isLoggedIn', 'true');
      
      // Redirect to dashboard
      router.push('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      setFormStatus('error');
      setErrorMessage('Invalid email or password. Please try again.');
    }
  };

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Log In to Your Account</h1>
          <p>Welcome back! Log in to continue creating and sharing educational videos</p>
        </div>
      </section>

      <section className="login-content">
        <div className="container">
          <div className="auth-form-container">
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group checkbox">
                <input 
                  type="checkbox" 
                  id="rememberMe" 
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              
              <div className="form-actions">
                <button 
                  type="submit" 
                  className="btn btn-primary full-width"
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? 'Logging In...' : 'Log In'}
                </button>
                
                <a href="/forgot-password" className="forgot-password">
                  Forgot your password?
                </a>
              </div>
              
              {formStatus === 'error' && (
                <div className="form-message error">
                  {errorMessage}
                </div>
              )}
            </form>
            
            <div className="auth-alt">
              <p>Don't have an account? <a href="/signup">Create Account</a></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 