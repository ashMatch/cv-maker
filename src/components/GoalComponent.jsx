import { TextField } from "@mui/material"

export default function GoalComponent() {
    return (
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
    )
}