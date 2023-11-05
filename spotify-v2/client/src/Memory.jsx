import React from 'react';
import data from './data/data.json';
import { MemoryInfoCard } from './styles/Dashboard.styles';

const Memory = ({ id }) => {
    return(
        <MemoryInfoCard>
            <p>{data[id].memory}</p>
        </MemoryInfoCard>
    )
}

export default Memory;