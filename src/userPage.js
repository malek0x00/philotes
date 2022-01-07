import './App.css';
import * as React from 'react';
import { useState} from 'react';
import {Grid,Col,Button, Modal} from '@mantine/core';
import "@fontsource/rouge-script";
import background from "./images/userpagebck.png";
import cards from "./images/cards.png"
import TinderCard from 'react-tinder-card';
import StylishCard from './stylishCard';
import added from './images/added.png';
import settings from './images/settings.png';
function UserPage (props) {

    const characters = [
        {
          name: 'Richard Hendricks',
          url: './img/richard.jpg'
        },
        {
          name: 'Erlich Bachman',
          url: './img/erlich.jpg'
        },
        {
          name: 'Monica Hall',
          url: './img/monica.jpg'
        },
        {
          name: 'Jared Dunn',
          url: './img/jared.jpg'
        },
        {
          name: 'Dinesh Chugtai',
          url: './img/dinesh.jpg'
        }
      ]


    const [lastDirection, setLastDirection] = useState();
    const [swipedpp, setSwipedpp] = useState([]);
    const [opened, setOpened] = useState(false);




    const swiped = (direction, nameToDelete) => {
      setLastDirection(direction)
      
        
      
    }
    const outOfFrame = (name) => {
      setSwipedpp(swipedpp => [...swipedpp, name]);
       
      }


    return(
        <div>
          <Modal opened={opened} onClose={() => setOpened(false)} title="people you've spwiped!">
          <center>{swipedpp.map(entry =><div>{entry}</div>)}</center> 
          </Modal>
             
            <img src={background} alt="background pic" style={{position:'absolute',top:0,right:0,width:'100%'}}></img>
            <div>
            {characters.map((character) =>
            <TinderCard onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                <div style={{width:'100%', position:'absolute',display:'flex',alignItems:'center',justifyContent: "center",alignContent:"center"}} >
                <StylishCard style={{}} title={character.name}></StylishCard>
                </div>
              
            </TinderCard>
            )}
            </div>
           
            <div>
                        
                <Grid style={{width:'100.5%',height:75,position:'absolute',bottom:0,backgroundColor:"#fe957e"}} columns={12}>
                
                <Col style={{display:'flex', alignItems:'center',alignContent:'center',justifyContent:'center', height:'100%'}} span={4}>
                
                    <Button onClick={() => setOpened(true)} style={{backgroundImage:'linear-gradient(to top,#fe957e,#ffbdaf)', width:100,height:100,borderRadius:50,marginTop:-80,border: '4px solid',borderColor: '#FFFFFF'}}><img style={{width:50}} src={added} alt="x"></img></Button>
            
                </Col>
                <Col style={{display:'flex', alignItems:'center',alignContent:'center',justifyContent:'center', height:'100%'}} span={4}>
                
                <Button style={{backgroundImage:'linear-gradient(to top,#fe957e,#ffbdaf)',width:120,height:120,borderRadius:80,marginTop:-100,border: '4px solid',borderColor: '#FFFFFF'}}><img style={{width:70,height:70}} src={cards} alt="x"></img></Button>
            
                </Col>
                <Col style={{display:'flex', alignItems:'center',alignContent:'center',justifyContent:'center', height:'100%'}} span={4}>
                
                <Button style={{backgroundImage:'linear-gradient(to top,#fe957e,#ffbdaf)',width:100,height:100,borderRadius:50,marginTop:-80,border: '4px solid',borderColor: '#FFFFFF'}}><img style={{width:50,height:50}} src={settings} alt="x"></img></Button>
            
                </Col>
            </Grid>
           


            </div>
        </div>

    );

}
export default UserPage;