import { Button, Stack } from '@mui/material'

export const PreviewCVButton = () => {
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
        >Preview</Button>
    </Stack>
)}
export const SubmitButton = () => {
    return(
    <Stack
        spacing={4}
    >
        <Button variant='contained' sx={{ fontWeight: 'bold',backgroundColor:"#B22F9E"}}>Gerar PDF</Button>
    </Stack>
)}