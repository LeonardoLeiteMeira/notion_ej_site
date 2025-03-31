'use client'

import { useEffect, useState } from 'react';
import './index.css';
import Image from 'next/image';

export default function Accept() {
  const [token, setToken] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const parms = new URLSearchParams(window.location.search)
    setToken(parms.get('token'));
    setName(parms.get('name'));

  }, []);

  return (
    <main className="container">
      <section className="accept">
        <h3 className="section-title">Olá, fico feliz em saber que você está interessado em levar o Notion gratuitamente para a {name}!</h3>

        <p className="text">Como próximo passo, vou entrar em contato com vocês por esse email mesmo, para que possamos agendar uma call para iniciar o processo.</p>
        <p className="text">A ideia é que eu ajude vocês na implementação da versão pro do Notion de forma gratuita, forneça um template inicial sobre gestão financeira <strong>+</strong> alguns encontros como consultor para ajudar a estruturar o workspace de vocês.</p>

        <p className="text">Se possível, gostaria de saber se vocês já usam o Notion de alguma forma na empresa (de forma pessoal ou oficialmente), ou se essa seria uma nova ferramenta para vocês.</p>

        <textarea 
          className="feedback-textarea"
          placeholder="Usamos o Notion..."
        ></textarea>

        <p className="text">Para continuar, clique no botão abaixo:</p>
        <button className="btn-primary">Continuar</button>

      </section>

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

      <section className="section">
        <h3 className="section-title">Abaixo seguem alguns benefícios que vocês terão ao usar o Notion PRO:</h3>
        <p className="text"><strong>Ferramenta centralizada:</strong> Não tenha mais a necessidade de ter várias ferramentas para gerenciar seu negócio.</p>
        <p className="text"><strong>Gestão de acessos simples:</strong> Adicione e remova usuários de forma fácil e eficiente.</p>
        <p className="text"><strong>Personalização:</strong> Modifique de acordo com a necessidade da sua empresa.</p>
        <p className="text"><strong>Integrações:</strong> Conecte o Notion com o que você já usa, como Google Drive, Google Calendar, entre outros.</p>
        <p className="text"><strong>Segurança:</strong> Tenha controle total sobre o acesso aos dados da sua empresa.</p>

        <h3 className="section-title">O que pode ser gerenciado com o Notion PRO:</h3>
        <p className="text"><strong>Gestão Financeira:</strong> Vou passar para vocês um sistema de gestão financeira muito simples e eficiente com o Notion.</p>
        <p className="text"><strong>Gestão de Projetos:</strong> Gerencie seus projetos, membros que executam tarefas e prazos.</p>
        <p className="text"><strong>Gestão de Clientes:</strong> CRM que se adapta à necessidade da sua empresa e integrado com outras áreas como financeiro e marketing.</p>
        <p className="text"><strong>Gestão de Equipes:</strong> Gerencie os membros com gamificação, feedbacks, pendências e muito mais.</p>
        
        <div className="notion-pro-container">
          <p className="text"><strong>E O MELHOR:</strong> Notion é completamente gratuito para empresas juniores! Com gráficos, membros ilimitados, integrações e muito mais!</p>
        </div>
      </section>

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
      
    </main>
  );
} 