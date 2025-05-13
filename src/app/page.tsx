'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/signup');
  };

  const handleCreateVideo = () => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (isLoggedIn) {
      router.push('/create-video');
    } else {
      router.push('/signup');
    }
  };

  return (
    <>
      <main>
        {/* Hero section */}
        <section className="hero">
          <div className="container">
            <h1>Enhance Learning with Zebo-Learning</h1>
            <p>Create engaging educational videos that make complex topics simple and fun.</p>
            <button 
              className="btn btn-primary"
              onClick={handleGetStarted}
            >
              Get Started
            </button>
          </div>
        </section>

        {/* Features section */}
        <section className="features">
          <div className="container">
            <h2>Integrate Videos in Education</h2>
            
            <div className="features-grid">
              <div className="feature-card">
                <h3>Build Skills</h3>
                <p>Enhance information retention while promoting media competence, presentation skills, and creativity.</p>
              </div>
              
              <div className="feature-card">
                <h3>Share Knowledge</h3>
                <p>Create entertaining explanatory videos and make them available to a wide audience.</p>
              </div>
              
              <div className="feature-card">
                <h3>Practical Learning</h3>
                <p>Students can create their own educational videos, expanding their creative horizons.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="cta">
          <div className="container">
            <h2>Start Creating Engaging Learning Videos Today</h2>
            <button 
              className="btn btn-secondary"
              onClick={handleCreateVideo}
            >
              Create Your First Video
            </button>
          </div>
        </section>
      </main>
    </>
  );
} 