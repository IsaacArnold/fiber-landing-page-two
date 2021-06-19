import React from "react";
import { Helmet } from "react-helmet";
import Diversify from "../components/Diversify";
import Layout from "../components/Layout";
import MainHeader from "../components/MainHeader";
import WhyFiber from "../components/WhyFiber";
import Portfolios from "../components/Portfolios";

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" lang="en" />
        <title>Build Your Dream Portfolio | Fiber</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <MainHeader />
      <WhyFiber />
      <Diversify />
      <Portfolios />
    </Layout>
  );
}
