'use client'

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {Box, Grid, TextField} from '@mui/material'



const removeNumberRows = {'& input[type=number]': {
      'mozAppearance': 'textfield', // Firefox
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      'webkitAppearance': 'none',
      margin: 0,
    },
    '& input[type=number]::-webkit-inner-spin-button': {
      'webkitAppearance': 'none',
      margin: 0,
    },}

const handleKeyDown = (event) => {
  if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    event.preventDefault(); // bloqueia ↑ e ↓
  }
}


export default function PersonalInfoComponent(){
     return(
      <Box sx={{width:'94%', marginBottom:'4vh'}}>
        <Grid container spacing={2} alignItems="center">
          <Grid size={8}>
            <TextField
              required
              fullWidth
              id="full-name"
              label="Nome Completo"
              type="text"
              variant="standard"
            />
            </Grid> 
            <Grid size={4}>
              <LocalizationProvider fullWidth dateAdapter={AdapterDayjs} adapterLocale='pt-br'>
                <DemoContainer components={['DatePicker']} sx={{overflow: 'hidden'}}>
                <DatePicker label="Data de Nascimento" slotProps={{
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
            <Grid size={4}>
              <TextField
                fullWidth
                required
                id="cep"
                label="CEP"
                type="number"
                variant="standard"
                sx={removeNumberRows}
                onKeyDown={handleKeyDown}
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                required
                id="area"
                label="Bairro"
                type="text"
                variant="standard"
              />
            </Grid>
            <Grid size={2}>
              <TextField
                fullWidth
                required
                id="house-number"
                label="Numero"
                type="number"
                variant="standard"
                sx={removeNumberRows}
                onKeyDown={handleKeyDown}
              />
            </Grid>
            <Grid size={8}>
              <TextField
                fullWidth
                required
                id="address"
                label="Endereço"
                type="text"
                variant="standard"
              />
            </Grid>
            <Grid size={4}>
              <TextField
                fullWidth
                required
                id="extra-info"
                label="Complemento"
                type="text"
                variant="standard"
              />
            </Grid>
            <Grid size={8}>
              <TextField
                fullWidth
                required
                id="email"
                label="Email"
                type="text"
                variant="standard"
              />
            </Grid>
            <Grid size={4}>
              <TextField
                fullWidth
                required
                id="extra-info"
                label="Phone"
                type="number"
                variant="standard"
                sx={removeNumberRows}
                onKeyDown={handleKeyDown}
              />
          </Grid>
        </Grid>
      </Box>
    )
}