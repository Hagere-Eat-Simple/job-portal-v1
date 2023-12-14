import styled from "styled-components";

const Shade = styled.section`

//Nav Bar styles
.NavBarFilter {
    /* position: fixed; Make the navbar fixed */
  top: 0; /* Attach it to the top of the page */
  left: 0; /* Attach it to the left side of the page */
  right: 0; /* Attach it to the right side of the page */
  height: 60px; /* Set the height of the navbar */
  background-color: #333; /* Set the background color */
  color: #fff; /* Set the text color */
  display: flex; /* Align the navigation links horizontally */
  justify-content: space-between; /* Distribute the links evenly */
  align-items: center; /* Vertically center the links */
  padding: 0 20px; /* Add some padding to the navbar */
  position: fixed;
  background: #B5ECBB;
  justify-content: flex-start;
  flex-shrink: 0;
  z-index:9999;

}

.Logo {
width: 150px;
height: 60px;
left: 0;
top: 0;
position: absolute;
flex-shrink: 0;
background: #352E2E;
}
.LogoText{
    display: flex;
width: 150px;
height: 60px;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
    color: #F5F5F5;
text-align: center;
font-family: Inter;
font-size: 50px;
font-style: italic;
font-weight: 1000;
line-height: normal;

}

.Image1{
  width:60px;
  height: 60px;
  right:10px;
  top: 0;
  position: absolute;
  border-radius: 50%;
  justify-content: flex-end;
  flex-shrink: 0;

}
.newLogoImage{
  width: 4.56%;
  height: 100%;
  right:1%;
  top: 0;
  position: absolute;
  border-radius: 50%;
  justify-content: flex-end;
  flex-shrink: 0;
}
//body styles
//Aside styles
.Profile {
  width: 25%;
  height: 980%;
  position: absolute;
  top:100%;
  right:0;
  background: #B5ECBB;
  border: 0.3px solid #352E2E;

  

}
.Group4 {
  top: 2px;
  position: absolute;
  width: 99%;
  height: 50px;
  left: 2px;
  right:4px;
  justify-content: center;
  background: black;
}
.Text{

  color: #FFF;
text-align: center;
font-family: Inter;
font-size: 20px;
font-style: italic;
font-weight: 400;
line-height: normal;
}


.Group5 {
  top: 57px;
  position: absolute;
  width: 99%;
  height: 50px;
  left: 2px;
  right:4px;
  justify-content: center;
  background: black;
}

.Group3 {
  top: 112px;
  position: absolute;
  width: 99%;
  height: 50px;
  left: 2px;
  right:4px;
  justify-content: center;
  background: black;
}

.Group2 {
  top: 167px;
  position: absolute;
  width: 99%;
  height: 50px;
  left: 2px;
  right:4px;
  justify-content: center;
  background: #00337E;
}
.Setting {
  color: #FFF;
text-align: center;
font-family: Inter;
font-size: 20px;
font-style: italic;
font-weight: 400;
line-height: normal;
  word-wrap: break-word;
}

.Logout {
  position: absolute;
  width: 85%;
  height: 50px;
  bottom:40px;
  left: 5%;
  right:5%;
  justify-content: center;
  background: #00337E;
  border-radius: 40px;
border: 0.6px solid #FFF;
background: #00337E;
}
.LogOut {
  color: #FFF;
text-align: center;
font-family: Inter;
font-size: 20px;
font-style: italic;
font-weight: 400;
line-height: normal;
}

`
export default Shade