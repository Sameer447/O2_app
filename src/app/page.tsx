import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              Dev<span>Solutions</span>
            </div>
            <ul className="nav-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#process">Process</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Transforming Ideas Into Digital Solutions</h1>
              <p>
                We create stunning websites and powerful mobile applications
                that drive growth and engage your audience.
              </p>
              <a href="#contact" className="btn">
                Get Started
              </a>
            </div>
            <div className="hero-image">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjNGE2Y2Y3IiBkPSJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHptMCA0NDhjLTExMC41IDAtMjAwLTg5LjUtMjAwLTIwMFMxNDUuNSA1NiAyNTYgNTZzMjAwIDg5LjUgMjAwIDIwMC04OS41IDIwMC0yMDAgMjAweiIvPjxwYXRoIGZpbGw9IiM2ZjQyYzEiIGQ9Ik0zMDQgMjU2YzAgMjYuNS0yMS41IDQ4LTQ4IDQ4cy00OC0yMS41LTQ4LTQ4IDIxLjUtNDggNDgtNDggNDggMjEuNSA0OCA0OHptLTQ4LTI0Yy0xMy4zIDAtMjQgMTAuNy0yNCAyNHMxMC43IDI0IDI0IDI0IDI0LTEwLjcgMjQtMjQtMTAuNy0yNC0yNC0yNHptLTcyIDcyYzAtMTMuMy0xMC43LTI0LTI0LTI0cy0yNCAxMC43LTI0IDI0IDEwLjcgMjQgMjQgMjQgMjQtMTAuNyAyNC0yNHptMjQgMjRjMTMuMyAwIDI0LTEwLjcgMjQtMjRzLTEwLjctMjQtMjQtMjQtMjQgMTAuNy0yNCAyNCAxMC43IDI0IDI0IDI0eiIvPjwvc3ZnPg=="
                alt="Web and App Development"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="services" id="services">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              We offer a comprehensive range of web and mobile app development
              services to help your business thrive in the digital world.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3>Web Development</h3>
              <p>
                Custom websites and web applications built with modern
                technologies to deliver exceptional user experiences.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3>App Development</h3>
              <p>
                Native and cross-platform mobile applications for iOS and
                Android that engage users and drive growth.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3>UI/UX Design</h3>
              <p>
                User-centered design solutions that create intuitive, beautiful,
                and effective digital experiences.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>SEO Optimization</h3>
              <p>
                Comprehensive SEO strategies to improve your visibility and
                rankings on search engines.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio" id="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Our Work</h2>
            <p>
              Take a look at some of our recent projects that demonstrate our
              expertise in web and app development.
            </p>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-image">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <div className="portfolio-info">
                <h3>E-Commerce Platform</h3>
                <p>
                  A fully responsive online store with payment integration and
                  inventory management.
                </p>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
                <i className="fas fa-music"></i>
              </div>
              <div className="portfolio-info">
                <h3>Music Streaming App</h3>
                <p>
                  A cross-platform mobile application for streaming music with
                  social features.
                </p>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="portfolio-info">
                <h3>Booking System</h3>
                <p>
                  A web-based reservation system with calendar integration and
                  notification features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="process" id="process">
        <div className="container">
          <div className="section-title">
            <h2>Our Process</h2>
            <p>
              We follow a structured development process to ensure quality,
              efficiency, and client satisfaction.
            </p>
          </div>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Discovery</h3>
              <p>Understanding your requirements and goals</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Design</h3>
              <p>Creating wireframes and prototypes</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Development</h3>
              <p>Building your website or application</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Delivery</h3>
              <p>Testing and launching your project</p>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>Client Testimonials</h2>
            <p>
              See what our clients have to say about our web and app development
              services.
            </p>
          </div>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-text">
                <p>
                  "DevSolutions transformed our outdated website into a modern,
                  responsive platform that has significantly increased our
                  online conversions."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">JD</div>
                <div>
                  <h4>John Doe</h4>
                  <p>CEO, TechCorp</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-text">
                <p>
                  "The mobile app they developed for us has exceeded our
                  expectations. The user engagement has increased by 150% since
                  launch."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">SR</div>
                <div>
                  <h4>Sarah Johnson</h4>
                  <p>Product Manager, InnovateCo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta" id="contact">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>
            Contact us today for a free consultation and let's discuss how we
            can help you achieve your digital goals.
          </p>
          <a href="#contact" className="btn">
            Get In Touch
          </a>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h3>DevSolutions</h3>
              <p>
                Creating digital experiences that drive growth and engagement
                for businesses worldwide.
              </p>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h3>Services</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">App Development</a>
                </li>
                <li>
                  <a href="#">UI/UX Design</a>
                </li>
                <li>
                  <a href="#">SEO Optimization</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Company</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            {/* <div className="footer-column">
                    <h3>Contact</h3>
                    <ul className="footer-links">
                        <li><i className="fas fa-map-marker-alt"></i> 123 Tech Street, San Francisco</li>
                        <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
                        <li><i className="fas fa-envelope"></i> info@devsolutions.com</li>
                    </ul>
                </div> */}
          </div>
          <div className="copyright">
            <p>&copy; 2023 DevSolutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
