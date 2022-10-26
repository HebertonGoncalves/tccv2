import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardTituloEletricidade() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="100"
        image="https://www.inovacaotecnologica.com.br/noticias/imagens/010160201006-diamante-metalico-2.jpg"
        alt="Eletricidade"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Eletricidade
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A eletricidade é um termo geral que abrange uma variedade de fenômenos resultantes da presença e do fluxo de carga elétrica...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Conteudo</Button>
        <Button size="small">Videos</Button>
      </CardActions>
    </Card>
  );
}