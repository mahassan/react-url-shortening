import Header from "./components/header"
import Hero from "./components/hero"
import WidgetForm from "./components/widget"
import Accordion from "./components/accordian"
import Footnote from "./components/Footnote"
import Footer from "./components/Footer"
import styled from "styled-components"

const AppContainer = styled.div`
    padding: 24px;
    margin:auto 0;
    h1,ul{
      margin:0;
      padding: 0;
    }
    a.active,
    button{
        background: #23cad0; 
        border-radius: 18px;
        padding: 10px;
        color: #fff;
        border:none;
        font-weight:700;
        font-size:18px;
    }
    @media(min-width: 376px){ //desktop
      padding: 0;
  }
    
`
function App() {
  return (
    <div>
      <AppContainer>
            <Header />
            <Hero />
            <WidgetForm />
      </AppContainer>
            <Accordion />
            <Footnote />
            <Footer />
    </div>
  );
}

export default App;
