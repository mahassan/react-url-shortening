import Header from "./components/header"
import Hero from "./components/hero"
import WidgetForm from "./components/widget"
import Accordion from "./components/accordian"
import Footnote from "./components/Footnote"
import Footer from "./components/Footer"
import styled from "styled-components"

const AppContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700;900&display=swap');
    font-family: 'Roboto', sans-serif;
    margin:auto 0;
    h1{
      margin:0;
    }
    li{
      list-style:none;
    }
    a{
      text-decoration:none
    }
    a.active,
    button{
        background: #23cad0; 
        border-radius: 18px;
        padding: 10px;
        color: #fff;
        border:none;
    }
    
`
function App() {
  return (
    <AppContainer>
          <Header />
          <Hero />
          <WidgetForm />
          <Accordion />
          <Footnote />
          <Footer />
    </AppContainer>
  );
}

export default App;
