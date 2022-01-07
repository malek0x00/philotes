import './App.css';
import * as React from 'react';
import {Button,Image } from '@mantine/core';
import {useHistory} from 'react-router-dom';
import "@fontsource/rouge-script";
import background from "./bck2.png";
import TextLoop from "react-text-loop";
import waelpic from "./images/wael.jpeg";
import malekpic from "./images/malek.jpg";
import doniapic from "./images/donia.jpg";
import mahdipic from "./images/mahdi.jpeg";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function Home (props) {
    let history = useHistory();

    return (
        <div>
        <Parallax pages={2} style={{ top: '0', left: '0' }}>

        <ParallaxLayer offset={0} speed={2.5}>
        <div>
        <img src={background} alt="background pic" style={{position:'absolute',top:0,right:0,width:700}}></img>
        <a href="https://www.facebook.com/malek.bougadouha"><Image src={malekpic} width={170} radius={150} style={{position:'absolute',top:78,right:216}}/></a>
        <a href="https://www.facebook.com/WaelMorgan99"><Image src={waelpic} width={160} radius={300} style={{position:'absolute',top:226,right:358}}/></a>
        <a href="https://www.facebook.com/profile.php?id=100008216596226"><Image src={doniapic} width={110} radius={150} style={{position:'absolute',top:306,right:127}}/></a>
        <a href="https://www.facebook.com/profile.php?id=100003421077161"><Image src={mahdipic} width={126} radius={240} style={{position:'absolute',top:396,right:261}}/></a>
        </div>
        
           
        <h1 style={{marginLeft:'50px',fontFamily: "Rouge Script", fontSize:100,color:"#FE7B5E"}}>Philotes</h1>
        
        <h1 style={{marginLeft:'50px',marginTop:-20,fontFamily: 'Varela Round',fontSize:60,color:"#808080"}}><TextLoop interval={2500}><span>Connecting</span><span>Bonding</span></TextLoop> people<br/>from all across <br/>the campus</h1>
        
        <Button onClick={()=>{history.push("/signup")}} radius="xl" style={{marginLeft:'50px',fontFamily: 'Varela Round',fontSize:20,backgroundColor:'#FE7B5E',width:150,height:50 , color:"#FFFFFF", marginTop:30}}>SIGN UP</Button>
        <Button onClick={()=>{history.push("/login")}} radius="xl" style={{marginLeft:'50px',fontFamily: 'Varela Round',fontSize:20,backgroundColor:'#FE7B5E',width:150,height:50 , color:"#FFFFFF", marginTop:30}}>LOGIN</Button>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={2.5}>

        <h1 style={{textAlign: 'center',fontFamily: 'Varela Round',fontSize:30,color:"#808080"}}>About Us</h1>
        <p style={{fontSize:20}}>this is a paragraph that should be about eds eds eds</p>
        <div style={{width:'100%',height:150,position:'absolute',bottom:0,backgroundColor:"#1a1a1a"}}>
            <p style={{fontFamily: 'Varela Round',fontSize:15,marginLeft:10,color:'#FFFFFF'}}>More info: </p>
        </div>
         </ParallaxLayer>
         </Parallax>
        </div>
    );
}
export default Home;