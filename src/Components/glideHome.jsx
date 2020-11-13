import React, { Component } from "react";
import Glide from "@glidejs/glide";
//import { Card, Tab, Tabs} from "react-bootstrap";
import noImage from "./Images/noImage.png";

class Carousel2 extends Component { 
  state = {};
  render() {
    const { details, mediaType, handleExpand } = this.props;

    function Glider() {
      React.useEffect(() => {
        new Glide(".home" + mediaType, {
          type: "carousel",
          startAt: 0,
          //focusAt: 0,
          perTouch: 3,
          perView: 4,
          autoplay: 3500,
        }).mount();
      }, []);
      return (
        <div className={"glide home" + mediaType}>
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {details.map((detail) => (
                <li
                  key={detail.id}
                  id={detail.id}
                  className="glide__slide"
                  onClick={() => handleExpand(detail.id, mediaType)}
                  
                  style={
                    mediaType === "person"
                      ? {
                          backgroundImage: detail.profile_path ? 
                            "url(https://image.tmdb.org/t/p/w500" +
                            detail.profile_path +
                            ")" : "url(" + noImage + ")"
                        }
                      : {
                          backgroundImage: detail.poster_path ? 
                            "url(https://image.tmdb.org/t/p/w500" +
                            detail.poster_path +
                            ")" : "url(" + noImage + ")"
                        }
                  }
                >
                  <div className="glideText">
                    {mediaType === "movie" ? detail.title : detail.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="glide">
            <div className="glide__track" data-glide-el="track"></div>

            <div className="glide__arrows homeGlideArrorws" data-glide-el="controls">
              <button
                className="glide__arrow glide__arrow--left"
                data-glide-dir="<"
              >
                Prev
              </button>
              <button
                className="glide__arrow glide__arrow--right"
                data-glide-dir=">"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      );
    }

    /* {details.slice(0,6).map((detail) => (<li className="glide__slide" style={{
                    backgroundImage:
                      "url(https://image.tmdb.org/t/p/w500" +
                      detail.file_path +
                      ")",
                  }}>1</li>))}*/

    return (
      <div className="homeGlideContainer">
        <Glider />
      </div>
    );
  }
}

/* <div className={"glide multi" + num}>
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <li className="glide__slide">1</li>
              <li className="glide__slide">2</li>
              <li className="glide__slide">3</li>
              <li className="glide__slide">4</li>
            </ul>
          </div>

          <div className="glide">
            <div className="glide__track" data-glide-el="track"></div>
            <div className="glide__bullets" data-glide-el="controls[nav]">
              <button className="glide__bullet" data-glide-dir="=0"></button>
              <button className="glide__bullet" data-glide-dir="=1"></button>
              <button className="glide__bullet" data-glide-dir="=2"></button>
            </div>
          </div>
        </div>
 */

//this.props.details !== null ? this.props.data.results.map((details) => (<li className="glide__slide">{details.title}</li>)):null}
// https://moduscreate.com/blog/everything-you-need-to-know-about-refs-in-react/ have a look at might explain how to do it

export default Carousel2;
