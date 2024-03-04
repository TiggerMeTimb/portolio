import {useState, useEffect} from 'react';

function Videos () {
  const [post, setPost] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');


  let url = 'https://jsonplaceholder.typicode.com/post?_limit=10';

  //starting with an API call
  //here I will make the call and pray
  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify ({
            title: 'Test',
            body: "This is a test",
            userid: Math.random().toString(32).slice(2)
          }),
        headers:{
            'Content-Type': 'application/json; charset=UTF-8'
        },
      })
      .then((response) => response.json())
      .then((data) => {
                  setPost(data, ...post);
                  setTitle("");
                  setBody("");
        })
      .catch((err) => {
          console.log(err.message);
        });
    }, []);
  
  return ( 

  <h1>Right now I am using this page to preform test calls to an API, I just want to get an uderstnding of how to write them before doing my own custome stuff</h1>) } 

export default Videos
