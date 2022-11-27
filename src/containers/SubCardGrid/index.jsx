import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function SubCard(props) {
  const {name, description, image_url,id,wiki_url} = props;
  const navigate = useNavigate();
  return ( 
    <Grid item xs={12} md= {6} lg={4} sx={{
      paddingTop:'20px' 
    }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt={name}
          height="140"
          image={image_url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={()=>{navigate(`/subjects/${id}`)}}>Courses</Button>
          <Button size="small" href={`${wiki_url}`} sx={{paddingLeft:'20px'}}>Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}