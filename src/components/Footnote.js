import styled from "styled-components";

const Banner = styled.div`
 background: url('./images/bg-boost-desktop.svg') no-repeat #3a3053 ;
 width: 100%;
 height: 252px;
 color: #fff;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 h1{
     text-align: center;
 }
 button{
     padding:20px;
 }
`
const Footnote = () => {
    return (  
        <Banner>
            <h1>Boost your links today</h1>
            <br />
            <button>Get Started</button>
        </Banner>
    );
}
 
export default Footnote;