import { Box, Button, Slide, Typography } from '@mui/material'
import { styled } from '@mui/styles'
import { Stack } from '@mui/system'
import React from 'react'

const Home = () => {

  const HighLight = styled('span')({
    color: '#ffbd39'
  })

  return (
    <Box  sx={{backgroundColor:'#000000', color: "#ffffff",padding: {xs:'10px 0px', md:'40px 40px'},  height: '110vh', width: '100%', }} direction={'row'}>
      <Stack direction={{xs:'column-reverse', sm:'row'}} sx={{position: 'reletive',height: "100%", maxWidth: "1200px", margin: "auto", overflow: 'hidden'}} alignItems='center' justifyContent={'space-around'}>
        
          <Box sx={{zIndex: '100', position: {xs: 'absolute', md: 'relative'}, display: 'flex', flexDirection: 'column', alignItems: {xs:'center', sm: 'start'}}} >
            <Stack data-aos="slide-down" data-aos-delay="500">
              <Typography fontSize={{xs: 13, md:20}} color='primary' fontWeight={600} letterSpacing={2}>HELLO!</Typography>
              <Typography fontSize={{xs: 30, md:70}} fontWeight={800} sx={{overflow: 'hidden', marginTop: {xs: '3px', md: '10px'}}}>I'm <HighLight>Abdu Jemal</HighLight></Typography>
              <Typography fontSize={{xs: 18, md:40}} mt={{xs: '3px', md: '10px'}}>A Freelance Software Developer</Typography>
            </Stack>
            <Stack data-aos="slide-right" data-aos-delay="1000" direction='row' spacing={2} mt={3}>
              <Button variant='contained' sx={{width:{xs: 'fit-content', md:'150px'}, height: {xs:'fit-content', md:'80px'}, borderRadius: {xs:'20px', md:"50px"}, fontSize: {xs:'',md:'1.3rem'}, color: '#ffffff', fontWeight: 600}} >Hire Me</Button>
              <Button size={'400px'} variant='outlined' sx={{fontWeight: 600, width:{xs: 'fit-content', md:'150px'}, height: {xs:'fit-content', md:'80px'}, borderRadius: {xs:'20px', md:"50px"}, fontSize: {xs:'',md:'1.3rem'}}}>My Works</Button>
            </Stack>
          </Box>
        
        <Box data-aos='flip-right' data-aos-delay="1500" component={'img'} src='bg_1.png'  height='90%' sx={{marginTop: {xs:'70px', sm:'0px'}}}/>
      </Stack>

    </Box>
  )
}

export default Home
