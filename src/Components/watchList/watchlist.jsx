import React, { Component } from "react";
import { CardColumns } from "react-bootstrap";
//import axios from "axios";
import MoiveResults from "../movieResults";

class WatchList extends Component {
  state = {};

  // this component is no longer used it runs throught movieResults now!

  /*getUserWatchList() {
    axios.get(`/get_watch_list/${this.props.userId}`).then((response) => {
      console.log(response);
    });
  }*/

  render() {
    const {userWatchList} = this.props;
    console.log(this.props.userWatchList);
    return (
      <CardColumns>
        {userWatchList.map((list) => ( 
          <MoiveResults
            key={list.id}
            details={list}
            onClick={() => this.props.handleExpand(list)}
          />
        ))}
      </CardColumns>
    );
  }
}

export default WatchList;

/*
  <CardColumns>
        {userWatchList.map((list) => ( 
          <MoiveResults
            key={list.id}
            details={list}
            onClick={() => this.props.handleExpand(list)}
          />
        ))}
      </CardColumns>
    );*/
