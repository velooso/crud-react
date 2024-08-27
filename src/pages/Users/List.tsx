import DataTable from "../../components/DataTable";
import { IconButton, Stack } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { GridRenderCellParams, GridColDef } from "@mui/x-data-grid";
import { User } from "./types/User";

export default function List(){
    const onCall = (params: GridRenderCellParams) => {


    }

    const onEdit = (params: GridRenderCellParams) => {


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
    width: 150,
    renderCell: (params) => (
      <Stack direction= "row" spacing={2}>
        <IconButton color="success" size='small' onClick={() => onCall(params)}>
          <WhatsAppIcon fontSize= 'inherit'/>
        </IconButton>

        <IconButton color="info" size='small' onClick={() => onEdit(params)}>
          <EditIcon fontSize= 'inherit'/>
        </IconButton>

        <IconButton color="error" size='small' onClick={() => onDelete(params)}>
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


    return <DataTable columns={columns} rows={users} />
}