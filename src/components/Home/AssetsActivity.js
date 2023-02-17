import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Avatar, Card, Divider } from '@mui/material';
import TollIcon from '@mui/icons-material/Toll';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AssetsActivity() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Assets" sx={{width: "50%"}} {...a11yProps(0)} />
          <Tab label="Activity" sx={{width: "50%"}} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Divider />
        <Card sx={{py: 2, px: 3, display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Avatar>
                <TollIcon />
            </Avatar>
            <Typography> 100000 Token </Typography>
            <DoubleArrowIcon />
        </Card>
        <Divider />
        <Card sx={{py: 2, px: 3, display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Avatar>
                <TollIcon />
            </Avatar>
            <Typography> 50 Balls </Typography>
            <DoubleArrowIcon />
        </Card>
        <Divider />
        <Card sx={{py: 2, px: 3, display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Avatar>
                <TollIcon />
            </Avatar>
            <Typography> 150 Nuts </Typography>
            <DoubleArrowIcon />
        </Card>
        <Divider />
        <Card sx={{py: 2, px: 3, display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Avatar>
                <TollIcon />
            </Avatar>
            <Typography> 365 Dollars </Typography>
            <DoubleArrowIcon />
        </Card>
        <Divider />
        <Card sx={{py: 2, px: 3, display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Avatar>
                <TollIcon />
            </Avatar>
            <Typography> 455 Bitcoins </Typography>
            <DoubleArrowIcon />
        </Card>
        <Divider />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Divider />
        <Card sx={{py: 2, px: 3, display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Avatar>
                <TollIcon />
            </Avatar>
            <Typography> 455 Bitcoins </Typography>
            <DoubleArrowIcon />
        </Card>
        <Divider />
      </TabPanel>
    </Box>
  );
}