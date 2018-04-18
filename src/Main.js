import React, {Component} from 'react';
import axios from 'axios';

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
            console.log(data.data);
            this.setState({data: data.data.posts});
          })
          .catch(_ => console.log('error...'));
      }

    render() {
      return (
        <div>
            Main section
        </div>
      );
    }
  }
  
  export default Main;