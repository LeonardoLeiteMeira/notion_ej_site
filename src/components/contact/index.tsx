import './index.css';

export default function Contact(){
    return (
        <section className="section">
            <h3 className="section-title">Entre em contato!</h3>
            <div className="contact-options">
                <a href="mailto:seuemail@exemplo.com" className="contact-card">
                    <img src="/assets/icons/email.svg" alt="Email" />
                    <span>Email</span>
                </a>

                <a href="https://www.linkedin.com/in/seuperfil" target="_blank" className="contact-card">
                    <img src="/assets/icons/linkedin.svg" alt="LinkedIn" />
                    <span>LinkedIn</span>
                </a>

                <a href="https://calendly.com/seunome/reuniao" target="_blank" className="contact-card">
                    <img src="/assets/icons/meeting.svg" alt="Agendar reunião" />
                    <span>Agende uma Reunião</span>
                </a>
            </div>
        </section>
    )
}