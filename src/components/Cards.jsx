import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cards() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => setData(response.data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '10px',
            padding: '10px'
        }}>
            {data.map((task, index) => (
                <div key={index} style={{
                    backgroundColor: 'lightgray',
                    border: '1px solid darkgrey',
                    padding: '10px',
                    textAlign: 'center',
                    width: '185px'
                }}>
                    <img src={task.image} alt={task.title} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                    <div>{task.title}</div>
                    <div>{task.category}</div>
                    <div>${task.price}</div>
                </div>
            ))}
        </div>
    );
}

export default Cards;