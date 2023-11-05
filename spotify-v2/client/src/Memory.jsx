import React from 'react';
import data from './data/data.json';
import { MemoryInfoCard, MemoryText } from './styles/Dashboard.styles';

const Memory = ({ id }) => {
    return(
        <MemoryInfoCard>
            <MemoryText>{data[id].memory}</MemoryText>
        </MemoryInfoCard>
    )
}

export default Memory;