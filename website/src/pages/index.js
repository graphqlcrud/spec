import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import { Hero } from "../components/Hero";
import { Introduction } from "../components/Introduction";
import { Features } from "../components/Features";

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title={siteConfig.title} description="Offix <head />">
      <Hero siteConfig={siteConfig} />
      <Introduction />
      <Features />
    </Layout>
  );
}
