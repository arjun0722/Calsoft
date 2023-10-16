import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CabinIcon from "@mui/icons-material/Cabin";
import { Avatar } from "@mui/material";
import "../scss/header.scss";
import Explore from "./Explore";
import Cards from "./Cards";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import StoreIcon from "@mui/icons-material/Store";
import InventoryIcon from "@mui/icons-material/Inventory";
import WalletIcon from "@mui/icons-material/Wallet";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import logo from "../images/wetradelogo.png";
import "../scss/sidenav.scss";
import { Inventory } from "@mui/icons-material";
/////////////////

const menuData = [
  {
    label: "Dashboard",
    icon: <ShowChartIcon />,
    subItems: ["MyExchange"],
    isOpen: false,
  },
  {
    label: "Copy Trading",
    icon: <AnalyticsIcon />,
    subItems: ["Spotlight"],
    isOpen: false,
  },
  {
    label: "Market Place",
    icon: <StoreIcon />,
    subItems: ["Upgrade"],
    isOpen: false,
  },
  {
    label: "Master Traders",
    icon: <InventoryIcon />,
    subItems: ["Dashboard", "Stats", "Analytics"],
    isOpen: false,
  },
  {
    label: "Platform Wallet",
    icon: <WalletIcon />,
    subItems: [],
    isOpen: false,
  },
  {
    label: "Referral",
    icon: <DragHandleIcon />,
    subItems: [],
    isOpen: false,
  },
  {
    label: "Subscription",
    icon: <SubscriptionsIcon />,
    subItems: ["Pricing Tab", "Billing History"],
    isOpen: false,
  },
  {
    label: "Become Master Trader",
    icon: <AccountBoxIcon />,
    subItems: [],
    isOpen: false,
  },
  {
    label: "My Exchange",
    icon: <CurrencyExchangeIcon />,
    subItems: [],
    isOpen: false,
  },
  {
    label: "Master Trader Profile",
    icon: <PersonAddIcon />,
    subItems: [],
    isOpen: false,
  },
  {
    label: "Admin Panel",
    icon: <AdminPanelSettingsIcon />,
    subItems: ["Platform Stats", "Platform Alerts"],
    isOpen: false,
  },
];
///////////////////
const appBarStyles = {
  boxShadow: "none",
  borderBottom: "none",
};

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Sidenav() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const [open, setOpen] = React.useState(isLargeScreen || isMediumScreen);
  const [menuItems, setMenuItems] = React.useState(menuData);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleCollapse = (index) => {
    const updatedMenuItems = [...menuItems];
    updatedMenuItems[index].isOpen = !updatedMenuItems[index].isOpen;
    setMenuItems(updatedMenuItems);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="inherit" sx={appBarStyles}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: open === true ? "flex-end" : "space-between",
          }}
        >
          <IconButton
            color="white"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#2e7df6",
              fontWeight: "bold",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 32 32"
              fill="none"
              style={{ marginRight: "10px" }}
            >
              <path
                d="M20.3607 26.4046C20.2295 28.7803 18.2449 30.6667 15.8159 30.6667C13.3869 30.6667 11.4023 28.7803 11.2711 26.4046H4.18503C3.34551 26.4046 2.6665 25.7331 2.6665 24.9018V23.3961C2.6665 21.736 4.02629 20.3875 5.70204 20.3875C5.70007 20.3875 5.70099 14.37 5.70099 14.37C5.70099 10.1317 8.37429 6.41567 12.2757 4.9731V4.84097C12.2757 2.90436 13.863 1.33337 15.8159 1.33337C17.771 1.33337 19.3562 2.90341 19.3562 4.84097V4.97319C23.2575 6.41594 25.9309 10.1326 25.9309 14.37V20.3866C27.6031 20.3875 28.9654 21.7355 28.9654 23.3961V24.9018C28.9654 25.7298 28.2841 26.4046 27.4468 26.4046H20.3607ZM18.3322 26.4046H13.2997C13.4266 27.6715 14.5047 28.661 15.8159 28.661C17.1272 28.661 18.2053 27.6715 18.3322 26.4046ZM26.9424 24.3989V23.3961C26.9424 22.8441 26.4867 22.3932 25.9298 22.3932C24.812 22.3932 23.9079 21.4972 23.9079 20.3866V14.37C23.9079 10.7722 21.4984 7.64316 18.0643 6.66097L17.3332 6.45186V4.84097C17.3332 4.01158 16.6542 3.33907 15.8159 3.33907C14.9795 3.33907 14.2987 4.01285 14.2987 4.84097V6.45184L13.5675 6.66093C10.1332 7.64301 7.72398 10.7713 7.72398 14.37V20.3866C7.72398 21.494 6.81762 22.3932 5.70204 22.3932C5.14367 22.3932 4.68949 22.8436 4.68949 23.3961V24.3989H26.9424Z"
                fill="#2E7DF6"
              />
            </svg>
            <div className="user-info">
              <Avatar
                sx={{ height: "22px", width: "25px" }}
                alt="User Profile"
                src="https://s3-alpha-sig.figma.com/img/59be/858e/d458c63c05c0c45aeaf0d75772d3fc66?Expires=1698019200&Signature=Du2hN5ba6UTsqYSPJ0rActi94RDWZBxKgopv7PNKKaSsDzgi9IROSNICU3jfKjrTJF0HwGBmGF~b4atnLs9mrLSsbFYcEGS1KYbRfcfhZDJ~i-ux0jTX0aMH7z4gzJSf39573qlLb0npQRk05rjdTr51l6EFfN7h~i3Q4HZ5Vmw~fskpin5WzDnn9bPovNrrd3kSM7vl8x7j5K3R5DGIdalGOZUgZt~t~TPnwyCGm8GsIj35iAjHa2RCyZkJNoQ-II6OEilgdqLCqHN~ZVmBbXMhtzV7v3~-gPeSz4myEhVpZ4cZIMNIeJj-d7xIyt-mvnb5A2xzjQSzrlULdb0q6A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
              <span className="username">User99</span>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <img src={logo} alt="Logo" style={{ width: "135px" }} />
          </div>
          <div>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
        </DrawerHeader>

        <Divider />

        <List>
          <ListItem
            disablePadding
            sx={{
              display: "block",
              border: "1px solid #2E7DF6",
              width: "60%",
              background: "rgba(177, 232, 255, 0.30)",
              borderRadius: "25px",
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <CabinIcon />
              </ListItemIcon>
              <ListItemText
                primary="Home"
                sx={{ opacity: open ? 1 : 0, height: "10px" }}
              />
            </ListItemButton>
          </ListItem>

          {menuItems.map((menuItem, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{ display: "block", fontWeight: "600" }}
              onClick={() => handleCollapse(index)}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {menuItem.icon}
                </ListItemIcon>

                <ListItemText
                  primary={menuItem.label}
                  sx={{ opacity: open ? 1 : 0, display: "flex" }}
                  secondary={
                    menuItem.isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />
                  }
                />
              </ListItemButton>
              {menuItem.subItems.length > 0 && (
                <Collapse in={menuItem.isOpen} timeout="auto" unmountOnExit>
                  {menuItem.subItems.map((text, subIndex) => (
                    <ListItem
                      key={subIndex}
                      disablePadding
                      sx={{ display: "block" }}
                    >
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {/* {subIndex % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                        </ListItemIcon>
                        <ListItemText
                          primary={text}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </Collapse>
              )}
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <Explore />
        <Cards open={open} />
      </Main>
    </Box>
  );
}
