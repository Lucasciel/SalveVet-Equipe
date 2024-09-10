
'use client';

import React from 'react'
import styles from "./PerfilTutor.module.css"
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const CustomTextField = styled(TextField)(({ theme }) => ({
    width: '25vh',

    '& .MuiInputLabel-root': {
        color: 'gray', // Define a cor cinza da label
        '&.Mui-focused': {
            color: 'gray', // Cor da label quando o input está focado
        },
    },
    '& .MuiOutlinedInput-root': {
        '& input::placeholder': {
            color: 'black', // Cor do placeholder do input de senha
            opacity: 1,
        },

        borderRadius: '16px', // Border-radius padrão
        '&.Mui-focused': {
            borderRadius: '16px', // Border-radius quando focado
        },
        '&:hover': {
            borderRadius: '16px', // Border-radius ao passar o mouse
        },
        '& fieldset': {
            borderColor: '#88C9A1', // Cor da borda padrão
        },
        '&:hover fieldset': {
            borderColor: '#88C9A1', // Cor da borda ao passar o mouse
        },
        '&.Mui-focused fieldset': {
            borderColor: '#88C9A1', // Cor da borda ao focar no input
        },
    },
}));

export default function PerfilTutor() {
    return (

        <div className={styles.estrutura}>
            <h1>Perfil</h1>

            <div className={styles.estrutura2}>

                <div className={styles.coluna1}>
                    <div className={styles.containerFoto}>
                        <img src="/PerfilVeterinário/perfil.svg" alt="Perfil" />
                        <p>Andrew Smith</p>
                        <button><img src="/PerfilVeterinário/camera.svg" alt="" />Mudar Imagem</button>
                    </div>

                    <button className={styles.botao2}> <img src="/PerfilVeterinário/chave.svg" alt="" />ALTERAR SENHA</button>

                    <textarea className={styles.containerSobreMim} placeholder="Sobre mim" />


                </div>

                <div className={styles.coluna2}>
                    <ul>
                        <h3>Informações Pessoais</h3>
                        <li>
                            <CustomTextField className={styles.ui}
                                placeholder="Nome" label="Label" type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }} />
                            <CustomTextField className={styles.ui}
                                placeholder="Sobrenome" label="Label" type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }} />

                        </li>
                        <li>
                            <CustomTextField className={styles.ui}
                                placeholder="CPF" label="Label" type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }} />
                            <CustomTextField className={styles.ui}
                                placeholder="RG" label="Label" type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }} />
                        </li>
                    </ul>

                    <ul>
                        <h3>Endereço</h3>
                        <li>
                            <CustomTextField className={styles.ui}
                                placeholder="Cep" label="Label" type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }} />
                            <CustomTextField className={styles.ui}
                                placeholder="Endereço" label="Label" type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }} />

                        </li>
                        <li>
                            <CustomTextField className={styles.ui}
                                placeholder="numero" label="Label" type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }} />
                            <CustomTextField className={styles.ui}
                                placeholder="Complemento" label="Label" type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }} />
                        </li>
                        <li>
                            <CustomTextField className={styles.ui}
                                placeholder="cidade/uf" label="Label" type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }} />
                            <div className={styles.botaoInformações} >
                                <button className={styles.botao2}><img src="/PerfilVeterinário/iconeLocalizacao.svg" alt="" />ALTERAR ENDEREÇO</button>
                            </div>
                        </li>
                    </ul>

                    <ul>
                        <h3>Contato</h3>
                        <li>
                            <CustomTextField className={styles.ui}
                                placeholder="E-mail" label="Label" type="email"
                                InputLabelProps={{
                                    shrink: true,
                                }} />
                            <CustomTextField className={styles.ui}
                                placeholder="whatsapp" label="Label" type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }} />
                        </li>
                    </ul>
                    <div className={styles.botaoInformações2}>
                        <button className={styles.botao2}><img src="/PerfilVeterinário/iconeTelefone.svg" alt="" />ALTERAR ENDEREÇO</button>
                    </div>

                </div>

            </div>



        </div>
    )


}