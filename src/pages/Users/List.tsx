import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import {Link as RouterLink} from "react-router-dom";
import { Box, Button, Paper, Stack } from '@mui/material';


import PageTitle from "../../components/PageTitle";
import Breadcrumbs from "../../components/Breadcrumbs";
import Grid from "./components/Grid";

export default function List(){


    return (
      <>
        <Stack direction={{ xs: "column", sm: "row"}} gap={1} mb={2}>
          <Box sx={{flexGrow: 1}}>
            <PageTitle title="Lista"/>
            <Breadcrumbs path={[ {label: "Usuários", to: "/users"}, {label: "Lista"}]}/>
          </Box>
          <Box  sx={{ alingSelf: "center"}}>
           
            <Button 
            component={RouterLink}
            to="/users/new"
            variant="contained"
            startIcon={<PersonAddAltIcon />}
            >
              Novo Usuário
            </Button>
          </Box>
        </Stack>
        <Paper>
          <Grid/>
        </Paper>
      </>
    )
}