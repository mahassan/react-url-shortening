import styled from 'styled-components';
import {useState} from 'react'

const Widget = styled.div`
        width: 100%;
        background: purple;
        padding: 52px 0;
        display: flex;
        justify-content: center;
        button{
            width:188px;
            height: 64px;
            border-radius:10px;
            margin-left:24px;
        }
        background: url('./images/bg-shorten-desktop.svg') no-repeat #3a3053;
        margin: 0 auto;
`
const TextInput = styled.input`
        width:770px;
        height: 64px;
        border:none;
        border-radius:10px;
        font-size: 2rem;
        padding: 1rem;
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
                value={url}
                onChange={(e)=> setUrl(e.target.value)}></TextInput>
            <button>Shorten</button>
            </form>
        </Widget>
    )
}

export default WidgetForm