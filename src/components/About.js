import { Box, Slide, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import BigTxt from './BigTxt'

const About = () => {
  return (
    <Box pt={'40px'} sx={{minHeight: '80vh', width: "100%", backgroundColor:'#000000'}}>
      <Stack direction='row' justifyContent={'space-around'} alignItems='center' sx={{height: '100%'}}>
        <Box data-aos='slide-right' data-aos-delay='600' flex={0.4} component={'img'} src='bg_1.png'  height='80%' sx={{marginTop: {xs:'70px', sm:'0px'}, display: {xs: "none", md: "block"}}} />
          <Box flex={0.6} sx={{position: 'relative', height: '100%'}}>
            
            <Typography data-aos='slide-down' variant='h2' fontWeight={800} fontSize={{xs: 30, md:70}} color='#ffffff' sx={{overflow: 'hidden'}}>About Me</Typography>
            <BigTxt text={"About"} />

            <Stack direction={'row'} pt={10} >
            <Stack flex={.5} spacing={3} sx={{overflow: 'hidden'}}>
              <Typography data-aos='slide-up' variant='p' color='#ffffff' fontSize={{xs: 13, md:20}} fontWeight={800}>Name:</Typography>
              <Typography data-aos='slide-up' data-aos-delay='100' variant='p' color='#ffffff' fontSize={{xs: 13, md:20}} fontWeight={800}>Date of birth:</Typography>
              <Typography data-aos='slide-up' data-aos-delay='200' variant='p' color='#ffffff' fontSize={{xs: 13, md:20}} fontWeight={800}>Address:</Typography>
              <Typography data-aos='slide-up' data-aos-delay='300' variant='p' color='#ffffff' fontSize={{xs: 13, md:20}} fontWeight={800}>Zip Code:</Typography>
              <Typography data-aos='slide-up' data-aos-delay='400' variant='p' color='#ffffff' fontSize={{xs: 13, md:20}} fontWeight={800}>Email:</Typography>
              <Typography data-aos='slide-up' data-aos-delay='500' variant='p' color='#ffffff' fontSize={{xs: 13, md:20}} fontWeight={800}>Phone:</Typography>           
            </Stack>
            <Stack flex={.5} spacing={3} sx={{overflow: 'hidden'}}>
              <Typography data-aos='slide-up' color={grey[400]} fontSize={{xs: 13, md:20}} fontWeight={200}>Abdurahman Jemal</Typography>
              <Typography data-aos='slide-up' data-aos-delay='100' color={grey[400]} fontSize={{xs: 13, md:20}} fontWeight={200}>September 20, 2001</Typography>
              <Typography data-aos='slide-up' data-aos-delay='200' color={grey[400]} fontSize={{xs: 13, md:20}} fontWeight={200}>Addiss Ababa</Typography>
              <Typography data-aos='slide-up' data-aos-delay='300' color={grey[400]} fontSize={{xs: 13, md:20}} fontWeight={200}>1000</Typography>
              <Typography data-aos='slide-up' data-aos-delay='400' color={grey[400]} fontSize={{xs: 13, md:20}} fontWeight={200}>abdu1994jemal@gmail.com</Typography>
              <Typography data-aos='slide-up' data-aos-delay='500' color={grey[400]} fontSize={{xs: 13, md:20}} fontWeight={200}>+251-9-12-69-00-34</Typography>
            </Stack>
          </Stack>
          </Box> 
      </Stack>
    </Box>
  )
}

export default About
