import * as React from "react";
import {
  Box,
  IconButton,
  Card,
  CardContent,
  CardActions,
  Divider,
  Typography,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Landing = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Card sx={{ borderRadius: 2, minWidth: 256, textAlign: "center",boxShadow: 5 }}>
        <CardContent>
          <Typography
            sx={{
              fontFamily: 'Titillium Web',
              fontSize: 22,
              fontWeight: "bold",
              letterSpacing: "0.5px",
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            Christopher De Castro
          </Typography>
        </CardContent>
        <Divider light />
        <CardActions sx={{justifyContent: 'space-around'}}>
          <IconButton
            aria-label="Youtube"
            href="https://www.youtube.com/channel/UCSLRhw9LLu6N8ow8u2kT5aQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon sx={{color:"black"}}/>
          </IconButton>
          <IconButton
            aria-label="Instagram"
            href="https://www.instagram.com/chrisjdecastro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon sx={{color:"black"}}/>
          </IconButton>
          <IconButton
            aria-label="Twitter"
            href="https://twitter.com/chrisjdecastro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon sx={{color:"black"}}/>
          </IconButton>
          <IconButton
            aria-label="Github"
            href="https://github.com/ChrisJDecastro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon sx={{color:"black"}}/>
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Landing;
