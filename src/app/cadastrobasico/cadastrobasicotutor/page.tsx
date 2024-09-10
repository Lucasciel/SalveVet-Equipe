
'use client';

import React from 'react'
import styles from './Cadastrobasicotutor.module.css'
import BotaoCadastro from '../components/botaoCadastro'


//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const CustomTextField = styled(TextField)(({ theme }) => ({
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




export default function Cadastrobasicotutor() {
  return (
    <div className={styles.container}>


      <div>
        <img className={styles.imagemLogin} src="/imagemCadastro.svg" alt="Imagem de Cadastro" />
      </div>

      <ul className={styles.cadastro}>
        <div className={styles.cadastrese}>
          <img src="/logo.svg" alt="" />
          <h1>Cadastre-se Gratuitamente</h1>
        </div>

        <li className={styles.nomeSobrenome}>
          <CustomTextField className={styles.ui}
            placeholder="Nome" label="Label" type="text"
            InputLabelProps={{
              shrink: true,
            }} />
          <CustomTextField className={styles.ui}
            placeholder="Sobrenome" label="Label" type="text"
            InputLabelProps={{
              shrink: true,
            }} /></li>

        <li><CustomTextField className={styles.ui}
          placeholder="Email" label="Label" type="email"
          InputLabelProps={{
            shrink: true,
          }} /></li>
        <li><CustomTextField className={styles.ui}
          placeholder="Senha" label="Label" type="password"
          InputLabelProps={{
            shrink: true,
          }} /></li>
        <li><CustomTextField className={styles.ui}
          placeholder="CRMV - MG" label="Label" type="text"
          InputLabelProps={{
            shrink: true,
          }} /></li>


        <li><BotaoCadastro /></li>

        <li className={styles.ou}>
          <div></div>
          <p>OU</p>
          <div></div>
        </li>

        <h2>Sou Veterinário</h2>

      </ul>
    </div>
  )
}