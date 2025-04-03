'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import AboutMe from '@/components/aboutMe';
import NotionBenefits from '@/components/notionBenefits';
import EjVideo from '@/components/ejVideo';
import { submitLeadStatus } from '@/http/submit';
import checkboxeOption from '@/models/types/checkboxOption';
import Checkboxs from '@/components/checkboxs';
import Contact from '@/components/contact';
import { useRouter } from "next/navigation";
import FeedbackMessage from '@/models/types/feedback_meesage';

type Props = {
    status: string;
    checkBoxOptions: Array<checkboxeOption>;
    setCheckboxValue: Dispatch<SetStateAction<checkboxeOption[]>>;
    children: React.ReactNode
}

export default function Feedback(props: Props) {
    const {status, checkBoxOptions, setCheckboxValue, children} = props;

    const router = useRouter();
    const [token, setToken] = useState<string>('');
    const [feedback, setFeedback] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<FeedbackMessage>({isError: false, message: null, show: false});

    useEffect(() => {
        const parms = new URLSearchParams(window.location.search)
        const token = parms.get('token')
        if(!token){
        router.push('/error')
        return;
        }
        setToken(token);
    }, []);

    const onChangeCheckbox = (option: checkboxeOption) => {
        setCheckboxValue(prev => prev.map(item => item.id === option.id ? {...item, isChecked: !option.isChecked} : item));
    }

    const handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFeedback(e.target.value);
    };

    const handleSubmit = async () => {
        if (!token) return;

        const selectedOptions = checkBoxOptions.filter(item => item.isChecked);
        const selectedOptionsArr = selectedOptions.map(item => item.label);

        setLoading(true);

        try {
            await submitLeadStatus(token, status, feedback, selectedOptionsArr);
            setMessage({isError: false, message: 'Resposta enviada com sucesso!', show: true});
        } catch (err: any){
            let message = 'Erro ao enviar resposta. Tente novamente.';
            if(err.status == 400){
                message = err.response.data;
            }
            setMessage({isError: true, message, show: true});
        } finally {
            setLoading(false);
            setTimeout(
                () => setMessage((old) => ({ ...old, show: false })), 
                4000
            );
        }
    };


    return (
        <main className="container">
            <section className="accept">
                {children}
                <Checkboxs options={checkBoxOptions} onChange={onChangeCheckbox} />
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

                {message.show && <p className={`text snackbar ${message.isError?"error":"success"}`}>{message.message}</p>}
            </section>

            <AboutMe />
            <NotionBenefits />
            <EjVideo />
            <Contact/>
        </main>
    );
} 