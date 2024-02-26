import React from "react";
import Alert from '@mui/material/Alert';


function ErrorAlert({error}){
   return (
     error && (
        <Alert variant="outlined" severity="error">Error fetching weather: {error} </Alert>
     )
   )
}

export default ErrorAlert; 


