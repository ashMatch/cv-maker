'use client'


import * as React from 'react';
import { FormGroup, Grid, Label, OutLinedInput, Stack, TextField, Button } from "@mui/material"

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/pt-br'

// borderColor: '#B22F9E',

export const PersonalInfoComponent = () => {
    return(
      <form>
            <TextField
              required
              id="full-name"
              label="Nome Completo"
              type="text"
              variant="standard"
              sx={{
                width: '50%'
              }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='pt-br'>
              <DemoContainer components={['DatePicker']}>
              <DatePicker label="Data de Nascimento" slotProps={{
                textField: {
                  variant: 'standard'
                } }}/>
              </DemoContainer>
            </LocalizationProvider>
        <Stack 
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '4px'

        }}>
            <TextField
              required
              id="cep"
              label="CEP"
              type="number"
              variant="standard"
              sx={{
                width: '40%'
              }}
            />
            <TextField
              required
              id="area"
              label="Bairro"
              type="text"
              variant="standard"
              sx={{
                width: '40%'
              }}
            />
            <TextField
              required
              id="house-number"
              label="Numero"
              type="number"
              variant="standard"
              sx={{
                width: '20%'
              }}
            />
        </Stack>
        <Stack 
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '4px'

        }}>
            <TextField
              required
              id="address"
              label="Endereço"
              type="text"
              variant="standard"
              sx={{
                width: '50%'
              }}
            />
            <TextField
              required
              id="extra-info"
              label="Complemento"
              type="text"
              variant="standard"
              sx={{
                width: '40%'
              }}
            />
        </Stack>
        <Stack 
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '4px'

        }}>
            <TextField
              required
              id="email"
              label="Email"
              type="email"
              variant="standard"
              sx={{
                width: '50%'
              }}
            />
            <TextField
              required
              id="phone"
              label="Celular"
              type="number"
              variant="standard"
              sx={{
                width: '40%'
              }}
            />
        </Stack>
      </form>
    )
}

export const GoalComponent = () => {
    return (
      <form noValidate>
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
      </form>
    )
}

export const ExperienceComponent = () => (
    <form>
      <TextField 
      label="EMPRESA"
      variant="standard"
      fullWidth
      margin="normal"
      />
      <TextField 
      label="CARGO"
      variant="standard"
      fullWidth
      margin="normal"
      />
      <Button
      variant="contained"
      sx={{backgroundColor: "#B22F9E"}}
      type='submit'
      >
        Enviar
      </Button>
    </form>
)

const IdiomsComponent = () => (
    <>
    </>
)

const CursesComponent = () => (
    <>
    </>
)

const LinksComponent = () => (
    <></>
)