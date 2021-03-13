import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Truncate from 'react-truncate';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 380,
    height: 'auto'
  },
  media: {
    height: 140,
    backgroundSize: 'contain'
  },
});

export default function PostCard({data}) {
  const classes = useStyles();
//   const {
//     title,
//     description,
//     created_by,
//     price,
//     category,
//     image
//   } = data;

  const history = useHistory();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={"https://media.istockphoto.com/photos/ocena-horizon-with-clouds-picture-id105934189?k=6&m=105934189&s=612x612&w=0&h=ZVl1jT-6bDd-HVAXLy7ozt9LD2OKNIH4OwUroRDp5-0="}
          title={"Ocean"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {"Ocean"}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
            <Truncate lines={3} ellipsis={<span>...</span>}>
                {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            </Truncate>

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => history.push('')} size="small" color="primary">
          Перейти
        </Button>
      </CardActions>
    </Card>
  );
}
