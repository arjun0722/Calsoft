import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import incorrectpw from "../images/incorrectpw.png";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Incorrectpw() {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
const navigate = useNavigate()
  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const handleRoute=()=>{
    navigate("/dashboard")
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        maxWidth="xs"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid #2E7DF6",
            padding: "21px",
            borderRadius: "12px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            style={{
              fontFamily: "Josefin Sans !important",
              fontWeight: "600",
              textAlign: "center",
              fontSize: "24px",
              color: "#2E7DF6",
            }}
          >
            Your password has been update successfully
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <img
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "259px",
              }}
              src={incorrectpw}
              alt="image"
            />
            <Button
              style={{ borderRadius: "50px" }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>handleRoute()}
            >
              Okay
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
