import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { User } from '../pages/Users/types/User';

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


export default function DataTable() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
