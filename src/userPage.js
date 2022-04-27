import './App.css';
import * as React from 'react';
import { useState, useEffect} from 'react';
import {Grid,Col,Button, Modal,Center,Loader} from '@mantine/core';
import "@fontsource/rouge-script";
import background from "./images/userpagebck.png";
import cards from "./images/cards.png"
import TinderCard from 'react-tinder-card';
import StylishCard from './stylishCard';
import added from './images/added.png';
import settings from './images/settings.png';
import axios from "axios";
function UserPage (props) {

    const [lastDirection, setLastDirection] = useState();
    const [swipedpp, setSwipedpp] = useState([]);
    const [opened, setOpened] = useState(false);
    const [characters, setCharacter] = useState();

      useEffect(() => {
        axios.get("https://reqres.in/api/users?page=2").then((response) => {
          setCharacter(response.data);
          
        });
      });


    const swiped = (direction, nameToDelete) => {
      setLastDirection(direction)
      
        
      
    }
    const outOfFrame = (name) => {
      setSwipedpp(swipedpp => [...swipedpp, name]);
       
      }

      if (!characters)
      return (
        <Center style={{ widt: "100%", height: "80vh" }}>
          <Loader color="dark" size="xl" variant="bars" />
        </Center>
      );

      var rows = [];
      characters.data.map((character) => {
        rows.push(
        <TinderCard onSwipe={(dir) => swiped(dir, character.first_name)} onCardLeftScreen={() => outOfFrame(character.first_name)}>  
        <div style={{width:'100%', position:'absolute',display:'flex',alignItems:'center',justifyContent: "center",alignContent:"center"}} >
        <StylishCard style={{}} name="person" surname="3eme Genie Iinformatique" img="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"></StylishCard>
        </div>
        </TinderCard>
        );
        return 0;
      });


    return(
        <div>
          <Modal opened={opened} onClose={() => setOpened(false)} title="people you've spwiped!">
          <center>{swipedpp.map(entry =><div>{entry}</div>)}</center> 
          </Modal>
             
            <img src={background} alt="background pic" style={{position:'absolute',top:0,right:0,width:'100%'}}></img>
            <div>
             
              {rows}

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