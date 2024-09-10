'use client';

import TextField, { TextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const CustomTextField = styled((props: TextFieldProps) => (
  <TextField
    InputLabelProps={{ shrink: true }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: 'gray', // Define a cor cinza da label
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '16px', // Define o border-radius padrão
    '&.Mui-focused .MuiInputLabel-root': {
      color: 'gray', // Mantém a label cinza quando focado
    },
    '&:hover': {
      borderRadius: '16px', // Define o border-radius ao passar o mouse
    },
    '& fieldset': {
      borderColor: 'green', // Cor da borda padrão
    },
    '&:hover fieldset': {
      borderColor: 'green', // Cor da borda ao passar o mouse
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green', // Cor da borda ao focar no input
    },
  },
}));

export default CustomTextField;