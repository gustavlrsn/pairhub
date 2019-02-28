import { Component } from "react";
import Router from "next/router";
import Head from "next/head";

import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";
import { Grid } from "../components/styled";

const Index = ({ router, openModal, currentUser }) => {
  React.useEffect(() => {
    if (router.query.welcome === "") {
      openModal("welcome");
      Router.replace("/");
    }
  }, [router.query]);

  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@pairhub" />
        <meta property="twitter:title" content="PairHub" />
        <meta
          property="twitter:description"
          content="Find remote pair programming partners"
        />
        <meta
          property="twitter:image"
          content="https://pairhub.io/static/pairhub-logo-white-180.png"
        />
      </Head>
      <Grid>
        <Posts currentUser={currentUser} searchPhrase={router.query.s} />
        <Sidebar />
      </Grid>
    </>
  );
};

export default Index;
