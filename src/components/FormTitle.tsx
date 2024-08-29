import { Typography } from "@mui/material";

interface FormTitlePros{
    title: string
}

export default function FormTitle({ title }: FormTitlePros) {
    return(
        <Typography color= "text.primary" variant="h6" sx={{ marginBottom: 2}}>
            {title}
        </Typography>
    )
}