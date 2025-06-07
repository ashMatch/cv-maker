import * as React from 'react'

import { Box } from "@mui/material";

import { PreviewCVButton,SubmitButton } from './ButtonPreviewAndSubmitComponent'

import TitleComponent from './TitleComponent';
import PersonalInfoComponent from './PersonalInfoComponent';
import GoalComponent from './GoalComponent';
import ExperienceComponent from './ExperienceComponent';

export default function CVForms(){
    return(
        <Box
         sx={{
             width: '70%',
             margin: '3rem',
             backgroundColor: '#FDFBFB',
             padding: '2rem',
             paddingLeft: '4rem',
             borderRadius: '36px'

         }}
        >
             <form action=''>
                <TitleComponent title="+ INFORMAÇÕES PESSOAIS"/>
                <PersonalInfoComponent />
                <TitleComponent title="+ OBJETIVO"/>
                <GoalComponent/>
                <TitleComponent title="+ EXPERIÊNCIAS"/>
                <ExperienceComponent/>
                
                
                <Box
                sx={{
                    marginTop: '16vh',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyItems: 'center',
                    justifyContent: 'space-around',
                }}>
                    <PreviewCVButton textBtn="Visualizar"/>
                    <SubmitButton textBtn="Gerar pdf"/>
                </Box>
        </form>
        </Box>
    )
}