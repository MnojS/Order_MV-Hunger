import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './MediaCard.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 365,
  },
  media: {
    height: 14,
  },
});

const MediaCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root , 'mvHunger'}>
      <CardActionArea className="cardActionArea">
        <CardContent>
          <Typography gutterBottom variant="h3" component="h2">
            MV-Hunger
          </Typography>
          <Typography variant="h5" color="textSecondary" component="h5">
            Life is too short to miss out on double cheeseburgers
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="secondary" variant="contained" style={{fontSize:"20px" }}>
          About
        </Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard;
