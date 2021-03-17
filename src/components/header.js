import styled from 'styled-components';

const AppHeader = styled.div`
    display: none;
    @media(min-width: 376px){ //desktop
    background: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 54px;

        .links{
            display: inherit;
            align-items: center;
            li{
                list-style:none;
                padding: 0 36px 0 0;
                a{
                    color: #9b9aa0;
                    text-decoration: none;
                }
            }
        }
    }
}
`
const Header = () =>{
    return(
        <AppHeader>
            <div>
               <img src="./images/logo.svg"  alt="logo" />
            </div>
            <div className="desktop">                
                <ul className="links">
                    <li><a href="/">Feature</a></li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">Resource</a></li>
                </ul>
                <ul className="links">
                    <li><a href="/">Login</a></li>
                    <li><a className="active" href="/">Signup</a></li>
                </ul>
            </div>
        </AppHeader>
    )
}
export default Header