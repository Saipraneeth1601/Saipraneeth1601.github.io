//////
import { useState } from "react";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
//
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { tokens } from "../../theme";
import {
  mockDataInprogress,
  mockDataInprogressClient,
} from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Inprogress1 = () => {
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
      field: "associate",
      headerName: "Associate",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "lastupdated",
      headerName: "Last Updated",
      flex: 1,
    },
    {
      field: "modifiedby",
      headerName: "Modified By",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="In Progress" />
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
          rows={mockDataInprogressClient}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

//////

const Inprogress = () => {
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
            <Inprogress1 />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
export default Inprogress;
