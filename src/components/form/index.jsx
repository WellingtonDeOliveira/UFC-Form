import './form.css'
import { TestaCPF, TestarRG } from './validar'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import MediaQuery from 'react-responsive';

export function Error({ errors }) {
    return <div className={"error"}>{errors ? errors.message : " "}</div>;
}

export function Form({ setUser, save, cond }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    const [date_cadastro, setCadastro] = useState(today.getFullYear() + "" +
        ((today.getMonth() + 1) <= 9 ? "-0" + (today.getMonth() + 1) : "-" + (today.getMonth() + 1))
        + "" + ((today.getDate()) <= 9 ? "-0" + (today.getDate()) : "-" + (today.getDate())));

    function ValidarCPF(cpf) {
        const val = TestaCPF(cpf);
        if (!val) {
            return false;
        } else {
            return true;
        }
    }

    function handleChange(newData) {

        const nome = newData.name;
        const cpf = newData.cpf;
        const rg = TestarRG(newData.rg);
        const date_nascimento = newData.data_nascimento;
        const mae = newData.mae;
        const validar = ValidarCPF(cpf);
        if (validar && rg != '') {
            setUser(nome, cpf, rg, date_nascimento, mae, date_cadastro)
            save(!cond);
        } else if (rg == '') {
            alert("RG invalido");
        } else {
            alert("CPF invalido");
        }
    }

    return (
        <div>
            <MediaQuery maxWidth={459}>
                <form id="form" className='ViewForm' onSubmit={handleSubmit(data => handleChange(data))}>
                    <h4 className='titleForm titleForm-min'>Adicionar usuário</h4>
                    <label className='titleLabel'>Nome:</label>
                    <input
                        className='input-form'
                        type="text"
                        name='name'
                        {...register('name', { required: '* Obrigatório' })}
                    />
                    <Error errors={errors.name} />
                    <label className='titleLabel'>CPF:</label>
                    <input
                        className='input-form'
                        id='cpf'
                        type="text"
                        name="cpf"
                        maxLength={14}
                        autoComplete="off"
                        {...register('cpf', {
                            required: '* Obrigatório'
                        })}
                    />
                    <Error errors={errors.cpf} />
                    <label className='titleLabel'>RG:</label>
                    <input
                        className='input-form'
                        type="text"
                        name="rg"
                        {...register('rg', { required: '* Obrigatório' })}
                    />
                    <Error errors={errors.rg} />
                    <label className='titleLabel'>Data de nascimento:</label>
                    <input
                        className='input-form'
                        type="date"
                        name="data_nascimento"
                        max={today.getFullYear() + "" +
                            ((today.getMonth() + 1) <= 9 ? "-0" + (today.getMonth() + 1) : "-" + (today.getMonth() + 1))
                            + "" + ((today.getDate()) <= 9 ? "-0" + (today.getDate()) : "-" + (today.getDate()))}
                        {...register('data_nascimento', { required: '* Obrigatório' })}
                    />
                    <Error errors={errors.data_nascimento} />
                    <label className='titleLabel'>Nome da mãe:</label>
                    <input
                        className='input-form'
                        type="text"
                        name="mae"
                        {...register('mae', { required: '* Obrigatório' })}
                    />
                    <Error errors={errors.mae} />
                    <div className='separarButton'>
                        <input className='buttonForm button-min' type="submit" />
                        <input className='buttonFormLimpar button-min' type="reset" value="Limpar" />
                    </div>
                </form>
            </MediaQuery>
            <MediaQuery minWidth={460}>
                <form id="form" className='ViewForm' onSubmit={handleSubmit(data => handleChange(data))}>
                    <h4 className='titleForm'>Adicionar usuário</h4>
                    <label className='titleLabel'>Nome:</label>
                    <input
                        className='input-form'
                        type="text"
                        name='name'
                        {...register('name', { required: '* Obrigatório' })}
                    />
                    <Error errors={errors.name} />
                    <label className='titleLabel'>CPF:</label>
                    <input
                        className='input-form'
                        id='cpf'
                        type="text"
                        name="cpf"
                        maxLength={14}
                        autoComplete="off"
                        {...register('cpf', {
                            required: '* Obrigatório'
                        })}
                    />
                    <Error errors={errors.cpf} />
                    <label className='titleLabel'>RG:</label>
                    <input
                        className='input-form'
                        type="text"
                        name="rg"
                        {...register('rg', { required: '* Obrigatório' })}
                    />
                    <Error errors={errors.rg} />
                    <label className='titleLabel'>Data de nascimento:</label>
                    <input
                        className='input-form'
                        type="date"
                        name="data_nascimento"
                        max={today.getFullYear() + "" +
                            ((today.getMonth() + 1) <= 9 ? "-0" + (today.getMonth() + 1) : "-" + (today.getMonth() + 1))
                            + "" + ((today.getDate()) <= 9 ? "-0" + (today.getDate()) : "-" + (today.getDate()))}
                        {...register('data_nascimento', { required: '* Obrigatório' })}
                    />
                    <Error errors={errors.data_nascimento} />
                    <label className='titleLabel'>Nome da mãe:</label>
                    <input
                        className='input-form'
                        type="text"
                        name="mae"
                        {...register('mae', { required: '* Obrigatório' })}
                    />
                    <Error errors={errors.mae} />
                    <div className='separarButton'>
                        <input className='buttonForm' type="submit" />
                        <input className='buttonFormLimpar' type="reset" value="Limpar" />
                    </div>
                </form>
            </MediaQuery>
        </div>
    )
}