import { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import "./SimilarProducts.css";

import ContentWrapper from "../components/ContentWrapper.jsx";
export const Carousel = ({ similarprodct }) => {
  const carouselContainer = useRef();
  const navigte = useNavigate();

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      {similarprodct ? (
        <div className="carousel">
          <ContentWrapper>
            <BsFillArrowLeftCircleFill
              className="carouselLeftNav arrow"
              onClick={() => navigation("left")}
            />
            <BsFillArrowRightCircleFill
              className="carouselRightNav arrow"
              onClick={() => navigation("right")}
            />
            <div className="carouselItems" ref={carouselContainer}>
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
