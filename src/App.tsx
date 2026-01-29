import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Problem Explanation Section */}
      <ProblemSection />
      
      {/* How Defendefy Works (Monitor, Protect, Recover) */}
      <HowItWorksSection />
      
      {/* Plans Overview */}
      <PlansSection />
      
      {/* Why Defendefy is Different */}
      <WhyDifferentSection />
      
      {/* CTA Section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

// ============ COMPONENTS ============

// 1. Navbar Component
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-100">
              <span className="text-primary-600 font-bold text-xl">🛡️</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Defendefy</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">How It Works</a>
            <a href="#plans" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">Plans</a>
            <a href="#why-different" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">Why Different</a>
            <a href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">Contact</a>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors">
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-3">
              <a href="#how-it-works" className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-medium">How It Works</a>
              <a href="#plans" className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-medium">Plans</a>
              <a href="#why-different" className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-medium">Why Different</a>
              <a href="#contact" className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-medium">Contact</a>
              <div className="px-4 pt-2">
                <button className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// 2. Hero Section Component
const HeroSection: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full mb-8">
            <span>✅</span>
            <span className="text-sm font-medium">Trusted by 10,000+ creators & professionals</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Digital Security Built for
            <span className="text-primary-600"> Creators & Professionals</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Defendefy protects what you actually use and earn from today: email accounts, social media, 
            and creator platforms. We stop modern attacks that traditional antivirus misses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center text-lg">
              Start 14-Day Free Trial
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-primary-500 hover:text-primary-600 transition-colors text-lg">
              Watch Demo Video
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { label: '24/7 Threat Monitoring', icon: '👁️' },
              { label: 'Human Security Experts', icon: '👥' },
              { label: 'Zero False Positives', icon: '🎯' },
              { label: '100% Recovery Success', icon: '🔄' }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-gray-200">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-medium text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. Problem Explanation Section
const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: "Fake Brand Deals",
      description: "Sophisticated scams disguised as legitimate sponsorship opportunities targeting creators' income",
      icon: "💼"
    },
    {
      title: "Phishing Links",
      description: "Deceptive links in emails and DMs that mimic trusted platforms to steal credentials",
      icon: "🎣"
    },
    {
      title: "Risky Permissions",
      description: "Third-party apps with excessive access to your accounts and personal data",
      icon: "⚠️"
    },
    {
      title: "Human Error",
      description: "Simple mistakes that bypass even the strongest password protection systems",
      icon: "👤"
    }
  ];

  return (
    <section id="problem" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Problem: Modern Attacks Look Normal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Most users don't get hacked because of weak passwords. They get compromised because 
            modern attacks look legitimate until it's too late.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-100">
          <div className="text-center">
            <p className="text-lg text-gray-700 font-medium">
              <span className="text-primary-600 font-bold">92% of account compromises</span> start with attacks that 
              traditional antivirus doesn't recognize as threats
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// 4. How Defendefy Works Section (Monitor, Protect, Recover)
const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Monitor",
      description: "Continuously watch for threats and risk signals across all connected platforms",
      details: [
        "24/7 account activity surveillance",
        "Data breach exposure detection",
        "Suspicious permission monitoring",
        "Brand impersonation alerts"
      ],
      color: "from-blue-500 to-cyan-500",
      icon: "👁️"
    },
    {
      step: "02",
      title: "Protect",
      description: "Stop attacks before they cause damage with proactive intervention",
      details: [
        "Automated threat blocking",
        "Human analyst verification",
        "Real-time security actions",
        "Preventative security measures"
      ],
      color: "from-green-500 to-emerald-500",
      icon: "🛡️"
    },
    {
      step: "03",
      title: "Recover",
      description: "Help users regain control when something goes wrong",
      details: [
        "Immediate incident response",
        "Account recovery support",
        "Platform coordination",
        "Security hardening post-incident"
      ],
      color: "from-purple-500 to-pink-500",
      icon: "🔄"
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Defendefy Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple, powerful three-layer protection model that works quietly in the background
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className={`bg-gradient-to-br ${step.color} p-1 rounded-3xl mb-8`}>
                <div className="bg-white rounded-2xl p-8 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`bg-gradient-to-br ${step.color} text-white w-14 h-14 rounded-xl flex items-center justify-center text-2xl`}>
                      {step.icon}
                    </div>
                    <span className="text-4xl font-bold text-gray-200">{step.step}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{step.description}</p>
                  
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color} mt-2 mr-3`}></div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 z-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. Plans Overview Section
const PlansSection: React.FC = () => {
  const plans = [
    {
      name: "Guardian",
      subtitle: "Automated Protection",
      description: "Entry-level, fully automated protection for individuals",
      price: "$29",
      period: "per month",
      features: [
        "24/7 Automated Monitoring",
        "Data Breach Alerts",
        "Phishing Detection",
        "Permission Audits",
        "Basic Recovery Support",
        "Email & Social Protection"
      ],
      cta: "Start Free Trial",
      color: "border-blue-200 bg-blue-50",
      popular: false
    },
    {
      name: "Sentinel",
      subtitle: "Managed Security",
      description: "Premium, human-led security for creators & public figures",
      price: "$99",
      period: "per month",
      features: [
        "Everything in Guardian",
        "Human Security Analysts",
        "Priority 24/7 Support",
        "Brand Deal Verification",
        "Custom Security Protocols",
        "Monthly Security Reports",
        "Emergency Response Team"
      ],
      cta: "Get Protected",
      color: "border-purple-200 bg-gradient-to-b from-white to-purple-50 shadow-xl",
      popular: true
    },
    {
      name: "Crisis Response",
      subtitle: "Emergency Recovery",
      description: "High-intensity, one-time service for compromised accounts",
      price: "$499",
      period: "per incident",
      features: [
        "Immediate Investigation",
        "Account Recovery",
        "Platform Coordination",
        "Damage Control",
        "Security Hardening",
        "Post-Incident Analysis",
        "Legal Documentation Support"
      ],
      cta: "Emergency Contact",
      color: "border-rose-200 bg-rose-50",
      popular: false
    }
  ];

  return (
    <section id="plans" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Protection Level
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From automated monitoring to personal digital bodyguards
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <div className={`border-2 rounded-3xl ${plan.color} h-full`}>
                <div className="p-8 h-full">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                    <p className="text-gray-600 mt-1">{plan.subtitle}</p>
                    <p className="text-gray-500 text-sm mt-2">{plan.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-xl font-bold text-lg transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl hover:-translate-y-1' 
                      : 'bg-white border-2 border-gray-300 text-gray-800 hover:border-primary-500 hover:text-primary-600'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            All plans include a 14-day free trial. Cancel anytime. No credit card required to start.
          </p>
        </div>
      </div>
    </section>
  );
};

// 6. Why Defendefy is Different Section
const WhyDifferentSection: React.FC = () => {
  const differentiators = [
    {
      title: "Proactive Prevention",
      description: "We stop threats before they cause damage, not just clean up afterward",
      icon: "⚡"
    },
    {
      title: "Human-Led Security",
      description: "Combines AI monitoring with human expertise for nuanced protection",
      icon: "👥"
    },
    {
      title: "Platform Coverage",
      description: "Protects across email, social media, and creator platforms you actually use",
      icon: "🌐"
    },
    {
      title: "24/7 Monitoring",
      description: "Round-the-clock surveillance with immediate response capabilities",
      icon: "⏰"
    },
    {
      title: "No Passwords Required",
      description: "We don't store your passwords. Secure API connections only",
      icon: "🔐"
    },
    {
      title: "Creator-First Approach",
      description: "Built specifically for the unique security needs of digital creators",
      icon: "🎨"
    }
  ];

  return (
    <section id="why-different" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Defendefy is Different
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're building security for how people actually use the internet today
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-primary-100">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">99.9%</div>
              <div className="text-gray-700 font-medium">Threat Prevention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">&lt;5min</div>
              <div className="text-gray-700 font-medium">Average Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Recovery Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 7. CTA Section
const CTASection: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-500/10 mb-8 animate-float">
            <span className="text-3xl">🛡️</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Protect What Matters?
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of creators and professionals who trust Defendefy with their digital security.
            Start your free 14-day trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-primary-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors">
              Schedule a Demo
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { text: "No credit card required", icon: "💳" },
              { text: "Cancel anytime", icon: "🔄" },
              { text: "24/7 priority support", icon: "📞" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 text-gray-300">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// 8. Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-500/10">
                <span className="text-primary-400 font-bold text-xl">D</span>
              </div>
              <span className="text-xl font-bold text-white">Defendefy</span>
            </div>
            <p className="text-gray-400">
              Digital security for creators and professionals. Protection that understands human context.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {['How It Works', 'Features', 'Pricing', 'Security', 'API'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {['About', 'Blog', 'Careers', 'Press', 'Partners'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {['Help Center', 'Documentation', 'Status', 'Contact', 'Legal'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Defendefy. All rights reserved. Made with ❤️ for creators everywhere.</p>
        </div>
      </div>
    </footer>
  );
};

export default App;