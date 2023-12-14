import { styled } from "styled-components";

const Wrapper = styled.section`
.JobPostPage{
    background: #FFF;
    position: relative;
  }
  
  
  //Style for Baisc Info 
  .JobPost-default-style{
  width: 1525px;
  height: 650px;
  top:50px;
  flex-shrink: 1;
background: #FFF;
  position: absolute;
  
  }
  .JobPost-clicked-style{
    width: 1150px;
  height: 650px;
  top:50px;
  flex-shrink: 1;
  background: #FFF;
  position: absolute;
  }
  .Boundary{
    padding: 5px;
    height:86%;
    top:8%;
    right:2%;
    left:3%;
    position:absolute;
    border: 0.3px solid #B5ECBB;
background: #FFF;

  }
  .PostJobText{
      top:2%;
      width: 40%;
      left:30%;
      position: absolute;
      white-space:nowrap;
      flex-shrink: 0; 
      color: #000;
      font-family: Inter;
      font-size: 170%;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      }
.board{
    width: 85%;
    height:80%;
    top:8%;
    left:10%;
    position:absolute;
    /* border: 0.3px solid #B5ECBB; */
    filter: drop-shadow(-2px 2px 2px rgba(0, 0, 0, 0.25));
    background-color:#C2F2C7;
}
.JTitle{
  color: #000;
font-family: Inter;
font-size: 155%;
font-style: italic;
font-weight: 400;
line-height: normal;
}
.info{
  padding-left:3%;
}
.JDesc{
  bottom:38%;
  position:absolute;
    color: #000;
font-family: Inter;
font-size: 180%;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.jobDescription{
    width:100%;
height:35%;
bottom:0;
position: absolute;
/* border: 0.4px solid #00337E; */
background: #C2F2C7;
color: #726E6E;
font-family: Inter;
font-size: 120%;
font-style: italic;
font-weight: 300;
line-height: normal;
}
.apply{
  bottom:5%;
  right:4%;
  position:absolute;
  color: #000;
  border-radius: 50px;
border: 0.2px solid #FFF;
// background: #B5ECBB;
text-align: center;
font-family: Inter;
font-size: 120%;
font-style: normal;
font-weight: 500;
line-height: normal;
background: #B5ECBB;
}
@media screen and (max-width: 628px) {
    .Boundary{
        width: 300px;
        height: 500px;
        position: absolute;
    } 
   .jobDescription{
    height:15%;
   }
   .JDesc{
    bottom:20%;
    position:absolute;
   }
   .JobPost-default-style{
    width:600px; 
  }
}
@media screen and (max-width: 1024px){
  .JobPost-default-style{
    width:940px; 
}
.JobPost-clicked-style{
  width:500px; 
}

}
@media screen and (max-width: 1500px){
  .JobPost-default-style{
    width:1500px; 
}
.JobPost-clicked-style{
  width:1000px; 
}
}
@media screen and (max-width:1300px){
  .JobPost-default-style{
    width:700px; 
}
.JobPost-clicked-style{
  width:500px; 
}
}
`
export default Wrapper