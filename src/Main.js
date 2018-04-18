import React, {Component} from 'react';
import axios from 'axios';
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import './App.css';
import {Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

const styles = {
    media: {
      height: 300,
    },
    content: {
      minHeight: 150
    },
    root: {
      flexGrow: 1,
      padding: 8,
      marginTop: 64
    }
  };

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data: []
        }
      }
    
      componentDidMount() {
        axios.get('https://techcrunch.com/wp-json/tc/mobile/v1/posts/featured')
          .then(data => {
            this.setState({data: data.data.posts});
          })
          .catch(_ => console.log('error...'));
      }

    render() {
        const {classes} = this.props;
        return (
          <div>
            <AppBar position="fixed" color="default">
              <Toolbar>
                <Typography variant="title" color="inherit">
                  Articles
                </Typography>
              </Toolbar>
            </AppBar>
          <Grid container className={classes.root} spacing={16}>
            {this.state.data.map(e => {
              return (
                <Grid item key={e.id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.media}
                      image={e.thumbnail}
                      title={e.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="headline" component="h2">
                        {e.title}
                      </Typography>
                      <Typography component="p">
                        {e.excerpt}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <div>
                        <Link to={{
                          pathname: '/detail',
                          hash: `#${e.id}`,
                          state: {
                            content: e.content,
                            featureMedia: e.featured_media
                          }
                        }}>See more...</Link>
                      </div>
                    </CardActions>
    
                  </Card>
                </Grid>
              );
            })}
          </Grid>
          </div>
        );
    }
  }

Main.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Main);