import { Box, Divider, Icon, Paper, Slide, Stack, Typography } from '@mui/material'
import React from 'react'
import BigTxt from './BigTxt'

const Skills = () => {

  const mySkills = [
    {name: 'Javascript', value: 60},
    {name: 'Html5 & Css3', value: 80},
    {name: 'React', value: 60},
    {name: 'Dart', value: 70},
    {name: 'Flutter', value: 80},
    {name: 'Node Js', value: 60},
    {name: 'Firebase', value: 70},
    {name: 'Mongo Db', value: 60},
  ]

  return (
    <Box pt={'20px'} sx={{minHeight: '120vh', width: "100%", backgroundColor:'#000000'}} pb='30px'>
      <Stack direction='column' alignItems='center' sx={{height: '100%'}}>
        
          <Slide direction="up" in={true} mountOnEnter>
            <Box flex={0.6} sx={{position: 'relative', height:'100%'}}>
              <Typography data-aos='slide-down' variant='h2' textAlign={'center'} fontWeight={800} fontSize={{xs: 30, md:70}} color='#ffffff' sx={{overflow: 'hidden'}}>My Skills</Typography>
              <BigTxt text={"Skills"} />
         
              <Stack direction='row' flexWrap='wrap' spacing={4} justifyContent='center' mt={'80px'} mb='30px'>
                {
                  mySkills.map((skills,key)=> 
                    <Box data-aos={key%2==0 ? 'slide-right' : 'slide-left'} width={{xs: '350px', md:'600px'}} p={{xs: '10px', md:'30px'}}>
                      <Stack direction='row' justifyContent='space-between' sx={{width: '100%'}}>
                        <Typography color='#ffffff' fontSize={{xs: 17, md:24}} letterSpacing={2} fontWeight={600}>{skills.name}</Typography>
                        <Typography color='#ffffff' fontSize={{xs: 17, md:24}} letterSpacing={2} fontWeight={600}>{`${skills.value}%`}</Typography>
                      </Stack>
                      <Box mt='15px' sx={{width:'100%', backgroundColor:'#232931', borderRadius: '5px'}} height='20px' color='#232931'>
                        <Box sx={{width:`${skills.value}%`, transition: 'width 1s', height: '100%', backgroundColor:'#ffbd39', borderRadius: '5px'}}/>
                      </Box>
                    </Box>              
                      
                  )
                }
                
              </Stack>
          
          </Box> 
          </Slide>
      </Stack>
    </Box>
  )
}

export default Skills
