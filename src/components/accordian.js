import styled from 'styled-components';

const AccordionStyle = styled.div`
   background: #f0f1f6;
   margin-top: -203px;
   padding-top: 179px;
   padding-bottom:118px;
   position: relative;
    z-index: -1;
    width: 100%;
   h1,p.hero{
       display: flex;
       justify-content: center;
       text-align: center;
   }
   h1{
       padding-top:134px;
       color: #302d36;
   }
   p{
    color:#a5a5ad;
    padding-bottom: 109px;
}
    ul{
        width: 100%;
        background: #fff;
    }

`
const Box = styled.div`
@media(min-width: 376px){ //desktop
    display: flex;
    position: relative;
    .line{
        width:90%;
        height: 8px;
        background:#2cd0d1;
        position: absolute;
        margin-top:150px;
    }
}
`
const Card = styled.div`
    width: 350px;
    height: 270px;
    margin-right:30px;
    background: #fff;
    border-radius:5px;
    poisition: absolute;
    padding: 33px;
    z-index: 1;
    &:nth-child(2){
        margin-top:46px;
        .stamp{
            top:0px;
            background: url('./images/icon-detailed-records.svg') no-repeat #3a3053 center center;
        }
    }
    &:nth-child(3){
        margin-top: 92px;
        .stamp{
            top: 40px;
            background: url('./images/icon-fully-customizable.svg') no-repeat #3a3053 center center;
        }
    }
    .stamp{
        width:96px;
        height: 96px;
        position: absolute;
        top: -50px;
        border-radius: 50%;
        background: url('./images/icon-brand-recognition.svg') no-repeat #3a3053 center center;
    }
`

const Accordion = () => {
    return ( 
        <AccordionStyle>
            <h1>Advance Statistics</h1>
            <p className="hero">Track how your link are performing across the web with 
                <br />
                our advanced statistic dashboard.
            </p>

        <Box>
            <Card>
                <div className="stamp"></div>
                    <h3>Brand Recognition</h3>
                    <p>Lorem ipsum</p>
            </Card>
            <Card>
                <div className="stamp"></div>
                    <h3>Detailed Record</h3>
                    <p>Lorem ipsum</p>
            </Card>
            <Card>
                <div className="stamp"></div>
                    <h3>Fully Customizable</h3>
                    <p>Lorem ipsum</p>
            </Card>
            <div className="line"></div>
        </Box>
        
        </AccordionStyle>
     );
}
 
export default Accordion;