import * as React from 'react';
import { useState } from 'react';
import "./TabsMui.css"
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { TextField } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputField from './InputField';
import WebDrawer from '../Screens/WebDrawer'

import RequestJanazaFund from './RequestJanazaFund';
import RequestStudentFund from './RequestStudentFund';





function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const [file, setFile] = useState()
  function handleChange(event) {
    setFile(event.target.files[0])
  }

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function TabsMui() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    
    <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
      <WebDrawer />
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="#02a95c"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Request for Janaza Funds" {...a11yProps(0)} />
          <Tab label="Request for Student Funds" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          

        <RequestJanazaFund />
       
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <RequestStudentFund />
        </TabPanel>
        
      </SwipeableViews>
    </Box>
  );
}
