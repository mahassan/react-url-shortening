import styled from 'styled-components';

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
`

const widgetForm = () => {
    return (
        <Widget>
            <form>
            <TextInput type="text" ></TextInput>
            <button>Shorten</button>
            </form>
        </Widget>
    )
}

export default widgetForm