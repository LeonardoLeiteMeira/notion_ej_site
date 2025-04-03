'use client'

import { useEffect, useState } from 'react';
import './index.css';
import AboutMe from '@/components/aboutMe';
import NotionBenefits from '@/components/notionBenefits';
import EjVideo from '@/components/ejVideo';
import { submitLeadStatus } from '@/http/submit';
import checkboxeOption from '@/models/types/checkboxOption';
import Checkboxs from '@/components/checkboxs';
import Contact from '@/components/contact';
import { useRouter } from "next/navigation";

export default function Accept() {
  const status = "Accept";
  const router = useRouter();
  const [token, setToken] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [checkboxes, setCheckboxes] = useState<Array<checkboxeOption>>([
    {"id":"alreadyUsed", "isChecked":false, "label":"Já usamos o Notion oficialmente de alguma forma."},
    {"id":"someMembersUse", "isChecked":false, "label":"Alguns membros usam o Notion na vida pessoal."},
    {"id":"dontUseNotion", "isChecked":false, "label":"Não usamos o Notion mas conheço."},
    {"id":"dontKnowNotion", "isChecked":false, "label":"Não conhecemos o Notion."},
  ]);

  useEffect(() => {
    const parms = new URLSearchParams(window.location.search)
    const token = parms.get('token')
    if(!token){
      router.push('/error')
      return;
    }
    setName(parms.get('name')??'');
    setToken(token);
  }, []);

  const onChangeCheckbox = (option: checkboxeOption) => {
    setCheckboxes(prev => prev.map(item => item.id === option.id ? {...item, isChecked: !option.isChecked} : item));
  }

  const handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = async () => {
    if (!token) return;

    const selectedOptions = checkboxes.filter(item => item.isChecked);
    const selectedOptionsArr = selectedOptions.map(item => item.label);

    setLoading(true);
    setMessage(null);

    try {
      await submitLeadStatus(token, status, feedback, selectedOptionsArr);
      setMessage('Resposta enviada com sucesso!');
    } catch (err) {
      setMessage('Erro ao enviar resposta. Tente novamente.');
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(null), 4000);
    }
  };


  return (
    <main className="container">
      <section className="accept">
        <h3 className="section-title">Olá, fico feliz em saber que você está interessado em levar o Notion gratuitamente para a {name}!</h3>
        <p className="text">Como próximo passo, vou entrar em contato com vocês por esse email mesmo, para que possamos agendar uma call para iniciar o processo.</p>
        <p className="text">A ideia é que eu ajude vocês na implementação da versão pro do Notion de forma gratuita, forneça um template inicial sobre gestão financeira <strong>+</strong> alguns encontros como consultor para ajudar a estruturar o workspace de vocês.</p>


        <p className="text">Se possível, gostaria de saber se vocês já usam o Notion de alguma forma na empresa (de forma pessoal ou oficialmente), ou se essa seria uma nova ferramenta para vocês.</p>
        <Checkboxs options={checkboxes} onChange={onChangeCheckbox} />
        <textarea 
          className="feedback-textarea"
          placeholder="Usamos o Notion..."
          value={feedback}
          onChange={handleFeedbackChange}
        ></textarea>
        <p className="text">Para continuar, clique no botão abaixo:</p>
        <button className="btn-primary" onClick={handleSubmit} disabled={loading}>
          {loading ? 'Enviando...' : 'Continuar'}
        </button>
        {message && <p className="text feedback-message">{message}</p>}
      </section>

      <AboutMe />
      <NotionBenefits />
      <EjVideo />
      <Contact/>
    </main>
  );
} 