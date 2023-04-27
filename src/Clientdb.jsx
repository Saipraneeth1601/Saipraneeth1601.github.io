import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenesclient/global/Topbar";
import Sidebar from "./scenesclient/global/Sidebar";
import Dashboard from "./scenesclient/dashboard/dashboard";
import Form from "./scenesclient/form/Form";
import FAQ from "./scenesclient/faq/FAQ";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Inprogress from "./scenesclient/inprogress/inprogress";
import Completed from "./scenesclient/completed/completed";
import History from "./scenesclient/history/history";
import Pending from "./scenesclient/pending/pending";
import Active from "./scenesclient/active/active";
// import Calendar from "./scenes/calendar/calendar";

function Clientdb() {
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
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/form" element={<Form />} />
              <Route path="/inprogress" element={<Inprogress />} />
              <Route path="/completed" element={<Completed />} />
              <Route path="/history" element={<History />} />
              <Route path="/pending" element={<Pending />} />
              <Route path="/active" element={<Active />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Clientdb;
