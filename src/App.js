import React from "react";

import './fonts/inter-medium-webfont.woff2';
import './fonts/inter-medium-webfont.woff';
import './fonts/inter-regular-webfont.woff2';
import './fonts/inter-regular-webfont.woff';
import "./stylesheets/bootstrap-4.3.1/dist/css/bootstrap.css";
import "./stylesheets/css/commons.css";
import Layout from "./js/Layouts/Layout";

function App() {
  return (
    <div className="p-flex-overflow">
      <Layout />
    </div>
  );
}

export default App;
