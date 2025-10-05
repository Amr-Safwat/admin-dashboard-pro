import {DataGrid} from '@mui/x-data-grid';
import {rows} from './data';
import {useTheme} from '@mui/material';
import {Box, Typography} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';

export default function Team() {
  const theme = useTheme();

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'age',
      headerName: 'Age',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'phone',
      headerName: 'Phone',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'access',
      headerName: 'Access',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      renderCell: ({row: {access}}) => {
        return (
          <Box display={'flex'} alignItems={'center'}
            sx={{
              color: 'white',
              bgcolor:
                access == 'Admin'
                  ? theme.palette.primary.dark
                  : access == 'Manager'
                  ? theme.palette.secondary.dark
                  : 'red',
              p: '5px',
              width: '99px',
              textAlign: 'center',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            {access == 'Admin' ? (
              <AdminPanelSettingsIcon fontSize="small" />
            ) : access == 'Manager' ? (
              <LockIcon fontSize="small" />
            ) : (
              <PersonIcon fontSize="small" />
            )}

            <Typography fontSize={'12px'} variant="body1">
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
      <Box sx={{height: 800, width: '100%'}}>
        <DataGrid
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
  );
}
