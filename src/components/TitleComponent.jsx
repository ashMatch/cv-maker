import { Box } from '@mui/material'

export default function TitleComponent({title}){
    return(
    <h3 className="text-[#B22F9E] font-bold py-[6px]" 
        style={{fontSize:'clamp(.8rem, 2vw, 1.2rem)'}}>{title}</h3>
    )
}