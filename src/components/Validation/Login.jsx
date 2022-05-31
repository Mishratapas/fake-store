import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import {AiFillLock} from "react-icons/ai";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 380,
    margin: "20px auto",
  };

  const avatarStyle = {backgroundColor: "#17c0cf"};

  const buttonStyle = {margin: "8px 0"};
  return (
    <div>
      <Grid>
        <Paper style={paperStyle} elevation={10}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AiFillLock />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField
            id="outlined-basic"
            label="Username"
            placeholder="Enter Username"
            variant="standard"
            fullWidth
            required
          />
          <TextField
            label="Password"
            placeholder="Enter Password"
            variant="standard"
            type="password"
            fullWidth
            required
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            style={buttonStyle}
          >
            Sign In
          </Button>
          <Typography>
            <Link href="/">Forgot password ?</Link>
          </Typography>
          <Typography>
            Do you have an account ? <Link to="/signup">Sign Up</Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;
