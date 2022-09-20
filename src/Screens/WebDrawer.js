import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { withRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./WebDrawer.css"
import { color } from "@mui/system";
import FypLogo from '../Assets/images/FypLogo.jpeg'


const useStyles = makeStyles({
  drawer: {
    width: "190px",
    backgroundColor: 'black',
  }
});

const Drawer = props => {
  const { history } = props;
  const classes = useStyles();
  const navigate = useNavigate();

  const itemsList = [
    {
      text: "Home",
      icon: <InboxIcon />,
      onClick: () => navigate("/Home")
    },
    {
      text: "Donation Status",
      icon: <InboxIcon />,
      onClick: () => navigate("/DonationStatus")
    },
    {
      text: "Request Janaza Status",
      icon: <InboxIcon />,
      onClick: () => navigate("/RequestJanazaStatus")
    },
    {
      text: "Request Student Status",
      icon: <InboxIcon />,
      onClick: () => navigate("/RequestStudentStatus")
    },
    {
      text: "View Profile",
      icon: <InboxIcon />,
      onClick: () => navigate("/ViewProfile")
    },
    {
      text: "Logout",
      icon: <InboxIcon />,
      onClick: () => navigate("/")
    }
  ];
  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <div className='home-fyp-logo-holder'>
      <img src={FypLogo} />
      </div>
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default Drawer;