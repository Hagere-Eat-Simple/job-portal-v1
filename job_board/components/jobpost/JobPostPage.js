"use client"
import styled from "styled-components";

const Wrapper = styled.section`
:root {
  --btn-color:  #007bff;
    --errorBtn-color: #d9534f;
    --activeBtn-color: #4caf50;
    --streamsbg-color: #F7FDF6;
    --logoutBtn-color: #00337e;
    --reportBtn-color: #E53E4B;
    --footerLogoBg1-color: #D3F0D6;
    --footerLogoBg-color: #a9e7b3;
    --h3-color: #808080;
    ---color: #8b193f;
    --menu-color: #221F20;
    --footer-color: #50237D;
    --lavender-color: lavender;
}
.PostJobsSec{
  background: #FFF;
  position: relative;

//Style for Baisc Info
.JobPost-default-style{
  width: 100%;
  height: 100vh;
  top:100%;
  flex-shrink: 1;
  background: #FFF;
  position: absolute;
  
  }
  .JobPost-clicked-style{
  width: 75%;
  height: 980%;
  top:100%;
  flex-shrink: 1;
  background: #FFF;
  position: absolute;
  }

/*  
.JobPost{
width: 72%;
height: 900%;
top:130%;
left:13px;
flex-shrink: 0;
background: #B5ECBB;
position: absolute;

} */
.Boundary{
    padding: 5%;
    height:86%;
    top:14%;
    right:2%;
    left:3%;
    position:absolute;
    border: 0.3px solid #B5ECBB;
 background: #FFF;

  }
.PostJobText{
width: 30%;
height: 20%;
top:2%;
left:0.8%;
position: absolute;
flex-shrink: 0; 
color: 'black'; 
font-Size: 130%; 
font-Family: 'Inter'; 
font-Style: 'italic'; 
font-Weight: 400; 
white-space: nowrap;
background: '#B5ECBB'
}

.GridLayout{
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Creates 3 equal-width columns */
  width:90%;
  height:60%;
  top: 10%;
  left:2%;
  position: absolute;  
}
.label-Input-Text{
  width:75%;
  height: 12%;
  left: 2.5%;
  padding: 2%;
  color: black;
  font-size: 115%;
  font-family: 'Inter';
  font-style: italic;
  font-weight: 300;
  word-wrap: break-word;

}

.jobDescription{
width:90%;
height:32%;
bottom:10%;
top:58%;
left:3%;
position: absolute;
border: 0.4px solid #00337E;
background: #FFF;
color: #726E6E;
font-family: Inter;
font-size: 120%;
font-style: italic;
font-weight: 300;
line-height: normal;
}
.jobDesc{
width:35%;
height:15%;
bottom:32%;
left:5%;
position:absolute;
flex-shrink: 0;
color: #000;
font-family: Inter;
font-size: 120%;
font-style: italic;
font-weight: 100;
line-height: normal;

}
input, textarea {
  border: 2px solid var(--footerLogoBg-color);

}

.postButton{
//padding: 20px;
/* width: 13%;
height: 6%; */
bottom:1%;
right:2%;
position: absolute;
flex-shrink: 0;
color: #FFF;
text-align: center;
font-family: Inter;
font-size: 100%;
font-style: normal;
font-weight: 500;
line-height: normal;
border-radius: 50px;
border: 0.2px solid #FFF;
background: var(--btn-color);
}
}
`
export default Wrapper