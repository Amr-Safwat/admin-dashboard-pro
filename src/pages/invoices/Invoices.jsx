import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {rows, columns} from './data';

export default function Invoices() {
  return (
    <>
      <Box sx={{height: 800, width: '100%'}}>
            <DataGrid
            checkboxSelection
              rows={rows}
              // @ts-ignore
              columns={columns}
            />
      </Box>
    </>
  );
}
