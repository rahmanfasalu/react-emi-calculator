import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import BuildRoute from "./shared/BuildRoute/BuildRoute";
import { appRoutes } from "./routes";
import { Header, Footer } from "./layout";
function App() {
  return (
    <>
      <Router>
        <Header />
        <BuildRoute routes={appRoutes} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
