import React from "react";
import Layout from "./component/Layouts/Index";
import Home from "./component/Home/Index";
import Wmad from "./component/Home/Wmad";
import Dsc from "./component/Home/Dsc";

export default function App() {
  return (
    <Layout>
      <Home />
      <Wmad />
      <Dsc />
    </Layout>
  );
}
