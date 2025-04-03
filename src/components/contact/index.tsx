import './index.css';

export default function Contact(){
    return (
        <section className="section">
            <h3 className="section-title">Entre em contato!</h3>
            <div className="contact-options">
                <a href="mailto:leonardo.leitemeira10@gmail.com" className="contact-card">
                    <img src="/assets/icons/email.svg" alt="Email" />
                    <span>Email</span>
                </a>

                <a href="https://www.linkedin.com/in/leonardoleitedigital/" target="_blank" className="contact-card">
                    <img src="/assets/icons/linkedin.svg" alt="LinkedIn" />
                    <span>LinkedIn</span>
                </a>

                <a href="https://calendar.app.google/MxQ5uYKeAWSS9LxH7" target="_blank" className="contact-card">
                    <img src="/assets/icons/meeting.svg" alt="Agendar reunião" />
                    <span>Agende uma Reunião</span>
                </a>
            </div>
        </section>
    )
}