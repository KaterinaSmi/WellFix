import React from "react";
import { Box, ImageList, ImageListItem, Stack } from "@mui/material";
const ImageListMui = () => {
    return (
      <Stack spacing={4}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          width: '100%', // Ensure it takes the full width of the container
        }}>
          <Box sx={{ 
            width: '100%', // Make it take full width
            height: 'auto', // Allow height to adjust
            maxHeight: '450px', // You can adjust this based on your needs
            overflowY: 'scroll' 
          }}>
            <ImageList variant='masonry' cols={3} gap={8} sx={{ width: '100%' }}>
              {newImageData.map(image => (
                <ImageListItem key={image.img}>
                  <img 
                    src={`${image.img}?w=248&fit=fill&auto=format&dpr=2`} 
                    alt={image.title} 
                    loading='lazy' 
                    style={{ width: '100%', height: 'auto' }} // Make images responsive
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Box>
      </Stack>
    );
  };
  const newImageData = [
    {
      img: '/photo_galeryy/workecample.jpeg',
      title: 'Sunset'
    },
    {
      img: '/photo_galeryy/workexample1.jpeg',
      title: 'Mountains'
    },
    {
      img: '/photo_galeryy/workexample3.jpeg',
      title: 'Dolphins'
    },
    {
      img: '/photo_galeryy/workexample4.jpeg',
      title: 'Rocks'
    },
    {
      img: '/photo_galeryy/workexample5.jpeg',
      title: 'Space'
    },
    {
      img: '/photo_galeryy/workexample6.jpeg',
      title: 'Camp'
    },
    {
      img: '/photo_galeryy/workexample7.jpg',
      title: 'MiniCooper'
    },
    {
      img: '/photo_galeryy/roof.jpg',
      title: 'Giraffas'
    },
    {
      img: '/photo_galeryy/workexample10.jpeg',
      title: 'Giraffas'
    },
    {
      img: '/photo_galeryy/workexample11.jpeg',
      title: 'Giraffas'
    },
    {
      img: '/photo_galeryy/workexample12.jpeg',
      title: 'Giraffas'
    },
    {
      img: '/photo_galeryy/workexample13.jpeg',
      title: 'Giraffas'
    },
    {
      img: '/photo_galeryy/workexample14.jpeg',
      title: 'Giraffas'
    },
   
  ];
export default ImageListMui