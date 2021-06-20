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
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <meta charSet="utf-8" />
        <title>Build Your Dream Portfolio | Fiber</title>
        <meta
          name="description"
          content="Create your portfolio in minutes with Fiber's premade templates."
        />
        <link
          rel="canonical"
          href="https://pensive-dijkstra-b20c0b.netlify.app/"
        />
      </Helmet>
      <MainHeader />
      <WhyFiber />
      <Diversify />
      <Portfolios />
    </Layout>
  );
}
