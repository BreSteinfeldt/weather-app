import React from "react";
import { Grid, Box, Paper, Stack, TextField,  } from "@mui/material";

function TestPaper() {
  return (
    <Paper sx={{ padding: "32px" }} elevation={4}>
      <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
          <TextField label="Zipcode" size="small" required></TextField>
        </Stack>
      </Stack>
      <Grid container my={4} spacing={2} columnSpacing={2}>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="secondary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="secondary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="secondary.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="secondary.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TestPaper;
