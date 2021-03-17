import styled from 'styled-components';
import {useState} from 'react'

const Widget = styled.div`
        padding: 24px;
        display: flex;
        justify-content: center;
        background: url('./images/bg-shorten-mobile.svg') no-repeat top right #3a3053;
        border-radius: 15px;
        button{
            width 100%;
            height: 55px;
            border-radius:10px;
            margin-top:15px;

        }
        margin-top: 88px;
        margin-bottom: 95px;
        @media (min-width:  376px){
            //padding: 0 24px;
            //background: url('./images/bg-shorten-desktop.svg') no-repeat #3a3053;
        }
`
const TextInput = styled.input`
        color: hsl(0, 0%, 75%);
        font-size: 18px;
        width: 100%;
        height: 64px;
        border:none;
        border-radius:10px;
        padding: 1rem;
        box-sizing: border-box;
            @media (min-width:  376px){
            width:770px;
            height: 64px;
            border:none;
            border-radius:10px;
            padding: 1rem;
            box-sizing: border-box;
            }

`
const WidgetForm = () => {

    const [url,setUrl] = useState('');

    const handleCall = (e) =>{
        e.preventDefault();
         fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
         .then(  res =>  res.json())
         .then(res => console.log(res.result.short_link))

    }
    return (
        <Widget>
            <form onSubmit={handleCall}>
            <TextInput 
                type="text" 
                placeholder="shorten a link here..."
                value={url}
                onChange={(e)=> setUrl(e.target.value)}></TextInput>
            <button>Shorten</button>
            </form>
        </Widget>
    )
}

export default WidgetForm