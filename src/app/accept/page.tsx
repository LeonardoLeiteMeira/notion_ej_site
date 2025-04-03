'use client'

import { useEffect, useState } from 'react';
import checkboxeOption from '@/models/types/checkboxOption';
import Feedback from '@/layout/feedback';

export default function Accept() {
  const [name, setName] = useState('');
  const [checkboxes, setCheckboxes] = useState<Array<checkboxeOption>>([
    {"id":"alreadyUsed", "isChecked":false, "label":"Já usamos o Notion oficialmente de alguma forma."},
    {"id":"someMembersUse", "isChecked":false, "label":"Alguns membros usam o Notion na vida pessoal."},
    {"id":"dontUseNotion", "isChecked":false, "label":"Não usamos o Notion mas conheço."},
    {"id":"dontKnowNotion", "isChecked":false, "label":"Não conhecemos o Notion."},
  ]);

  useEffect(() => {
    const parms = new URLSearchParams(window.location.search)
    setName(parms.get('name')??'');
  }, []);

  return (
    <>
      <Feedback
        status='Accept'
        checkBoxOptions={checkboxes}
        setCheckboxValue={setCheckboxes}
      >
        <h3 className="section-title">Olá, fico feliz em saber que você está interessado em levar o Notion gratuitamente para a {name}!</h3>
        <p className="text">Como próximo passo, vou entrar em contato com vocês por esse email mesmo, para que possamos agendar uma call para iniciar o processo.</p>
        <p className="text">A ideia é que eu ajude vocês na implementação da versão pro do Notion de forma gratuita, forneça um template inicial sobre gestão financeira <strong>+</strong> alguns encontros como consultor para ajudar a estruturar o workspace de vocês.</p>
        <p className="text">Se possível, gostaria de saber se vocês já usam o Notion de alguma forma na empresa (de forma pessoal ou oficialmente), ou se essa seria uma nova ferramenta para vocês.</p>
      </Feedback>
    </>
  );
} 