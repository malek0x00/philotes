import React from 'react';
import axios from "axios";
import EventCard from './eventCard';


export default function TestAxios(props) {
    const [post, setPost] = React.useState(null);
  
    React.useEffect(() => {
      axios.get(props.url).then((response) => {
        setPost(response.data);
      });
    }, []);
  
    if (!post) return <h1>Check your internet connection</h1>;
    var rows = [];
    for (var i = 0; i < post.per_page; i++) {
          rows.push(<EventCard title={post.data[i].first_name} desc={post.data[i].last_name} img={post.data[i].avatar}/>);
    }

  return <div>{rows}</div>;
  {/**  return (
      for (var i = 0; i < numrows; i++) {
      <div>
        <EventCard title={post.data[0].first_name} desc={post.data[0].last_name} img={post.data[0].avatar}/>
      </div>
      }
    );**/}
  }