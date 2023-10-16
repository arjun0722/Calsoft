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

export default function Recoverpw() {
  const [otp, setOtp] = React.useState(["1", "2", "3", "5", "6", "7"]); // Array to hold OTP digits
const navigate = useNavigate()
  const handleOtpChange = (index, value) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget); // Use formData instead of data
    const enteredOtp = otp.join(""); // Combine the OTP digits into a single string
    console.log({
      email: formData.get("email"), // Use formData.get to access form fields
      otp: enteredOtp,
    });
  };
  const handleRoute=()=>{
navigate("/incorrectpw")
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
            <p style={{ textAlign: "center" }}>
              An email containing a link to recover your password will be sent
              to the below-mentioned email address
            </p>

            <div
              style={{ display: "flex", gap: "8px", justifyContent: "center" }}
            >
              {otp.map((digit, index) => (
                <TextField
                  key={index}
                  margin="normal"
                  required
                  fullWidth
                  label=""
                  variant="outlined"
                  inputProps={{
                    maxLength: 1, // Allow only one character
                    style: {
                      textAlign: "center",
                      fontSize: "20px",
                    },
                  }}
                  value={digit}
                  onChange={(e) => {
                    const newValue = e.target.value.slice(-1); // Allow only one character
                    handleOtpChange(index, newValue);
                  }}
                />
              ))}
            </div>

            <p style={{ textAlign: "center", fontSize: "16px" }}>
              After 5 unsuccessful login attempts, your account will be locked
              for 2 hours
            </p>

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
                Proceed
              </Button>
            </div>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
