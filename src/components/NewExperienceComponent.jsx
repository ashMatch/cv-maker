'use client'

import { useState } from 'react'

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {Box, TextField, Grid, Stack, Checkbox} from '@mui/material';

import { SubmitButton, PreviewCVButton } from './ButtonPreviewAndSubmitComponent';

export default function NewExperience({id, onRemove}) {
    const [ currentJob, setCurrentJob] = useState(false)
    const handleCurrentJobOrDateLast = ()=> setCurrentJob(!currentJob)

    return(
    <Box sx={{width: '94%'}}>
    <Grid container spacing={2}>
        <Grid size={8}>
        <TextField
        fullWidth 
        label="EMPRESA"
        variant="standard"
        margin="normal"
        />
        </Grid>
        <Grid size={4}>
        <TextField
        fullWidth
        label="CARGO"
        variant="standard"
        margin="normal"
        />
        </Grid>
        <Grid size={5}>
        <LocalizationProvider fullWidth dateAdapter={AdapterDayjs} adapterLocale='pt-br'>
                <DemoContainer components={['DatePicker']} sx={{overflow: 'hidden'}}>
                <DatePicker label="Data Inicial" slotProps={{
                    textField: {
                    variant: 'standard',
                    sx: {
                        overflow: 'hidden',
                        '& .MuiInputBase-root': {
                        alignItems: 'center', // força centralização do input e ícone
                        },
                        '& .MuiInputBase-input': {
                        paddingRight: '0px', // diminua esse valor conforme o desejado (pode ser 0, 1, 2, etc)
                        paddingTop: '0px',
                        paddingBottom: '0px',

                        },
                        // Reduz a margin do adornment (ícone)
                        '& .MuiInputAdornment-root': {
                        marginRight: '0px',
                    },
                    }
                    }
                    }}/>
                </DemoContainer>
                </LocalizationProvider>
            </Grid>
            <Grid size={2} sx={{
                display: 'flex',
                flexDirection: 'flex-row',
                gap: '4px',
                alignItems: 'center',
            }}>
                <Checkbox
                value={currentJob}
                onChange={handleCurrentJobOrDateLast}
                />
                <span>Atual</span>
            </Grid>
            <Grid size={5}>
                {currentJob && (
                <LocalizationProvider fullWidth dateAdapter={AdapterDayjs} adapterLocale='pt-br'>
                <DemoContainer components={['DatePicker']} sx={{overflow: 'hidden'}}>
                <DatePicker label="Data Final" slotProps={{
                    textField: {
                    variant: 'standard',
                    sx: {
                        overflow: 'hidden',
                        '& .MuiInputBase-root': {
                        alignItems: 'center', // força centralização do input e ícone
                        },
                        '& .MuiInputBase-input': {
                        paddingRight: '0px', // diminua esse valor conforme o desejado (pode ser 0, 1, 2, etc)
                        paddingTop: '0px',
                        paddingBottom: '0px',

                        },
                        // Reduz a margin do adornment (ícone)
                        '& .MuiInputAdornment-root': {
                        marginRight: '0px',
                    },
                    }
                    }
                    }}/>
                </DemoContainer>
                </LocalizationProvider>
                )}
        </Grid>
        <Grid size={12}>
        <TextField
            fullWidth
            id="outlined-textarea"
            label="Minha Função"
            placeholder="Função do cargo"
            multiline
            rows={3}
        />
        </Grid>
        </Grid>
        <Stack sx={{marginTop: '2vh',width: '25%'}}>
        <PreviewCVButton textBtn="Remover Experiencia" handleClick={() => onRemove(id)} />
        </Stack>
        </Box> 
    )
}