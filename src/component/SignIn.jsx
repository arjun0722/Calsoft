import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
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

export default function SignIn() {
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
  navigate("/recoverpw")
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
              fontSize: "32px",
              color: "#2E7DF6",
            }}
          >
            Reset Password
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Enter new Password"
              name="password"
              autoComplete="password"
              type={passwordVisible ? "text" : "password"} // Toggle input type
              InputProps={{
                startAdornment: (
                  <LockOutlinedIcon
                    style={{ margin: "0 8px 0 0", color: "black" }}
                  />
                ),
                endAdornment: (
                  <button
                    style={{
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={handlePasswordVisibility}
                  >
                    {passwordVisible ? (
                      <VisibilityOffIcon style={{ color: "black" }} />
                    ) : (
                      <VisibilityIcon style={{ color: "black" }} />
                    )}
                  </button>
                ),
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="repassword"
              label="Re-enter new Password"
              autoComplete="re-enter-password"
              type={passwordVisible ? "text" : "password"} // Toggle input type
              InputProps={{
                startAdornment: (
                  <LockOutlinedIcon
                    style={{ margin: "0 8px 0 0", color: "black" }}
                  />
                ),
                endAdornment: (
                  <button
                    style={{
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={handlePasswordVisibility}
                  >
                    {passwordVisible ? (
                      <VisibilityOffIcon style={{ color: "black" }} />
                    ) : (
                      <VisibilityIcon style={{ color: "black" }} />
                    )}
                  </button>
                ),
              }}
            />
            <div style={{ display: "flex", gap: "10px" }}>
              <Button
                style={{
                  borderRadius: "50px",
                  color: "#2E7DF6",
                  background: "white",
                  border: "1px solid #2E7DF6",
                }}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Cancel
              </Button>
              <Button
                style={{ borderRadius: "50px" }}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={()=>handleRoute()}
              >
                Create
              </Button>
            </div>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
