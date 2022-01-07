import {Text,Avatar,Grid, Paper, Col } from "@mantine/core";


function EventCard(props) {

    
    return (
    <div><Paper padding="md" shadow="md" radius="lg" style={{width:'200px',margin:'20px' }}>
    <Grid columns={12} align="center">
        <Col span={4}>
        <Avatar radius="md" src={props.img} alt="pic">
        {/*props.title.charAt(0)*/}
        </Avatar>
        </Col>
        <Col span={8}>
        <Text size="lg">{props.title}</Text>
        
        <Text size="sm" color="dimmed">{props.desc}</Text>
        </Col>

    </Grid>
    </Paper>
    </div>);
  }
  

  
  export default EventCard;