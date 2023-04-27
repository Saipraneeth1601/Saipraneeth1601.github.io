import "./index.css";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Navbar from "./components/Navbar";
import LoginOrg from "./components/LoginOrg";
import LoginClient from "./components/LoginClient";
////////////>
import Inprogress from "./scenesclient/inprogress/inprogress";
import Completed from "./scenesclient/completed/completed";
import History from "./scenesclient/history/history";
import Pending from "./scenesclient/pending/pending";
import Active from "./scenesclient/active/active";
import Form from "./scenesclient/form/Form";
import Dashboard from "./scenesclient/dashboard/dashboard";
import FAQ from "./scenesclient/faq/FAQ";
// org imports //
import Inprogressorg from "./scenesorg/inprogress/inprogress";
import Completedorg from "./scenesorg/completed/completed";
import Historyorg from "./scenesorg/history/history";
import Dashboardorg from "./scenesorg/dashboard/dashboard";
import FAQorg from "./scenesorg/faq/FAQ";

////...........>
//
import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
// import Inprogress from "./scenes/inprogress/inprogress";
// import Completed from "./scenes/completed/completed";
// import History from "./scenes/history/history";
import Clientdb from "./Clientdb";
import Orgdb from "./Orgdb";
import ClientLogin from "./components/ClientLogin";
import OrgLogin from "./components/OrgLogin";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/org" element={<OrgLogin />} />
        <Route path="/cli" element={<ClientLogin />} />
        <Route path="/clientdb" element={<Clientdb />} />
        <Route path="/orgdb" element={<Orgdb />} />
        {/* // client db  / */}
        {/* <Route path="/" element={<Form />} /> */}
        <Route path="/form" element={<Form />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inprogress" element={<Inprogress />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/history" element={<History />} />
        <Route path="/pending" element={<Pending />} />
        <Route path="/active" element={<Active />} />
        <Route path="/faq" element={<FAQ />} />
        {/* Org db */}

        <Route path="/dashboardorg" element={<Dashboardorg />} />
        <Route path="/inprogressorg" element={<Inprogressorg />} />
        <Route path="/completedorg" element={<Completedorg />} />
        <Route path="/historyorg" element={<Historyorg />} />
        <Route path="/faqorg" element={<FAQorg />} />

        {/*  */}
      </Routes>
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
