import React, {useState} from 'react';
import {Card,Text} from '@mantine/core'; 
function StylishCard(props) {



    const [hover, setHover] = useState('rotate(0deg)');
    const ref01 = React.createRef();
    const hoover = () => {

        //setHover('rotate(20deg)');
        

    }

    const cancelhover =()=>{

        //setHover('rotate(0deg)');
        
    }

    return (
    <div style={props.style}>
        <Card onMouseEnter={hoover} onMouseLeave={cancelhover} shadow="xl" radius='lg' style={{transform: hover,transition: 'transform 150ms ease', backgroundImage: `url(${props.img})`,backgroundRepeat: 'no-repeat', backgroundSize:'500px',width:'300px', height:'500px'}}>
            <h1 style={{ position: 'absolute',  top:350, color:"#FFFFFF"}}>{props.name}</h1>
            <Text ref={ref01} style={{ position: 'absolute',  top:420, color:"#e1e1e1"}}>{props.surname}</Text>
        </Card>
    </div>
    )
}



export default StylishCard;