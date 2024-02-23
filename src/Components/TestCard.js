import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia, Paper } from "@mui/material";
import React from "react";

function TestCard() {
  return (
    <Box width="300px">
      <Card elevation={4}>
        <CardMedia component="img" height="140" image="https://source.unsplash.com/random"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            HI
          </Typography>
          <Typography variant="body2" color="text.secondary">
            blah blah blah blah blah blah blah blah blah blah blah blah
          </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Button1</Button>
            <Button size="small">Button2</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default TestCard;


