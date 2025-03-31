'use client'

import AboutMe from "@/components/aboutMe";
import EjVideo from "@/components/ejVideo";
import NotionBenefits from "@/components/notionBenefits";
import { useState, useEffect } from "react";

export default function Contact() {
  const [token, setToken] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [checkboxes, setCheckboxes] = useState({
    freeAlternative: false,
    paidAlternative: false, 
    noInterest: false,
    tooComplex: false,
    noTime: false,
    other: false
  });

  useEffect(() => {
    const parms = new URLSearchParams(window.location.search)
    setToken(parms.get('token'));
    setName(parms.get('name'));
  }, []);

  const handleCheckboxChange = (checkboxName: string) => {
    setCheckboxes(prev => ({
      ...prev,
      [checkboxName]: !prev[checkboxName as keyof typeof prev]
    }));
  };

  return (
    <main className="container">
      <section className="accept">
        <h3 className="section-title">Olá, entendo que você não está interessado em levar o Notion gratuitamente para a {name}!</h3>
        <p className="text">Se possível, gostaria de saber o motivo dessa decisão. Seja por usar outra ferramenta, ou por outro motivo.</p>
        <p className="text">Desejo muito sucesso para vocês e se mudarem de ideia é so chamar!!</p>

        <div className="checkbox-list">
          <label className="checkbox-item">
            <input 
              type="checkbox"
              checked={checkboxes.freeAlternative}
              onChange={() => handleCheckboxChange('freeAlternative')}
            /> Já usamos outra ferramenta que atende nossas necessidades de forma gratuita
          </label>
          <label className="checkbox-item">
            <input 
              type="checkbox"
              checked={checkboxes.paidAlternative}
              onChange={() => handleCheckboxChange('paidAlternative')}
            /> Já usamos outra ferramenta paga que atende nossas necessidades
          </label>
          <label className="checkbox-item">
            <input 
              type="checkbox"
              checked={checkboxes.noInterest}
              onChange={() => handleCheckboxChange('noInterest')}
            /> Não temos interesse em mudar nossa gestão no momento
          </label>
          <label className="checkbox-item">
            <input 
              type="checkbox"
              checked={checkboxes.tooComplex}
              onChange={() => handleCheckboxChange('tooComplex')}
            /> Achamos o Notion muito complexo
          </label>
          <label className="checkbox-item">
            <input 
              type="checkbox"
              checked={checkboxes.noTime}
              onChange={() => handleCheckboxChange('noTime')}
            /> Não temos tempo para implementar uma nova ferramenta
          </label>
          <label className="checkbox-item">
            <input 
              type="checkbox"
              checked={checkboxes.other}
              onChange={() => handleCheckboxChange('other')}
            /> Outro motivo (especifique abaixo)
          </label>
        </div>

        <textarea 
          className="feedback-textarea"
          placeholder="Não quero o Notion GRATUITO por ..."
        ></textarea>
        <p className="text">Para salvar, clique no botão abaixo:</p>
        <button className="btn-primary">Continuar</button>
      </section>

      <AboutMe />
      <NotionBenefits />
      <EjVideo />
    </main>
  );
} 