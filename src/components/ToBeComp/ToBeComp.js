import React from 'react';
import styled from "@emotion/styled";

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: blue;
`

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`;

export default function ToBeComp({ title }) {
    return (
        <Wrapper>
            <Title>{title}</Title>
        </Wrapper>
    )
}
