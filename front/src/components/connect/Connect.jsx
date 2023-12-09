import { Button, Dialog, DialogContent, DialogTitle, IconButton, Stack, TextField } from "@mui/material";
import React,{ useState } from 'react';
import CloseIcon from "@mui/icons-material/Close"
import './connect.css';
import {  Group1945, Group1953, Group1954 } from './imports';

const Connect = () => {
  const [openApplyDialogRefugee, setOpenApplyDialogRefugee] = useState(false);
  const [openVerificationDialog, setOpenVerificationDialog] = useState(false);
  const openApplyPopupRefugee = () => {
    setOpenApplyDialogRefugee(true);
  };
  const closeApplyPopupRefugee = () => {
    setOpenApplyDialogRefugee(false);
  };
  const [openApplyDialogOwner, setOpenApplyDialogOwner] = useState(false);
  const openApplyPopupOwner = () => {
  setOpenApplyDialogOwner(true);
  };
  const closeApplyPopupOwner = () => {
    setOpenApplyDialogOwner(false);
  };
  const openVerificationPopup = () => {
    setOpenVerificationDialog(true);
  };

  const closeVerificationPopup = () => {
    setOpenVerificationDialog(false);
  };
  const handleDonateClick = () => {
    console.log('Donation button clicked!');
  };
  return (
    <div className="haven__connect">
        <div className="haven__connect-title">
          <h3>Connect As</h3>
        </div>
        <div className="haven__connect-people">
          <div className="haven__connect-people-donor">
            <img src={Group1953} alt="Group1953" />
            <h3>Donor</h3>
            <p>Pay refugees’ rental expenses by donating now.</p>
            <button  type="button" onClick={handleDonateClick}>Donate</button>
          </div>
          <div className="haven__connect-people-refugee"> 
            <img src={Group1945} alt="Group1945" />
            <h3>Refugee</h3>
            <p>Apply now so you can benefit from donations.</p>
            <button onClick={openApplyPopupRefugee} type="button">Apply</button>
            <Dialog open={openApplyDialogRefugee} onClose={closeApplyPopupRefugee} fullWidth maxWidth="md" className="haven__connect-people-refugee-form">
                <DialogContent  className="haven__connect-people-refugee-form-content"><IconButton onClick={closeApplyPopupRefugee} style={{float:'right'}}><CloseIcon color="primary" className="haven__connect-people-refugee-form-content-icon"></CloseIcon></IconButton>
                    <Stack spacing={2} margin={2}>
                      <div className="haven__connect-people-refugee-form-content-text">
                        <Stack spacing={2} margin={2}>
                        <TextField variant="outlined" label="First Name" InputLabelProps={{ style: { color: 'white' } }} InputProps={{ style: { borderColor: 'white' } }}></TextField>
                        <TextField variant="outlined" label="Last Name" InputLabelProps={{ style: { color: 'white' } }}></TextField>
                        <TextField variant="outlined" label="Address" InputLabelProps={{ style: { color: 'white' } }}></TextField>
                        <TextField variant="outlined" label="Email" InputLabelProps={{ style: { color: 'white' } }}></TextField>
                        <TextField variant="outlined" label="Phone Number" InputLabelProps={{ style: { color: 'white' } }}></TextField>
                        </Stack>
                      </div>
                      <Button onClick={openVerificationPopup}   >Identity Verification</Button>
                        <Dialog open={openVerificationDialog} onClose={closeVerificationPopup} fullWidth maxWidth="md" className="haven__connect-people-refugee-form-form2">
                          <DialogTitle className="haven__connect-people-refugee-form-form2-DialogTitle">Select Type of Document to Scan <IconButton onClick={closeVerificationPopup} style={{float:'right'}} ><CloseIcon color="primary"></CloseIcon></IconButton>  </DialogTitle>
                          <DialogContent className="haven__connect-people-refugee-form-form2-content">
                          <Stack spacing={2} margin={2}>
                            <div className="haven__connect-people-refugee-form-form2-content-title">
                              <Stack spacing={2} margin={2}>
                                <Button color="primary" variant="contained">Refugee Certificate</Button>
                                <Button color="primary" variant="contained">Passport</Button>
                                <Button color="primary" variant="contained">Driver License</Button>
                                <Button color="primary" variant="contained" >Identity Card</Button>
                              </Stack>
                            </div>
                              <Button onClick={closeVerificationPopup} color="primary" className="haven__connect-people-refugee-form-form2-content-button"  >Verify</Button>
                          </Stack>
                          </DialogContent>
                        </Dialog>
                      <p> Already have an account? <a href="/connect">Connect</a> </p>
                    </Stack>
                </DialogContent>
                </Dialog>
          </div>
          <div className="haven__connect-people-owner">
            <img src={Group1954} alt="Group1954" />
            <h3>Owner</h3>
            <p>Apply now and list your property so refugees can rent it.</p>
            <button onClick={openApplyPopupOwner} type="button">Apply</button>
              <Dialog open={openApplyDialogOwner} onClose={closeApplyPopupOwner} fullWidth maxWidth="md" className="haven__connect-people-owner-form">
                <DialogContent className="haven__connect-people-owner-form-content" ><IconButton onClick={closeApplyPopupOwner} style={{float:'right'}}><CloseIcon color="primary"></CloseIcon></IconButton>
                  <Stack spacing={2} margin={2}>
                  <div className="haven__connect-people-owner-form-content-text">
                    <Stack spacing={2} margin={2}>  
                    <TextField variant="outlined" label="First Name" InputLabelProps={{ style: { color: 'white' } }} InputProps={{ style: { borderColor: 'white' } }}></TextField>
                        <TextField variant="outlined" label="Last Name" InputLabelProps={{ style: { color: 'white' } }}></TextField>
                        <TextField variant="outlined" label="Address" InputLabelProps={{ style: { color: 'white' } }}></TextField>
                        <TextField variant="outlined" label="Email" InputLabelProps={{ style: { color: 'white' } }}></TextField>
                        <TextField variant="outlined" label="Phone Number" InputLabelProps={{ style: { color: 'white' } }}></TextField>
                    </Stack>
                  </div>
                  <Button onClick={openVerificationPopup} color="primary" variant="contained">Identity Verification</Button>
                    <Dialog open={openVerificationDialog} onClose={closeVerificationPopup} fullWidth maxWidth="md" className="haven__connect-people-owner-form-form2">
                        <DialogTitle className="haven__connect-people-owner-form-form2-DialogTitle">Select Type of Document to Scan <IconButton onClick={closeVerificationPopup} style={{float:'right'}}><CloseIcon color="primary"></CloseIcon></IconButton>  </DialogTitle>
                          <DialogContent className="haven__connect-people-owner-form-form2-content">
                            <Stack spacing={2} margin={2}>
                            <div className="haven__connect-people-owner-form-form2-content-title">
                              <Stack spacing={2} margin={2}>
                              <Button color="primary" variant="contained">Passport</Button>
                              <Button color="primary" variant="contained">Driver License</Button>
                              <Button color="primary" variant="contained" >Identity Card</Button>
                              </Stack>
                            </div>
                              <Button onClick={closeVerificationPopup} color="primary" variant="contained" className="haven__connect-people-owner-form-form2-content-button" >Verify</Button>
                              </Stack>
                          </DialogContent>
                        </Dialog>
                      <p> Already have an account? <a href="/connect">Connect</a> </p>
                    </Stack>
                </DialogContent>
            </Dialog>
          </div>
        </div>
     </div>    
  )
}

export default Connect