'use client'

import { useState } from 'react'

import {Box, TextField, Grid, Stack} from '@mui/material';

import { SubmitButton, PreviewCVButton } from './ButtonPreviewAndSubmitComponent';
import NewExperienceComponent from './NewExperienceComponent'

export default function ExperienceComponent(){
    const [ experienceList, setExperienceList ] = useState([])
    const [nextId, setNextId] = useState(0)

    const handleRemove =(id) => setExperienceList(prev => prev.filter(item => item.id !== id)) 

    const handleNewExperience = () =>{ 
        setExperienceList(
        prev => [...prev, {id: nextId}])
        setNextId(prev => prev+1)
    }
    return (
    <>
    {experienceList.map(item => (
        <NewExperienceComponent 
        key={item.id}
        id={item.id}
        onRemove={handleRemove}
        />
    ))}
    <Stack sx={{marginTop: '2vh',width: '25%'}}>
        <SubmitButton textBtn="Adicionar Experiência" handleClick={handleNewExperience}/>
    </Stack>
    </>
    )
}