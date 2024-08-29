import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import {Link as RouterLink} from "react-router-dom";
import { Box, Button, IconButton, Paper, Stack } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { GridRenderCellParams, GridColDef } from "@mui/x-data-grid";
import { User } from "./types/User";
import PageTitle from "../../components/PageTitle";
import Breadcrumbs from "../../components/Breadcrumbs";
import DataTable from "../../components/DataTable";

export default function List(){
    const onCall = (params: GridRenderCellParams) => {
      //

    }

    const onEdit = (params: GridRenderCellParams) => {

//
    }

    const onDelete = (params: GridRenderCellParams) => {

  
    }

    const columns: GridColDef<User>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    valueGetter: (value, row) => 
      `${row.fullName.split(' ')?.shift() || ""}`
  },
  {
    field: 'lastName',
    headerName: 'Sobrenome',
    width: 150,
    valueGetter: (value, row) => 
      `${row.fullName.split(' ').pop() || ""}`
  },
  {
    field: 'age',
    headerName: 'Idade',
    type: 'number',
    width: 110,
    valueGetter: (value, row) =>
      row.birthDate &&
      `${new Date().getFullYear() - new Date(row.birthDate).getFullYear()}`
  },
  {
    field: "email",
    headerName: "E-mail",
    minWidth: 200
  },
  {
    field: "document",
    headerName: "CPF",
    minWidth: 180,
  },
  {
    field: 'actions',
    headerName: 'Ações',
    width: 180,
    renderCell: (params) => (
      <Stack direction= "row" spacing={2}>
        <IconButton color="success" size='medium' onClick={() => onCall(params)}>
          <WhatsAppIcon fontSize= 'inherit'/>
        </IconButton>

        <IconButton color="info" size='medium' onClick={() => onEdit(params)}>
          <EditIcon fontSize= 'inherit'/>
        </IconButton>

        <IconButton color="error" size='medium' onClick={() => onDelete(params)}>
          <DeleteIcon fontSize= 'inherit'/>
        </IconButton>
      </Stack>
    ),
  },
];

const users = [
  {
    id: '1',
    fullName: 'Felipe Fontoura',
    document: '986.007.560-30',
    birthDate: new Date(1982, 1, 1),
    email: 'felipe@teste.com.br',
    emailVerified: true,
    mobile: '(11) 99999-9999',
    zipCode: '00000-000',
    addressName: 'Rua Teste',
    number: '123',
    complement: '',
    neighborhood: 'Bairro Teste',
    city: 'São Paulo',
    state: 'SP',
  }
]


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
          <DataTable rows={users} columns={columns}/>
        </Paper>
      </>
    )
}