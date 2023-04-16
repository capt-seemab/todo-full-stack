import * as React from 'react';
import { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Admin.css'
import  '../Navbar/Navbar.css';
import { useLocation,useNavigate } from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3,width:'800px' }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}




export default function VerticalTabs() {
  const [value, setValue] = useState(0);
  const [allUser,setAllUser]=useState([])
  const {state}=useLocation()
  const navigate=useNavigate()
  const handleChange = (event, newValue) => {
    console.log("value",newValue);
    setValue(newValue);
  };
  const logOut=()=>{
    fetch("http://localhost:3001/api/logout", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: state.email,
    }),
  }).then(response=>response.json()).then(result=>
    {
      if (!result.isActive) {
        navigate('/')
      }
    })
  }

//get all userData
useEffect(()=>{
  fetch("http://localhost:3001/api/signup/getAllUser", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      if(result?.errors){
        alert(result.errors)
      }else{
        setAllUser(result);
      }
    });
},[])
console.log("alluser",allUser)
  return (
    <>
    <div className='navbar'>
    <div className='username'>{state.email}</div>
    <div className='userLog'>
        <div className='logo'>Admin</div> 
        <div className='signOut' onClick={logOut} style={{cursor:"pointer"}}>SignOut</div>
    </div>
  </div>
    <Box
      sx={{ flexGrow: 1,backgroundColor:'#212121', display: 'flex'}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{  width:'250px' ,height:'100vh',boxShadow:'1.5px 1.5px 3px #0e0e0e, -1.5px -1.5px 3px rgb(95 94 94 / 25%), inset 0px 0px 0px #0e0e0e, inset 0px -0px 0px #5f5e5e'}}
      >
        {
          allUser?.map((user,index)=>{
            return<Tab label={`${user.email}`} {...a11yProps(index)} />
          })
        }
        
      </Tabs>
        {allUser?.map((user,index)=>{
           return <TabPanel value={value} index={index}>
           <div className="List">
               <div class="TodosLists">
                   <div className="titleLists">Date <button style={{marginLeft:"25rem",marginBottom:'1rem'}}>Delete</button></div>
                  
                   <div className="contentLists">Contenty Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, sit.</div>
               </div>
           </div>
   
         </TabPanel>
        })}
     
    </Box>
    </>

  );
}