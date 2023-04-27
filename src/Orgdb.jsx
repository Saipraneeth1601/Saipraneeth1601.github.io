import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenesorg/global/Topbar";
import Sidebar from "./scenesorg/global/Sidebar";

//
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
//
import Dashboardorg from "./scenesorg/dashboard/dashboard";
import Inprogressorg from "./scenesorg/inprogress/inprogress";
import Completedorg from "./scenesorg/completed/completed";
import Historyorg from "./scenesorg/history/history";
import FAQorg from "./scenesorg/faq/FAQ";
// import Calendar from "./scenes/calendar/calendar";

function Orgdb() {
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
              <Route path="/dashboardorg" element={<Dashboardorg />} />
              <Route path="/inprogressorg" element={<Inprogressorg />} />
              <Route path="/completedorg" element={<Completedorg />} />
              <Route path="/historyorg" element={<Historyorg />} />
              <Route path="/faqorg" element={<FAQorg />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Orgdb;
