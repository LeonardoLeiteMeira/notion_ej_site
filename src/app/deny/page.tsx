'use client'

import AboutMe from "@/components/aboutMe";
import EjVideo from "@/components/ejVideo";
import NotionBenefits from "@/components/notionBenefits";
import { useState, useEffect } from "react";
import checkboxeOption from "@/models/types/checkboxOption";
import Checkboxs from "@/components/checkboxs";
import { submitLeadStatus } from "@/http/submit";
import Contact from "@/components/contact";
import { useRouter } from "next/navigation";

export default function deny() {
  const status = "Refused";
  const router = useRouter();
  const [token, setToken] = useState<string>('');
  const [name, setName] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [checkboxes, setCheckboxes] = useState<Array<checkboxeOption>>([
    {"id":"freeAlternative", "isChecked":false, "label":"Já usamos outra ferramenta que atende nossas necessidades de forma gratuita"},
    {"id":"paidAlternative", "isChecked":false, "label":"Já usamos outra ferramenta paga que atende nossas necessidades"},
    {"id":"noInterest", "isChecked":false, "label":"Não temos interesse em mudar nossa gestão no momento"},
    {"id":"tooComplex", "isChecked":false, "label":"Achamos o Notion muito complexo"},
    {"id":"noTime", "isChecked":false, "label":"Não temos tempo para implementar uma nova ferramenta"},
    {"id":"other", "isChecked":false, "label":"Outro motivo (especifique abaixo)"}
  ]);

  const onChangeCheckbox = (option: checkboxeOption) => {
    setCheckboxes(prev => prev.map(item => item.id === option.id ? {...item, isChecked: !option.isChecked} : item));
  }

  const [feedback, setFeedback] = useState<string>("");

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

  useEffect(() => {
    const parms = new URLSearchParams(window.location.search);
    const token = parms.get('token');
    if(!token){
      router.push('/error')
      return;
    }
    setToken(token);
    setName(parms.get('name')??"");
  }, []);

  return (
    <main className="container">
      <section className="accept">
        <h3 className="section-title">Olá, entendo que você não está interessado em levar o Notion gratuitamente para a {name}!</h3>
        <p className="text">Se possível, gostaria de saber o motivo dessa decisão. Seja por usar outra ferramenta, ou por outro motivo.</p>
        <p className="text">Desejo muito sucesso para vocês e se mudarem de ideia é so chamar!!</p>

        <Checkboxs options={checkboxes} onChange={onChangeCheckbox} />

        <textarea 
          className="feedback-textarea"
          placeholder="Não quero o Notion GRATUITO por ..."
          value={feedback}
          onChange={handleFeedbackChange}
        ></textarea>
        <p className="text">Para salvar, clique no botão abaixo:</p>
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