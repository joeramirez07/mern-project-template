import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Handle scroll for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'software', 'photography', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Firebase", "Material-UI", "Socket.io"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides real-time weather data, forecasts, and interactive maps using external APIs.",
      tech: ["React", "OpenWeather API", "Chart.js", "CSS"],
      github: "#",
      live: "#"
    }
  ];

  const skills = [
    "JavaScript", "React", "Node.js", "Python", "TypeScript", "MongoDB", 
    "PostgreSQL", "Git", "AWS", "Docker", "GraphQL", "REST APIs"
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <div className="nav-logo">
              <div className="logo-diamond">JR</div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="nav-links desktop-nav">
              <button
                onClick={() => scrollToSection('home')}
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('software')}
                className={`nav-link ${activeSection === 'software' ? 'active' : ''}`}
              >
                Software
              </button>
              <button
                onClick={() => scrollToSection('photography')}
                className={`nav-link ${activeSection === 'photography' ? 'active' : ''}`}
              >
                Photography
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              >
                Contact
              </button>
            </div>

            {/* Social Icons */}
            <div className="nav-social">
              <a href="#" className="social-icon">
                <Github size={20} />
              </a>
              <a href="#" className="social-icon">
                <Linkedin size={20} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="mobile-nav">
              <button onClick={() => scrollToSection('home')} className="mobile-nav-link">Home</button>
              <button onClick={() => scrollToSection('software')} className="mobile-nav-link">Software</button>
              <button onClick={() => scrollToSection('photography')} className="mobile-nav-link">Photography</button>
              <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-image">
            <div className="photo-frame">
              <div className="photo-placeholder">
                <p>Your Photo Here</p>
                <small>Replace with your professional photo</small>
              </div>
            </div>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">Joe Ramirez</h1>
            <div className="title-underline"></div>
            
            <p className="hero-description">
              I'm a full stack software engineer with a background in visual 
              design, IT, and customer experience focusing on clean, accessible 
              design and bringing a bit of fun into everything I build.
            </p>
            
            <p className="hero-description">
              With 15 years of expertise in creating meaningful user-centered 
              experiences I create full-stack applications using the MERN stack 
              that are both user-friendly, sleek and modern. I make things look 
              good and work well!
            </p>
            
            <p className="hero-description">
              I am curious and kind in my strategic problem-solving using 
              meticulous planning and execution to any project and every line of 
              code. As a videographer in creative production, a logistics 
              producer, and a competitive athlete, and software engineer-I use 
              my ability to actively listen and understand the needs of the client 
              to solve any complex problem.
            </p>
          </div>
        </div>
      </section>

      {/* Software Section */}
      <section id="software" className="software-section">
        <div className="container">
          <h2 className="section-title">Software Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link">
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a href={project.live} className="project-link">
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="skills-container">
            <h3 className="skills-title">Skills & Technologies</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-tag">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photography Section */}
      <section id="photography" className="photography-section">
        <div className="container">
          <h2 className="section-title">Photography</h2>
          <div className="photo-grid">
            <div className="photo-placeholder-grid">
              <p>Photography Portfolio</p>
              <small>Add your photography work here</small>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-content">
            <p className="contact-description">
              Let's connect and discuss your next project or opportunity.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={24} />
                <span>your.email@example.com</span>
              </div>
              <div className="contact-item">
                <Github size={24} />
                <span>github.com/yourname</span>
              </div>
              <div className="contact-item">
                <Linkedin size={24} />
                <span>linkedin.com/in/yourname</span>
              </div>
            </div>
            <button className="contact-button">Get In Touch</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;