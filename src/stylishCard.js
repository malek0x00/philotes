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
        <Card onMouseEnter={hoover} onMouseLeave={cancelhover} shadow="xl" radius='lg' style={{transform: hover,transition: 'transform 150ms ease', backgroundImage: 'url("https://www.jordanrobins.com.au/wp-content/uploads/2020/10/Morning-Ocean-Motions-_-Vertical.jpg")',backgroundRepeat: 'no-repeat', backgroundSize:'500px',width:'300px', height:'500px'}}>
            <h1 style={{ position: 'absolute',  top:350, color:"#FFFFFF"}}>eds eds eds</h1>
            <Text ref={ref01} style={{ position: 'absolute',  top:420, color:"#e1e1e1"}}>{props.title}</Text>
        </Card>
    </div>
    )
}



export default StylishCard;