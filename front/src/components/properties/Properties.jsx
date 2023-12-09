import React from 'react'
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

import './properties.scss';
import img from '../../assets/img.jpg';
import A from '../../assets/A.png';
import B from '../../assets/B.png';
import C from '../../assets/C.png';
import D from '../../assets/D.png'; 
import form from '../../assets/form.png';

import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';




const Data = [
  {
    id:1,
    imgSrc: img,
    PriceTitle: 'USD $20',
    available: 'Available',
    location: 'n°, Street, City, Country',
    propType: 'Property Type',
    rooms: 'rooms',
    months:'months',

  },
  {
    id:2,
    imgSrc: img,
    PriceTitle: 'USD $20',
    available: 'Available',
    location: 'n°, Street, City, Country',
    propType: 'Property Type',
    rooms: 'rooms',
    months:'months',

  },
  {
    id:3,
    imgSrc: img,
    PriceTitle: 'USD $20',
    available: 'Available',
    location: 'n°, Street, City, Country',
    propType: 'Property Type',
    rooms: 'rooms',
    months:'months',

  },
  {
    id:4,
    imgSrc: img,
    PriceTitle: 'USD $20',
    available: 'Available',
    location: 'n°, Street, City, Country',
    propType: 'Property Type',
    rooms: 'rooms',
    months:'months',

  },
  {
    id:5,
    imgSrc: img,
    PriceTitle: 'USD $20',
    available: 'Available',
    location: 'n°, Street, City, Country',
    propType: 'Property Type',
    rooms: 'rooms',
    months:'months',

  },
  {
    id:6,
    imgSrc: img,
    PriceTitle: 'USD $20',
    available: 'Available',
    location: 'n°, Street, City, Country',
    propType: 'Property Type',
    rooms: 'rooms',
    months:'months',

  },
  {
    id:7,
    imgSrc: img,
    PriceTitle: 'USD $20',
    available: 'Available',
    location: 'n°, Street, City, Country',
    propType: 'Property Type',
    rooms: 'rooms',
    months:'months',

  },
  {
    id:8,
    imgSrc: img,
    PriceTitle: 'USD $20',
    available: 'Available',
    location: 'n°, Street, City, Country',
    propType: 'Property Type',
    rooms: 'rooms',
    months:'months',

  },
  {
    id:9,
    imgSrc: img,
    PriceTitle: 'USD $20',
    available: 'Available',
    location: 'n°, Street, City, Country',
    propType: 'Property Type',
    rooms: 'rooms',
    months:'months',

  },
  {
    id:10,
    imgSrc: img,
    PriceTitle: 'USD $20',
    available: 'Available',
    location: 'n°, Street, City, Country',
    propType: 'Property Type',
    rooms: 'rooms',
    months:'months',

  }
]


