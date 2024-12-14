import React from 'react'
import { Button, TextField } from '@mui/material'
function Add() {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '500px',
        justifyContent: 'center',
        alignItems: 'center', 
        height: '100vh',
        margin: '0 auto'
      }}>
    <br/><br/><br/><TextField label="Product Name" variant="outlined"/><br/>
    <TextField label="Product category" variant="outlined"/><br/>
    <TextField label="Product price" variant="outlined"/><br/>
    <TextField label="Product Image Address" variant="outlined"/><br/>
    <Button variant="contained">Add Product</Button><br/><br/><br/><br/><br/><br/>
    </div>
  )
}

export default Add