import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme.js";
import Sidebar from "./Pages/Navigation/Sidebar.jsx";
import Topbar from "./Pages/Navigation/Topbar.jsx";
import Dashboard from "./Pages/Dashboard";
import Team from "./Pages/Team";
import Contacts from "./Pages/Contacts";
import Invoices from "./Pages/Invoices";
import Form from "./Pages/Form";
import FAQ from "./Pages/FAQ";
import Bar from "./Pages/Bar";
import Pie from "./Pages/Pie";
import Line from "./Pages/Line";
import Geography from "./Pages/Geo";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar onCollapse={setIsSidebarCollapsed} />
          <main
            className="content"
            style={{
              marginLeft: isSidebarCollapsed ? "60px" : "250px",
              width: isSidebarCollapsed ? "100%" : "calc(100% - 230px)",
              transition: "all 0.2s ease-in-out",
            }}
          >
            <Topbar />
            <Routes basename="/DashBoard">
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
