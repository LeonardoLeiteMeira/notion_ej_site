import Image from 'next/image';

export default function AboutMe() {
    return (
    <section className="section">
      <h3 className="section-title">Sobre mim</h3>
        <div className="profile-container">
          <div className="profile-image-container">
            <Image 
              src="/assets/profile_final.jpeg" 
              alt="Profile" 
              width={150} 
              height={150}
              className="profile-image"
            />
          </div>

          <div className="profile-text-container">
            <p className="text">Meu nome é Leonardo Leite, sou Engenheiro de Software e co-fundador da <strong>Commit Jr</strong> no CEFET-MG</p>
            <p className="text">Me tornei Notion Campus Leader em 2024 e meu objetivo é aumentar a adoção do Notion pelas instituições de ensino.</p>
            <p className="text">Trabalhei com o Notion desde a fundação da empresa júnior, e atualmente ele está no auge da sua maturidade.</p>
          </div>
        </div>
      </section>
    )
}
