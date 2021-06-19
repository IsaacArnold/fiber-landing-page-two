import React from "react";
import Diversify from "../components/Diversify";
import Layout from "../components/Layout";
import MainHeader from "../components/MainHeader";
import WhyFiber from "../components/WhyFiber";
import Portfolios from "../components/Portfolios";

export default function Home() {
  return (
    <Layout>
      <MainHeader />
      <WhyFiber />
      <Diversify />
      <Portfolios />
    </Layout>
  );
}
