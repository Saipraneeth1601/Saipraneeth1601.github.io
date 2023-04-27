import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { DataGrid } from "@material-ui/data-grid";

import { tokens } from "../../theme";
import { mockDataRequests } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
// import {
//   GridToolbarContainer,
//   GridToolbarColumnsButton,
//   GridToolbarFilterButton,
//   GridToolbarDensitySelector,
//   GridToolbarExport,
// } from "@material-ui/data-grid";

const Requests = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const isDarkMode = theme.palette.mode === "dark";

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "type",
      headerName: "Type",
      flex: 1,
      cellClassName: "type-column--cell",
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
    },
    {
      field: "client",
      headerName: "Client",
      flex: 1,
    },
    {
      field: "decision",
      headerName: "Decision",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="New Requests" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataRequests}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Requests;
