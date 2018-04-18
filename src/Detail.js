import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import ReactHtmlParser from 'react-html-parser';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    width: "100%",
    textAlign: "center"
  }),
  paper: {
    textAlign: "left",
    padding: 16,
  },
  paperContainer: {
    maxWidth: 1200,
    display: "inline-block"
  },
  head: {
    width: "100%",
    textAlign: "center"
  }
});

class Detail extends Component {
  
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { classes } = this.props;
    const data = this.props.location.state.content;
    const featureMedia = this.props.location.state.featureMedia;
    return (
      <div>
        <AppBar position="fixed" color="default">
              <Toolbar>
                <Typography variant="title" color="inherit">
                  Detail
                </Typography>
              </Toolbar>
            </AppBar>
      <div className={classes.root} style={{marginTop: 64}}>
        <div className={classes.paperContainer}>
        <Paper className={classes.paper} elevation={4}>
          <div className={classes.head}>
            <img src={featureMedia.url} style={{height: 300, marginBottom: 16, display: "inline-block"}}/>
          </div>
          {
            data.map((e, index)=> (
                <div key={index}>
                  <Typography gutterBottom >{ ReactHtmlParser(e.text) }</Typography>
                </div>
              )
            )
          }
        </Paper>
        </div>
      </div>
      </div>
    );
  }
}
  
  export default withStyles(styles)(Detail);