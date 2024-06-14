import React from 'react';
import styled from 'styled-components';
import {BeatLoader} from 'react-spinners';

function Spinner() {
    return (
        <>
            <Loading>
            <BeatLoader
                color="#EEEBDD"
                loading={true}
                margin={2}
                size={15}
                speedMultiplier={1}
            />
            </Loading>
            
        </>
    );
}

export default Spinner;

const Loading = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
`;