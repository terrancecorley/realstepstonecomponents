import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../button';
import closeBtn from '../../../images/close-btn.svg';

function Alert(props) {
    return (
        <>
            <Overlay className={props.overlayClass}></Overlay>
            <AlertWrapper>
                <AlertHeader
                    className={props.alertHeaderClass}
                >
                    <AlertTitle>{props.title || 'This is an example title'}</AlertTitle>
                    <CloseBtn 
                        src={closeBtn} 
                        alt="Close alert button" 
                        onClick={props.onClick} 
                    />
                </AlertHeader>
                <AlertBody>
                    {props.children || 'This is an example alert sentence.'}
                    <AlertButtonWrapper>
                        <OkayButton onClick={props.onClick}>Okay</OkayButton>
                    </AlertButtonWrapper>
                </AlertBody>
            </AlertWrapper>
        </>
    );
}

export default Alert;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const Overlay = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
`;

const AlertWrapper = styled.div`
    background-color: white;
    border: 1px solid skyblue;
    border-radius: 0.3rem;
    position: fixed;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -25%);
    z-index: 1000;
    animation: ${fadeIn} 0.25s linear forwards;
`;

const AlertHeader = styled.div`
    background-color: lightskyblue;
    display: flex;
    justify-content: space-between;
    padding: 1em;
    padding-top: 0;
    margin-bottom: 2em;
`;

const AlertTitle = styled.h2`
    font-family: 'Calibri', sans-serif;
`;

const CloseBtn = styled.img`
    margin-left: 2em;
`;

const AlertBody = styled.div`
    padding: 1em;
`;

const AlertButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 1em;
    margin-top: 1em;
`;

const OkayButton = styled(Button)`
`;