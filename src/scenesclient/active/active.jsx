import { useState } from "react";

import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
//
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { DataGrid } from "@material-ui/data-grid";

import { tokens } from "../../theme";
import { mockDataActive, mockDataInprogressClient } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
// import {
//   GridToolbarContainer,
//   GridToolbarColumnsButton,
//   GridToolbarFilterButton,
//   GridToolbarDensitySelector,
//   GridToolbarExport,
// } from "@material-ui/data-grid";

const Active1 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const isDarkMode = theme.palette.mode === "dark";

  const columns = [
    { field: "contractId", headerName: "Contract ID" },
    {
      field: "type",
      headerName: "Type",
      flex: 1,
      cellClassName: "type-column--cell",
    },
    {
      field: "counterparty",
      headerName: "Counter Party",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "associate",
      headerName: "Associate",
      flex: 1,
    },
    {
      field: "dot",
      headerName: "DOT",
      flex: 1,
    },

    {
      field: "view",
      headerName: "View",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Active" />
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
          rows={mockDataActive}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};
const Active = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Active1 />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Active;
