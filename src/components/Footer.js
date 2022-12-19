import { LinkSharp } from '@mui/icons-material'
import { Stack, Box, Typography, List, ListItemIcon, ListItemText , ListItem} from '@mui/material'
import { grey } from '@mui/material/colors'
import { styled } from '@mui/styles'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Footer = () => {
  const Title = styled(Typography)({
    color: '#ffffff',
    fontSize: "10rem",
    fontWeight: 700,
    letterSpacing: 1,
    marginBottom: '40px',
  })
  
  const Content = styled(Typography)({
    color: grey[400],
    fontSize: 18,
    textDecoration: 'none',
  })

  const links = ['Home', 'About', 'Services', 'Skills', 'Projects', 'Contacts']

  return (
    <></>
    // <Box pt={'20px'} sx={{minHeight: '80vh', width: "100%", backgroundColor:'#000000'}} pb='30px'>
    //   <Stack direction={'row'} alignItems='center' spacing={3} sx={{height: '600px', maxWidth: '80%', margin: "auto"}}>
    //     <Box flex={.25} sx={{}}>
    //       <Title>About</Title>
    //       <Content>I am a full time freelance software developer. If you want to build web or mobile application, you are in the right place.</Content>
    //     </Box>
    //     <Box flex={.25} sx={{}}>
    //       <Title>Links</Title>
          
    //     </Box>
    //     <Box flex={.25} sx={{backgroundColor: "#ffffff"}}>t</Box>
    //     <Box flex={.25} sx={{backgroundColor: "#ffffff"}}>t</Box>         
    //   </Stack>
    // </Box>
  )
}

export default Footer
