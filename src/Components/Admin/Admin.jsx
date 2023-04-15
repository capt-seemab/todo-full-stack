import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Admin.css'
import Navbar from '../Navbar/Navbar';

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Navbar name='Admin'/>
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
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
        
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="List">
            <div class="TodosLists">
                <div className="titleLists">Date</div>
                <div className="contentLists">Contenty Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, sit.</div>
            </div>
            <div class="TodosLists">
                <div className="titleLists">Date</div>
                <div className="contentLists">Contenty Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem est veniam nesciunt dolorum labore illum ipsa! Veritatis distinctio optio dolorem?</div>
            </div>
            <div class="TodosLists">
                <div className="titleLists">Date</div>
                <div className="contentLists">Contenty Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nostrum?</div>
            </div>
            <div class="TodosLists">
                <div className="titleLists">Date</div>
                <div className="contentLists">Contenty Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem est veniam nesciunt dolorum labore illum ipsa! Veritatis distinctio optio dolorem?</div>
            </div>
            <div class="TodosLists">
                <div className="titleLists">Date</div>
                <div className="contentLists">Contenty Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nostrum?</div>
            </div>
        </div>

      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
    </>

  );
}