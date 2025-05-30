import CVForms from './CVForms'

import { Box } from '@mui/material'

export default function(){
    return(
        <Box
            sx={{
                display: 'flex',
                justifyContent:'center',
                backgroundColor: '#D9D9D9',
                minHeight:'100vh'
            }}>
            <CVForms/>
        </Box>
    )
}