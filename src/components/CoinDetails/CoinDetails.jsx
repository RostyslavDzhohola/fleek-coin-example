import React from 'react'
import styled from 'styled-components';
import CoinData from '../CoinData/CoinData';
import CoinTweets from '../CoinTweets/CoinTweets';


const Div = styled.div`
    display: flex;  
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 97%;
    height: 100%;
    border: 1px solid black;
    margin: 0 auto;
    color: black;
`
const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
`
const DivDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%; 
    border: 1px solid black;
    margin: 0 auto;
    color: black;

`

export default function CoinDetails(props) {
    // debugger;
    const handleBackClick = (event) => {
        event.preventDefault();
        props.handleBack(); // click back button to go back to CoinList
    }
    // destructring worked, I just didn't set the state before moving on and thas's why I couldn't use replace() function on a string.
    console.log(" Coin Twitter request is ",props.coinTwitter);
    const description = props.coinDescription;
    const descriptionFormatted = description.replace(/<a.*?>/g, '').replace(/<\/a>/g, ' ');

    return (
        <>
            <button type="button" onClick={handleBackClick}>To Coinlist</button>
            <Div>
                <DivRow>
                    <CoinData />
                    <CoinTweets coinTwitter={props.coinTwitter}/>
                </DivRow>
                <DivDescription>{descriptionFormatted}</DivDescription>
            </Div>
        </>
    )
}