const Properties = () => {

  const [openApplyDialog, setOpenApplyDialog] = useState(false);
  const [openVerificationDialog, setOpenVerificationDialog] = useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  

  const [Country, setCountry] = React.useState('Country');
  const [Property, setType] = React.useState('Property Type');
  
  
  const openApplyPopup = () => {
    setOpenApplyDialog(true);
  };


  const closeApplyPopup = () => {
    setOpenApplyDialog(false);
  };
  


  const handleCountryChange = (event) => {
    setCountry(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
  };

  const handleTypeChange = (event) => {
    setType(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
  };

  const [walletAddress, setWalletAddress] = useState("");

async function requestAccount(){
  console.log('Requesting account....');
  
  if(window.ethereum) {
    console.log('detected.');

    try{
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
    } catch (error){
      console.log('error connecting ...');
    }

  } else{
    console.log('metamask not detected.');
  }
}



  return (
    <section className='haven__prop section'>
      <div className="sec__title">
        <h3 className='Title'>
          List Of Properties
        </h3>

        <button onClick={openApplyPopup} type='button' className='list_button'>
          List Property
        </button>

        <Dialog open={openApplyDialog} onClose={closeApplyPopup} fullWidth maxWidth="md" >
        
          
          <DialogContent className='dialog_content'>
            
                <div className='form_title'>
                <img src={form} alt='form' 
                style={{width: '150px', height:'150px', marginLeft: '25%'}}/>
                
                <DialogTitle className='title'>
                  Provide property details and ownership verification
                </DialogTitle>
                </div>
                <Stack spacing={2} margin={2}
                 sx={{
                  color: "#D9D9D9",
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  
                }}>
                
          <div className='form'>
          
          <IconButton onClick={closeApplyPopup} style={{ float: 'right' }} >
              <CloseIcon className='bottunn' />
            </IconButton>
            <Stack spacing={2} margin={2}
            sx={{
              width: "390px",
               height: "45px",
              color: "#D9D9D9",
              fontFamily: "Inter",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              
              
            }}>
          <Box
                
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              
              
            }}
          >
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              
              <Select
              
                autoFocus
                value={Country}
                onChange={handleCountryChange}
                inputProps={{
                  name: 'Country',
                  id: 'Country',
                }}
                sx={{
                  backgroundColor: "#D9D9D9",
                  borderRadius:"5px",
                  fontFamily: "Inter",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "normal",
                }}
              >
                <MenuItem variant="outlined" value="Country">Country</MenuItem>
                <MenuItem value="xs">Algeria</MenuItem>
                <MenuItem value="md">UK</MenuItem>
                <MenuItem value="lg">France</MenuItem>
                <MenuItem value="xl">Turkey</MenuItem>
              </Select>
            </FormControl>
            
          </Box>
               
          <TextField
              variant="outlined"
              label="City"
              className='text'
            />
  
              

            <Box
                
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              
            }}
          >
            <FormControl sx={{ mt: 1, minWidth: 90 }}>
              
              <Select
              
                autoFocus
                value={Property}
                onChange={handleTypeChange}
                inputProps={{
                  name: 'Property Type',
                  id: 'Property Type',
                }}
                sx={{
                  backgroundColor: "#D9D9D9",
                  borderRadius:"5px",
                  fontFamily: "Inter",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "normal",
                }}
                
              >
                <MenuItem variant="outlined" value="Property Type">Property Type</MenuItem>
                <MenuItem value="xs">Type</MenuItem>
                <MenuItem value="md">Type</MenuItem>
                <MenuItem value="lg">Type</MenuItem>
               
              </Select>
            </FormControl>
            
          </Box>


                <TextField variant="outlined" label="Number of Rooms" className='text'/>
                <TextField variant="outlined" label="Price" className='text'/>
                <TextField variant="outlined" label="Number of Months" className='text'/>

                  
                    {/* ... (your buttons) */}
                    <Button onClick={closeApplyPopup} className='verity_bottun' variant="contained" 
                    sx={{
                      
                      alignItems: "center",
                      background: "#EBA654",
                      fontFamily: "Inter",
                      fontSize: "20px",
                      color:"#000",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                      textTransform: "capitalize",
                    }}>
                      Verify Ownership
                    </Button>
                    </Stack>
                    </div>
            </Stack>
          </DialogContent>
         
         </Dialog>
    </div>
      <div className="sec__content grid">
        {
          Data.map(({id, imgSrc, PriceTitle, available, location, propType, rooms,months}) =>{
            return(
              <div key={id} className="singleProperty">

                <div className="imageDiv">
                  <img src={imgSrc} alt='' />
                </div>
                <div className="infoDiv">
                  <h4 className='price'>{PriceTitle}</h4>
                  <h4 className='availability'>{available}</h4>
                </div>
                <div className="location">
                  <img src={A} alt='location'/>
                  <p>{location}</p>
                </div>
                <div className="type">
                  <img src={B} alt=''/>
                  <p>{propType}</p>
                </div>
                <div className="nombre">
                <div className="rooms">
                  <img src={C} alt=''/>
                  <p>{rooms}</p>
                </div>
                <div className="months">
                  <img src={D} alt=''/>
                  <p>{months}</p>
                </div>
              </div>
              <div className='btns'>
                <button id="connectwallet" className='btn' onClick={requestAccount}>Donate</button>
                <button className='btn'>request</button>
              </div>
            </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Properties