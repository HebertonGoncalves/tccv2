import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardVideoEletricidade() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="iframe"
        height="100"
        video="https://www.youtube.com/watch?v=nw1A2eSTAwM"
        alt="Pneumática"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pneumática
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Pneumática é o ramo da física que estuda o uso do gás ou ar pressurizado...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Conteudo</Button>
        <Button size="small">Videos</Button>
      </CardActions>
    </Card>
  );
}
