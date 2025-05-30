import * as React from 'react'

import { Box } from "@mui/material";

import { PreviewCVButton,SubmitButton } from './ButtonPreviewAndSubmitComponent'
import { 
    PersonalInfoComponent, 
    GoalComponent,
    ExperienceComponent
} from './FormFields'

const topicComponents = {
    '+ INFORMAÇÕES PESSOAIS': <PersonalInfoComponent/>,
    '+ OBJETIVO': <GoalComponent/>,
    '+ EXPERIÊNCIAS': <ExperienceComponent/>,
    '+ IDIOMAS': <PersonalInfoComponent/>,
    '+ CURSOS': <PersonalInfoComponent/>,
    '+ LINKS': <PersonalInfoComponent/>,
}
const topics = [
    '+ INFORMAÇÕES PESSOAIS', 
    '+ OBJETIVO', 
    '+ EXPERIÊNCIAS', 
    '+ IDIOMAS',
    '+ CURSOS',
    '+ LINKS'
]

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

            <ul>
                {topics.map((topic, index) => (
                    <Box key={index}>
                    <li>
                        <h3 className="text-[#B22F9E] font-bold py-[6px]" 
                            style={{fontSize:'clamp(.8rem, 2vw, 1.2rem)'}}>
                        {topic}
                        </h3>
                        <Box
                        sx={{
                            width:'95%',
                            height: '4px',
                            backgroundColor: '#B22F9E',
                            borderRadius: '999px',
                        }}
                        />
                </li>
                <Box
                    sx={{
                        marginY:'4vh'
                    }}
                >
                {topicComponents[topic]}
                </Box>
                </Box>
                ))}
            </ul>

            <Box
            sx={{
                marginTop: '16vh',
                display: 'flex',
                flexDirection: 'row',
                justifyItems: 'center',
                justifyContent: 'space-around',
            }}>
                <PreviewCVButton/>
                <SubmitButton />
            </Box>
        </Box>
    )
}