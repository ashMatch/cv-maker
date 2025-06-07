'use client'
import { Button, Stack } from '@mui/material'

export const PreviewCVButton = ({textBtn, handleClick=()=>{}}) => {
    return(
    <Stack
        spacing={4}
    >
        <Button 
        variant='outlined'
        sx={{
            fontWeight:'bold',
            borderColor: "#B22F9E",
            borderWidth: '2px',
            color: "#B22F9E"
        }}
        >{textBtn}</Button>
    </Stack>
)}
export const SubmitButton = ({textBtn, handleClick}) => {
    return(
    <Stack spacing={4}>
        <Button variant='contained' sx={{ fontWeight: 'bold',backgroundColor:"#B22F9E"}}
         onClick={handleClick}
        >{textBtn}</Button>
    </Stack>
)}