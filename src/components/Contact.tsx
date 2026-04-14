import './Contact.css'

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__inner">
          <div className="reveal">
            <span className="section-label">Contact</span>
            <h2 className="section-title">Let's work together</h2>
            <p className="contact__desc">
              Have a project in mind or want to discuss how AI can accelerate your workflows?
              I'd love to hear from you.
            </p>
          </div>

          <div className="contact__cards reveal reveal-delay-1">
            {/* PLACEHOLDER: Replace with your real email and LinkedIn */}
            <a href="mailto:hello@example.com" className="contact__card contact__card--email">
              <div className="contact__card-pin" />
              <span className="contact__card-icon">
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M2 6l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </span>
              <span className="contact__card-label">Email</span>
              <span className="contact__card-value">hello@example.com</span>
            </a>

            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="contact__card contact__card--linkedin">
              <div className="contact__card-pin" />
              <span className="contact__card-icon">
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="2" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6 9v5M6 6v.01M10 14v-3.5a1.5 1.5 0 1 1 3 0V14M10 9v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="contact__card-label">LinkedIn</span>
              <span className="contact__card-value">Connect with me</span>
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Tom&#225;&#353; Dole&#382;al. All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}
