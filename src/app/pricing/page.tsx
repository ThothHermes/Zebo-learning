'use client';

import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();

  const handlePlanSelect = (plan: string) => {
    router.push(`/signup?plan=${plan}`);
  };

  const handleContactSales = () => {
    router.push('/contact?subject=Enterprise%20Plan%20Inquiry');
  };

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Pricing Plans</h1>
          <p>Choose the plan that's right for you</p>
        </div>
      </section>

      <section className="pricing-plans">
        <div className="container">
          <div className="pricing-grid">
            <div className="pricing-card">
              <h2>Basic</h2>
              <div className="price">$0<span>/month</span></div>
              <ul className="features-list">
                <li>Create up to 5 videos</li>
                <li>Basic editing tools</li>
                <li>720p video quality</li>
                <li>Share with up to 50 viewers</li>
                <li>Email support</li>
              </ul>
              <button 
                className="btn btn-secondary"
                onClick={() => handlePlanSelect('basic')}
              >
                Get Started
              </button>
            </div>

            <div className="pricing-card featured">
              <div className="popular-tag">Most Popular</div>
              <h2>Professional</h2>
              <div className="price">$19<span>/month</span></div>
              <ul className="features-list">
                <li>Create unlimited videos</li>
                <li>Advanced editing tools</li>
                <li>1080p video quality</li>
                <li>Unlimited sharing</li>
                <li>Analytics dashboard</li>
                <li>Priority support</li>
              </ul>
              <button 
                className="btn btn-primary"
                onClick={() => handlePlanSelect('professional')}
              >
                Choose Plan
              </button>
            </div>

            <div className="pricing-card">
              <h2>Enterprise</h2>
              <div className="price">$49<span>/month</span></div>
              <ul className="features-list">
                <li>All Professional features</li>
                <li>4K video quality</li>
                <li>Dedicated account manager</li>
                <li>Team collaboration</li>
                <li>Custom branding</li>
                <li>API access</li>
              </ul>
              <button 
                className="btn btn-secondary"
                onClick={handleContactSales}
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 