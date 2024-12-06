import { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import "./SimilarProducts.css";

import ContentWrapper from "../components/ContentWrapper.jsx";
export const Carousel = ({ similarprodct }) => {
  const navigte = useNavigate();
  /*const carouselContainer = useRef();

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 10)
        : container.scrollLeft + (container.offsetWidth + 4);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };*/

  /*
              <BsFillArrowLeftCircleFill
              className="carouselLeftNav arrow"
              onClick={() => navigation("left")}
            />
            <BsFillArrowRightCircleFill
              className="carouselRightNav arrow"
              onClick={() => navigation("right")}
            />
  */
  
  return (
    <>
      {similarprodct ? (
        <div className="carousel">
          <ContentWrapper>

            <div className="carouselItems">
              {similarprodct.map((prodct) => {
                return (
                  <>
                    <div
                      key={prodct.id}
                      className="carouselItem"
                      onClick={() => navigte(`/products/${prodct.id}`)}
                    >
                      <div className="padreImg">
                        <img src={prodct.thumbnail} />
                      </div>
                      <div className="textBlock">
                        <span className="title">{`${
                          prodct.title.length > 13
                            ? prodct.title.slice(0, 13) +
                              prodct.title.slice(13, -1)
                            : prodct.title
                        }`}</span>
                        <span className="price">{`$${prodct.price}`}</span>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </ContentWrapper>
        </div>
      ) : (
        <h2>Nothing to show</h2>
      )}
    </>
  );
};
