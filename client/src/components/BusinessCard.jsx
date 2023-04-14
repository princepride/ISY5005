import * as React from 'react';
import { CardActionArea, CardActions, Card, CardContent, CardMedia, Typography, CardHeader, Avatar, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { useNavigate } from 'react-router-dom';

const BusinessCard = (props) => {
  const { label, companyName, address, image, information } = props;
  const navigate = useNavigate();

  const getColor = (label) => {
      if (label === 'sex') {
        return "pink";
      }
      else if (label === 'massage') {
        return "green";
      }
      else if (label === 'ktv') {
        return "yellow";
      }
      else if (label === 'restaurant') {
        return "orange";
      }
      else if (label === 'bar') {
        return "red";
      }
      else if (label === 'haircut') {
        return "blue";
      }
      return "gray";
  }

  const handleClick = () => {
    navigate('/cus-dashboard/form');
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: getColor(label) }} aria-label={label}>
            {label.slice(0,1).toUpperCase()}
          </Avatar>
        }
        title={<Typography align="left">{companyName}</Typography>}
        subheader={<Typography align="left">{address}</Typography>}
      />
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="美女图"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {information}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default BusinessCard;