'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const loginStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(!!loginStatus);
  }, []);

  const handleLoginClick = () => {
    router.push('/login');
  };

  const handleDashboardClick = () => {
    router.push('/dashboard');
  };

  const handleGetStartedClick = () => {
    router.push('/signup');
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    router.push('/');
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header>
      <div className="container">
        <a href="/" className="logo-link">
          <h1>Zebo-Learning</h1>
        </a>
        <nav>
          <ul>
            <li><a href="/" className={isActive('/') ? 'active' : ''}>Home</a></li>
            <li><a href="/features" className={isActive('/features') ? 'active' : ''}>Features</a></li>
            <li><a href="/pricing" className={isActive('/pricing') ? 'active' : ''}>Pricing</a></li>
            <li><a href="/resources" className={isActive('/resources') ? 'active' : ''}>Resources</a></li>
            <li><a href="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          {isLoggedIn ? (
            <>
              <button className="btn btn-secondary-outline" onClick={handleDashboardClick}>Dashboard</button>
              <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-secondary-outline" onClick={handleLoginClick}>Log In</button>
              <button className="btn btn-primary" onClick={handleGetStartedClick}>Get Started</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
} 