export default function EjVideo() {
    return (
        <section className="section">
        <p className="text">Abaixo deixei um vídeo que fiz que conta um pouco sobre o motivo do Notion ser tão bom para empresas juniores.</p>
        <div className="video-container">
          <iframe 
            src="https://www.youtube.com/embed/bWyC51U9RVE" 
            title="Por que o Notion é tão bom para empresas júnior?" 
            width="100%" 
            height="315" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </section>
    )
}