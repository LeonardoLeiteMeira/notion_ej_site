'use client'

import { useEffect, useState } from 'react';
import './index.css';
import AboutMe from '@/components/aboutMe';
import NotionBenefits from '@/components/notionBenefits';
import EjVideo from '@/components/ejVideo';

export default function Accept() {
  const status = "Accept";
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

      <AboutMe />
      <NotionBenefits />
      <EjVideo />
    </main>
  );
} 