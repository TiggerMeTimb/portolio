import React, {useState} from 'react';
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.png";
import image4 from "../Images/image4.png";

function About () {
  //This function is going to be an about me page.
  //***NOTE*** Might change this in the future to be a pointer function, haven't decided yet
  
  //classic list destruction allowing me to use states.
  //Since I will be using this state to change my image(probably through user input) I will only need one variable states here
  //after all this time, this state is a counter that I am incrementing. Makes it easier for the list BS I am about to do
  const [userImage, setUserImage] = useState(0);
  //List, a nice way to store images that I want to change when the user clicks.
  let ilst = [image1, image2, image3, image4];
  let deslst = ["This is me", "Another Me", "Third Me", "Final Me"];

  /*
  function ImageChange(){
    console.log("I have been summoned");
    let length = tlst.length;
    if (userImage > length){
      setUserImage(0);
    }else{
      setUserImage(userImage+1);
    }
    console.log(tlst(userImage);
  }
  */

  //Updating the counter state to always be within the list length range.
  function updateImagePosition() {
    console.log(userImage);
    //going to be real chef, don't know why this works and not -1
    if((ilst.length - 2) < userImage){
      setUserImage(0);
    }else{
      setUserImage(userImage+1);
    }
  }
  
  //Once I have updated the counter, I grab the relevant image and description for you
  let callIm = ilst[userImage];
  let descrip = deslst[userImage];

  //let's just return our HTML
  return (
    <>
    <div class="about">
      <article>
        <p> Hello, I am Tadhg. I hope this webpage peaks your interest </p>
        <p> I have a Masters degree for Computer Science from UCC, where I graduate in 2022</p>
        <p> I am currently employeed in WaveIT as a Helpdesk Support Engineer, but I hope to move into a career of development</p>
        <p> From the bar appove (Note if I put it in the footer, please just change this line of code to reflect) you can see my Github, where I will post this project, as well as some other projects I am working on. This is the main focus right now however.</p>
        <h2>Here I am, for those who are interested why not try clicking on the image?</h2>
        <footer>{descrip}</footer>
        <img src={callIm} class="my_image" alt="Here I am" onClick={updateImagePosition} />
      </article>
    </div>
    </>
  )
}

export default About;
