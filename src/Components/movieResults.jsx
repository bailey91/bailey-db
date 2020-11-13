import React, { Component } from "react";
import { Card, CardColumns } from "react-bootstrap";
import noImage from "../Images/noImage.png";
//import { CSSTransition } from "react-transition-group";

//Need to also look at the browser is storing multiple images in the source of the page which can create a large cache? might have to delete these once the search has changed

class MoiveResults extends Component {
  state = {};

  render() {
    const { details, handleExpand } = this.props;

    return (
      <CardColumns>
        {details.map((detail) => (
          <div key={detail.id} className={details.length < 6 ? "realign" : null} >
            <div className={"searchResultText"}>{detail.name}</div>
            <Card
              className="resultCard"
              onClick={() => handleExpand(detail.id, detail.media_type)}
            >
              <Card.Img
                variant="top"
                className="searchResultImg"
                src={
                  detail.poster_path !== null
                    ? "https://image.tmdb.org/t/p/w500" + detail.poster_path
                    : noImage
                }
                
              />
            </Card>
          </div>
        ))}
      </CardColumns>
    );
  }
}

/*<Card.Body >
              <Card.Title>{details.name}</Card.Title>
              <Card.Text>Average user rating: {details.vote_average}</Card.Text>
            </Card.Body> */

export default MoiveResults;

/* <CardColumns>
      <Card onClick={() => this.props.onClick()}>
        <Card.Img
          variant="top"
          src={details.poster_path !== null ? this.state.poster : noImage}
        />
        <Card.Body>
          <Card.Title>{details.name}</Card.Title>
          <Card.Text>Average user rating: {details.vote_average}</Card.Text>
        </Card.Body>
      </Card>*/

//variant="top"
//className={details.poster_path !== null ? "searchResultImg" : null }
//src={"https://image.tmdb.org/t/p/w500" + details.poster_path}
