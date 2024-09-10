"use client";

import styles from "./tabela.module.css";

import { styled } from '@mui/material/styles';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso, TableComponents } from 'react-virtuoso';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    '&::-webkit-scrollbar': {
                        width: '10px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: '#581818',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#EEEEEE',
                        borderRadius: '10px',
                        border: '2px solid #fff',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        background: '#555',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                },
            },
        },
    },
});



const CustomPaper = styled(Paper)({
    boxShadow: 'none',
    height: 330,
    width: '90%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});


interface Data {
    calories: number;
    carbs: number;
    dessert: string;
    fat: number;
    id: number;
    protein: number;
}

interface ColumnData {
    dataKey: keyof Data;
    label: string;
    numeric?: boolean;
    width: number;
}

type Sample = [string, number, number, number, number];

const sample: readonly Sample[] = [
    ['Frozen yoghurt', 159, 6.0, 24, 4.0],
    ['Ice cream sandwich', 237, 9.0, 37, 4.3],
    ['Eclair', 262, 16.0, 24, 6.0],
    ['Cupcake', 305, 3.7, 67, 4.3],
    ['Gingerbread', 356, 16.0, 49, 3.9],
];

function createData(
    id: number,
    dessert: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
): Data {
    return { id, dessert, calories, fat, carbs, protein };
}

const columns: ColumnData[] = [
    {
        width: 200,
        label: 'Paciente',
        dataKey: 'dessert',
    },
    {
        width: 120,
        label: 'Tutor',
        dataKey: 'calories',
        numeric: true,
    },
    {
        width: 120,
        label: 'Dia',
        dataKey: 'fat',
        numeric: true,
    },
    {
        width: 120,
        label: 'Hora',
        dataKey: 'carbs',
        numeric: true,
    },
    {
        width: 120,
        label: 'Tipo de Atendimento',
        dataKey: 'protein',
        numeric: true,
    },
];

// Alterado para gerar apenas 6 linhas
const rows: Data[] = Array.from({ length: 6 }, (_, index) => {
    const randomSelection = sample[Math.floor(Math.random() * sample.length)];
    return createData(index, ...randomSelection);
});

const VirtuosoTableComponents: TableComponents<Data> = {
    Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
        <TableContainer className={styles.scrollbar} component={Paper} {...props} ref={ref} />
    )),
    Table: (props) => (
        <Table {...props} sx={{ borderCollapse: 'collapse', tableLayout: 'fixed', width: '100%' }} />
    ),
    TableHead: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
        <TableHead {...props} ref={ref} />
    )),
    TableRow,
    TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
        <TableBody {...props} ref={ref} />
    )),
};

function fixedHeaderContent() {
    return (
        <TableRow>
            {columns.map((column) => (
                <TableCell
                    key={column.dataKey}
                    variant="head"
                    align="left" // Alinhamento à esquerda
                    sx={{
                        fontWeight: 'bolder',
                        backgroundColor: 'background.paper',
                        width: `${100 / columns.length}%`, // Largura igual para todas as colunas
                    }}
                >
                    {column.label}
                </TableCell>
            ))}
        </TableRow>
    );
}

function rowContent(_index: number, row: Data) {
    return (
        <React.Fragment>
            {columns.map((column) => (
                <TableCell
                    key={column.dataKey}
                    align="left" // Alinhamento à esquerda
                    sx={{
                        width: `${100 / columns.length}%`, // Largura igual para todas as colunas
                    }}
                >
                    {row[column.dataKey]}
                </TableCell>
            ))}
        </React.Fragment>
    );
}

export default function ReactVirtualizedTable() {
    return (
        <ThemeProvider theme={theme}>
            <div className={styles.tabela}>
                <Paper
                    sx={{
                        height: 330,
                        width: '90%',
                        margin: '0 auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        maxWidth: '100vh',
                    }}
                >
                    <TableVirtuoso
                        data={rows}
                        components={VirtuosoTableComponents}
                        fixedHeaderContent={fixedHeaderContent}
                        itemContent={rowContent}
                    />
                </Paper>
            </div>
        </ThemeProvider>


        
    );
}