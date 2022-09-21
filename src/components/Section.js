import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section( { backgroundImg, title, description, leftBtnTxt, rightBtnTxt } ) {
  return (
    <Wrap bgImage = {backgroundImg}>
        <ItemText>
            <Fade bottom>
                <h1>{title}</h1>
                <p>{description}</p>
            </Fade>
            
        </ItemText>

        <Button>
            <Fade bottom>
                <ButtonGroup>

                    <LeftButton>
                    {leftBtnTxt}
                    </LeftButton>

                    { rightBtnTxt &&
                        <RightButton>
                            {rightBtnTxt}
                        </RightButton>
                    }

                </ButtonGroup>

                <DownArrow src="/images/down-arrow.svg" />
            </Fade>
        </Button>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`};

    


`

const ItemText = styled.div`
    padding-top: 15vh;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background: rgba(23, 26,32, 0.8);
    height: 40px;
    width: 256px;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    
    height: 40px;
    animation: animateDown infinite 1.5s;

`

const Button = styled.div`
`