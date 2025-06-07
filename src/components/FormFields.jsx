'use client'
import { useState } from 'react'

import { FormGroup, Grid, Label, OutLinedInput, Stack, TextField, Button, Box, Checkbox } from "@mui/material"

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/pt-br'
import { PreviewCVButton, SubmitButton } from './ButtonPreviewAndSubmitComponent';
import TitleComponent from './TitleComponent';
// borderColor: '#B22F9E',

export const GoalComponent = () => {
    return (
      <FormGroup>
      <div>
        <TextField
          id="outlined-textarea"
          label="Meu Objetivo"
          placeholder="Meu objetivo é "
          multiline
          rows={3}
          sx={{
            width: '95%'
          }}
        />
      </div>
      </FormGroup>
    )
}

export const ExperienceComponent = () =>{ 
  const [ currentJob, setCurrentJob] = useState(false)
  const [ newExperienceForm, setNewExperienceForm] = useState(false)

  const handleCurrentJobOrDateLast = ()=> setCurrentJob(!currentJob)
  const handleNewExperience = () => setNewExperienceForm(true)
  
  return (
    <>
    <Stack sx={{marginTop: '2vh',width: '25%'}}>
        <SubmitButton textBtn="Adicionar Experiência" handleClick={handleCurrentJobOrDateLast}/>
    </Stack>
    { newExperienceForm && (
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
        <PreviewCVButton textBtn="Remover Experiencia"/>
      </Stack>
      </Box> 
      )}
      </>
  )
}
export const IdiomsComponent = () => (
    <FormGroup>
      <Stack direction="row" spacing={6}>
        <PreviewCVButton textBtn="Remover"/>
        <SubmitButton textBtn="Adicionar"/>
      </Stack>
    </FormGroup>
)

export const CursesComponent = () => (
    <FormGroup>
      <Stack direction="row" spacing={6}>
        <PreviewCVButton textBtn="Remover"/>
        <SubmitButton textBtn="Adicionar"/>
      </Stack>
    </FormGroup>
)

export const LinksComponent = () => (
        <FormGroup>
      <Stack direction="row" spacing={6}>
        <PreviewCVButton textBtn="Remover"/>
        <SubmitButton textBtn="Adicionar"/>
      </Stack>
    </FormGroup>
)