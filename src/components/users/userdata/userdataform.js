// import React, { useState } from "react";
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography'; // Import MUI Typography for error message
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const UserForm = () => {
//   const [count, setCount] = useState(0);
//   const [error, setError] = useState(''); // Add state for error message

//   const handleIncrement = () => {
//     if (count < 10){
//     setCount(count + 1);
//     setError(''); // Clear error message on increment
//     }
//   };

//   const handleDecrement = () => {
//     if (count > 0) {
//       setCount(count - 1);
//       setError(''); // Clear error message if count is decremented
//     } else {
//       toast.error('Count cannot go below 0');
//       setError('Count cannot go below 0'); // Set error message if trying to decrement below 0
//     }
//   };

//   return (
//     <div>
//       <h1>User Form</h1>
//       <Button 
//         variant="contained" 
//         color="secondary" 
//         onClick={handleIncrement}
//       >
//         Increment +
//       </Button>
//       <p>Count: {count}</p>
//       <Button 
//         variant="contained" 
//         color="secondary" 
//         onClick={handleDecrement}
//       >
//         Decrement -
//       </Button>
//       {error && (
//         <Typography color="error" variant="body2">
//           {error}
//         </Typography>
//       )}
//       <ToastContainer position="top-right" autoClose={3000} />
//     </div>
//   );
// };

// export default UserForm;


// import React, { useState } from "react";
// import Button from '@mui/material/Button';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const UserForm = () => {
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     if (count < 10) {
//       setCount(count + 1);
//       toast.dismiss(); // Dismiss any existing toasts on increment
//     } else {
//       toast.error('Count cannot exceed 10', {
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored"
//       });
//     }
//   };

//   const handleDecrement = () => {
//     if (count > 0) {
//       setCount(count - 1);
//       toast.dismiss(); // Dismiss any existing toasts on valid decrement
//     } else {
//       toast.error('Count cannot go below 0', {
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored"
//       });
//     }
//   };

//   return (
//     <div>
//       <h1>User Form</h1>
//       <Button 
//         variant="contained" 
//         color="secondary" 
//         onClick={handleIncrement}
//       >
//         Increment +
//       </Button>
//       <p>Count: {count}</p>
//       <Button 
//         variant="contained" 
//         color="secondary" 
//         onClick={handleDecrement}
//       >
//         Decrement -
//       </Button>
//       <ToastContainer 
//         position="top-right" 
//         autoClose={3000} 
//         hideProgressBar={false} 
//         newestOnTop={true} 
//         closeOnClick 
//         rtl={false} 
//         pauseOnFocusLoss 
//         draggable 
//         pauseOnHover 
//         theme="colored"
//       />
//     </div>
//   );
// };

// export default UserForm;


// src/UserForm.js
import React, { useState } from 'react';
import { TextField, Button, Grid, Container, Typography, Box } from '@mui/material';

const UserForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          User Input Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                variant="outlined"
                value={formValues.name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                variant="outlined"
                value={formValues.email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                type="password"
                label="Password"
                name="password"
                variant="outlined"
                value={formValues.password}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default UserForm;
