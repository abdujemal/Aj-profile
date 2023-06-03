import { LanguageOutlined, PhoneAndroidOutlined, StorageOutlined } from '@mui/icons-material'
import { Box, Divider, Grid, Icon, Paper, Slide, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import { useGlobalContext } from '../context'
import BigTxt from './BigTxt'

const Services = () => {

  const myServices = [
    {icon: <PhoneAndroidOutlined color='primary' fontSize='inherit'/>, title: "Cross Paltform Apps"}, 
    {icon: <LanguageOutlined color='primary' fontSize='inherit'/>, title: "Web Apps"},
    {icon: <StorageOutlined color='primary' fontSize='inherit'/>, title: "Server Apps"}
  ];

  const {services} = useGlobalContext()

  return (
    <Box pt={'20px'} sx={{minHeight: '120vh', width: "100%", backgroundColor:'#000000'}}>
      <Stack direction='column' alignItems='center' sx={{height: '100%'}}>
          <Box flex={0.6} sx={{position: 'relative', height:'100%'}}>
            <Typography data-aos='slide-down' variant='h2' textAlign={'center'} fontWeight={800} fontSize={{xs: 30, md:70}} color='#ffffff' sx={{overflow: 'hidden'}}>Services</Typography>
            <BigTxt text={"Services"} />
        
            <Stack sx={{overflow: 'hidden'}} direction={{xs: 'column', md: 'row'}} spacing={4} justifyContent='center' mt={'80px'} mb='30px'>
              {
                myServices.map((service, key)=>                
                    <Paper key={key} data-aos='slide-up' data-aos-delay={`${key * 100}`} sx={{ borderRadius: '10px',height: '350px', width: '350px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor:'#232931', justifyContent:'center'}}>
                      <Icon sx={{fontSize: {xs: '4rem', md:'8rem'}}}>{service.icon}</Icon>
                      <Typography mt='15px' mb='15px' color={"#ffffff"} fontSize={{xs: 15, md:20}} letterSpacing={2} textTransform='uppercase'>{service.title}</Typography>
                      <Divider color="#ffbd39" sx={{height: '1.5px', borderRadius: '5px', width: '20%'}}/>
                    </Paper>
                )
              }
              
            </Stack>
        
        </Box> 
      </Stack>
    </Box>
  )
}

export default Services
