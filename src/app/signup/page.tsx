'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SignUp() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountType: 'individual',
    plan: 'basic' // Default plan
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  useEffect(() => {
    // Get the plan from the URL if it exists
    const planFromUrl = searchParams.get('plan');
    if (planFromUrl && ['basic', 'professional', 'enterprise'].includes(planFromUrl)) {
      setFormData(prev => ({
        ...prev,
        plan: planFromUrl
      }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormStatus('submitting');
    
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real application, you would post to your API here
      // const response = await fetch('/api/signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // if (!response.ok) throw new Error('Failed to create account');
      
      // Simulate successful signup by setting logged in state
      localStorage.setItem('isLoggedIn', 'true');
      
      setFormStatus('success');
      
      // Redirect to dashboard after successful signup
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);
    } catch (error) {
      console.error('Error creating account:', error);
      setFormStatus('error');
    }
  };

  const getPlanLabel = (plan: string) => {
    switch (plan) {
      case 'basic': return 'Basic (Free)';
      case 'professional': return 'Professional ($19/month)';
      case 'enterprise': return 'Enterprise ($49/month)';
      default: return 'Basic (Free)';
    }
  };

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Create Your Account</h1>
          <p>Join Zebo-Learning and start creating engaging educational videos</p>
        </div>
      </section>

      <section className="signup-content">
        <div className="container">
          <div className="auth-form-container">
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName" 
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <span className="error-message">{errors.fullName}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input 
                  type="password" 
                  id="confirmPassword" 
                  name="confirmPassword" 
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="accountType">Account Type</label>
                <select 
                  id="accountType" 
                  name="accountType"
                  value={formData.accountType}
                  onChange={handleChange}
                >
                  <option value="individual">Individual</option>
                  <option value="educator">Educator</option>
                  <option value="institution">Educational Institution</option>
                  <option value="business">Business</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="plan">Selected Plan</label>
                <select 
                  id="plan" 
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                >
                  <option value="basic">Basic (Free)</option>
                  <option value="professional">Professional ($19/month)</option>
                  <option value="enterprise">Enterprise ($49/month)</option>
                </select>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary full-width"
                disabled={formStatus === 'submitting'}
              >
                {formStatus === 'submitting' ? 'Creating Account...' : 'Create Account'}
              </button>
              
              {formStatus === 'success' && (
                <div className="form-message success">
                  Your account has been created successfully! Redirecting to dashboard...
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="form-message error">
                  There was an error creating your account. Please try again.
                </div>
              )}
            </form>
            
            <div className="auth-alt">
              <p>Already have an account? <a href="/login">Log In</a></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 