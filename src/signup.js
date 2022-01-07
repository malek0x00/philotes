import * as React from 'react';
import {useState} from 'react';
import {Text,Grid,Col,Button, PasswordInput,TextInput,Center,Group } from '@mantine/core';
import { useHistory} from 'react-router-dom';
import "@fontsource/rouge-script";
import background from "./loginbck.png";

 
function Signup (props) {

    let history = useHistory();
    const [mColor] = useState("#fe957e");
    return (
        
        <div style={{ display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
        <img src={background} alt="background pic" style={{position:'absolute',top:0,right:0,width:'100%'}}></img>
        
        <Group style={{  width: 400, height: 400 ,backgroundColor: mColor, marginTop:120, borderRadius:20}} position="center" direction="column" spacing="xl">
         
         <Center style={{border: '2px solid',borderColor: mColor, marginTop:'-100px', backgroundColor:'#FFFFFF',top:1,left:'43.5%',height:150,width:150, borderRadius:100}}>
        <h1 style={{fontFamily: "Rouge Script", fontSize:60,color:mColor}}>Philotes</h1>
        </Center>
        
        
         <TextInput className="inputstyle"
          placeholder="ID..."
          radius="xl"
          size="md"
          style={{width:300}}
          
          />
          <PasswordInput
          placeholder="Password..."
          radius="xl"
          size="md"
          style={{width:300, marginTop:35}}
          />
          <Grid columns={6} style={{width:300}}>
            <Col span={6}>
          <Button onClick={()=>{history.push("/userpage");}} variant="outline" radius="xl" style={{width:'100%' , borderColor: 'white', color:'white', marginTop:10}}>
          SIGN UP
          </Button>
          </Col>
          </Grid>
          <Text style={{color:'white', fontSize:12}} component="a" href="#">i forgot my password</Text>
          
          
          
          </Group>
        
        </div>
    );


}
 
export default Signup;





