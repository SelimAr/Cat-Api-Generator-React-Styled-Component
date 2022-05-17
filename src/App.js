import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import AutorenewIcon from '@mui/icons-material/Autorenew';
import './App.css';

function App() {

    const color = {
        color: "white"
    }

    useEffect( () => {
        document.title = ('Cat generator')
    },[])

    const [cat, setCat] = useState("https://cdn2.thecatapi.com/images/5o2.jpg")

    const loadCat = () => {
        fetch("https://api.thecatapi.com/v1/images/search")
        .then((res)=>res.json())
        .then((cats )=>{
            const catUrl = cats[0].url;

            setCat(catUrl);
        })
    }

    return (
        <>
            <Container>
                <Loader src={cat}/>
                <ReloadButton>
                    <AnimBtn>
                        <AutorenewIcon 
                            style={color}
                            fontSize="large"
                            onClick={loadCat}/>
                    </AnimBtn>
                </ReloadButton>
            </Container>
        </>
    );
}

export default App;

const Container = styled.div`
    display: flex;
    justify-content: center;
    transform: translate(0%,65%);
`
const Loader = styled.img`
    width: 30em;
    height: 20em;
    object-fit: contain;
`
const ReloadButton = styled.button`
    background-color: #333;
    cursor: pointer;
    border: none;
    height: 4em;
    margin: 10em 0 0 2em;
`

const AnimBtn = styled.div` 
    ${ReloadButton}:hover & {
        transform: rotate(360deg);
        transition: 0.5s;
  }
    display: flex;
`