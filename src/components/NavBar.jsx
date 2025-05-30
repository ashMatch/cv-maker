import * as React from 'react';
import { 
    AppBar,
    Box,
    Toolbar,
    Typography,
} from '@mui/material';
import { Chewy } from 'next/font/google';
const chewy = Chewy({
    weight:['400'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-chewy',
})

export default function NavBar(){
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' sx={{
                backgroundColor: '#B22F9E',
                boxShadow: 'none',
                }}>
                <Toolbar variant='dense' sx={{
                    color: '#fff',
                    justifyContent: 'center'}}
                >
                    <Typography 
                    variant='H1' color='inherit' aria-label="menu"
                    sx={{
                        fontSize: 'clamp(2rem, 5vw, 4rem)',
                        fontFamily: chewy.style.fontFamily
                    }}
                    >
                        FAÇA SEU CURRICULO
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}