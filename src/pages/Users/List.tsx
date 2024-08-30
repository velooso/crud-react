import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import {Link as RouterLink} from "react-router-dom";
import { Box, Button, IconButton, Paper, Stack } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { GridRenderCellParams, GridColDef } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { User } from "./types/User";
import PageTitle from "../../components/PageTitle";
import Breadcrumbs from "../../components/Breadcrumbs";
import DataTable from "../../components/DataTable";
import { useLocalStorage } from "usehooks-ts"

export default function List(){
  
  const [users, setUsers] = useLocalStorage<User[]>("users", [])
  const navigate = useNavigate()

    const onCall = (params: GridRenderCellParams) => {
      if(!params.row.mobile) return
      window.location.href = `https://wa.me/55${params.row.mobile.replace(/[^\d]+/g,"" )}`
    }

    const onEdit = (params: GridRenderCellParams) => {  // Alterado de 'row' para 'params'
      if (!params.id) return;
      navigate(`/users/${params.id}`);
    };
    

    const onDelete = (params: GridRenderCellParams) => {  // Alterado de 'row' para 'params'
      if (!params.id) return;
    
      setUsers(users.filter((user) => user.id !== params.id));
    };
    

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