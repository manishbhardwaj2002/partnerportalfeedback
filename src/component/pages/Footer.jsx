import * as React from 'react';
import {Box, Typography, Link } from'@mui/material';




const Footer = () => {
  return (
    <Box sx={{background:'#EDEFF7', width:'100%', height:'auto', display:'flex', justifyContent:'center', alignItems:'center', padding:'10px 15px',}}><Typography component="p" sx={{  width:'auto', color:'#424242', fontSize:{ xs:'11px', sm:'14px'}}}>Copyright ©2023 Stoxkart | All rights reserved | &nbsp;<Link href="#" sx={{color:'#0065FF', textDecoration:'none'}}>Privacy Policy</Link>&nbsp;  | CIN: U67100DL2009FLC397463 | SEBI Reg. No. INZ000196835</Typography></Box>
  )
}

export default Footer;