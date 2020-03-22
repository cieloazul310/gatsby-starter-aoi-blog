import * as React from 'react';
import Layout from 'gatsby-theme-aoi/src/layouts/JumbotronLayout';
import Jumbotron from '../components/Jumbotron';
import ArchiveList from '../components/ArchiveList';

function ArchivePage() {
  return (
    <Layout title="Archive" maxWidth="md" jumbotron={
      <Jumbotron title="Archive" />
    }>
      <ArchiveList />
    </Layout>
  );
}

export default ArchivePage;
