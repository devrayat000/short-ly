import { Container } from "@material-ui/core";

import "simplebar/src/simplebar.css";
import NavBar from "./components/NavBar.component";
import Shorten from "./components/Shorten.component";
import LinkList from "./components/LinkList.component";
import Footer from "./components/Footer.component";

const App = () => {
  return (
    <article aria-label="Main portion of the app">
      <NavBar />
      <Container className="container" maxWidth="md">
        <Shorten />
        <LinkList />
      </Container>
      <Footer />
    </article>
  );
};

export default App;
