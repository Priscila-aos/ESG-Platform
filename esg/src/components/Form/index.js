import React from 'react';
import * as s from './style';
import Input from '../Input';
import Button from '../Button';
import { useForm } from 'react-hook-form';
import { api } from '../../axios/axios';
import { FaExclamationCircle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import Header from '../Header'; 
import Footer from '../Footer'; 

export function Form({ title }) {
    const {
        register,
        handleSubmit,
        reset,
        clearErrors,
        setValue,
        getValues,
        formState: { errors }
    } = useForm();

    const { user } = useAuth();

    const handleCreatePost = async (data) => {
        console.log(data);

        if (!user) {
            console.error('Usuário não autenticado');
            return;
        }

        const { categoria } = getValues(); // Obter o valor da categoria selecionada
        let pontuacao;

        // Calcular a pontuação com base na categoria selecionada
        switch (categoria) {
            case 'cat_1':
                pontuacao = 10;
                break;
            case 'cat_2':
                pontuacao = 20;
                break;
            case 'cat_3':
                pontuacao = 30;
                break;
            case 'cat_4':
                pontuacao = 40;
                break;
            default:
                pontuacao = 0;
                break;
        }

        // Adicionar a pontuação aos dados antes de enviar para a API
        const newData = { ...data, pontuacao, email: user.email };

        try {
            await api.post('/posts', newData);
            reset();
            clearErrors();
        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
        }
    };

    return (
        <>
            <Header /> {/* Renderize o componente Header */}
            <s.Container>
                <s.Content>
                    <s.Strong>{title}</s.Strong>

                    <form onSubmit={handleSubmit(handleCreatePost)}>
                        <s.Line>
                            <s.Label>Título: </s.Label>
                            <Input placeholder='Crie um título de impacto!' {...register('titulo', { required: true })} />
                            {errors.titulo && <s.IconError><FaExclamationCircle /></s.IconError>}
                        </s.Line>

                        <s.Line>
                            <s.Label>Nome: </s.Label>
                            <Input placeholder='Nome!' {...register('nome', { required: true })} />
                            {errors.titulo && <s.IconError><FaExclamationCircle /></s.IconError>}
                        </s.Line>

                        <s.Line>
                            <s.Label>Email: </s.Label>
                            <Input placeholder='Email!' {...register('email', { required: true })} />
                            {errors.titulo && <s.IconError><FaExclamationCircle /></s.IconError>}
                        </s.Line>

                        <s.Line>
                            <s.Label>Atividade: </s.Label>
                            <Input placeholder='Descreva sua Atividade!' {...register('atividade', { required: true })} />
                            {errors.titulo && <s.IconError><FaExclamationCircle /></s.IconError>}
                        </s.Line>

                        <s.RadioGroup>
                            <s.RadioButtonLabel>
                                <s.RadioButton type="radio" value="cat_1" {...register('categoria', { required: true })} />
                                <span></span>
                                Governança ambiental
                            </s.RadioButtonLabel>

                            <s.RadioButtonLabel>
                                <s.RadioButton type="radio" value="cat_2" {...register('categoria', { required: true })} />
                                <span></span>
                                Governança social
                            </s.RadioButtonLabel>

                            <s.RadioButtonLabel>
                                <s.RadioButton type="radio" value="cat_3" {...register('categoria', { required: true })} />
                                <span></span>
                                Governança corporativa
                            </s.RadioButtonLabel>

                            {/* <s.RadioButtonLabel>
                                <s.RadioButton type="radio" value="cat_4" {...register('categoria', { required: true })} />
                                <span></span>
                                Cat_4
                            </s.RadioButtonLabel> */}
                            {errors.titulo && <s.IconError><FaExclamationCircle /></s.IconError>}
                        </s.RadioGroup>

                        <Button Text='Salvar' Type="submit" />
                    </form>
                </s.Content>
            </s.Container>
            <Footer /> {/* Renderize o componente Footer */}
        </>
    );
}

export default Form;
