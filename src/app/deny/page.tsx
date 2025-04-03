'use client'

import { useState, useEffect } from "react";
import checkboxeOption from "@/models/types/checkboxOption";
import Feedback from "@/layout/feedback";

export default function deny() {
  const [name, setName] = useState<string>();

  const [checkboxes, setCheckboxes] = useState<Array<checkboxeOption>>([
    {"id":"freeAlternative", "isChecked":false, "label":"Já usamos outra ferramenta que atende nossas necessidades de forma gratuita"},
    {"id":"paidAlternative", "isChecked":false, "label":"Já usamos outra ferramenta paga que atende nossas necessidades"},
    {"id":"noInterest", "isChecked":false, "label":"Não temos interesse em mudar nossa gestão no momento"},
    {"id":"tooComplex", "isChecked":false, "label":"Achamos o Notion muito complexo"},
    {"id":"noTime", "isChecked":false, "label":"Não temos tempo para implementar uma nova ferramenta"},
    {"id":"other", "isChecked":false, "label":"Outro motivo (especifique abaixo)"}
  ]);

  useEffect(() => {
    const parms = new URLSearchParams(window.location.search);
    setName(parms.get('name')??"");
  }, []);

  return (

    <Feedback
      status="Refused"
      checkBoxOptions={checkboxes}
      setCheckboxValue={setCheckboxes}
    >
      <h3 className="section-title">Olá, entendo que você não está interessado em levar o Notion gratuitamente para a {name}!</h3>
      <p className="text">Se possível, gostaria de saber o motivo dessa decisão. Seja por usar outra ferramenta, ou por outro motivo.</p>
      <p className="text">Desejo muito sucesso para vocês e se mudarem de ideia é so chamar!!</p>
      
    </Feedback>
  );
} 