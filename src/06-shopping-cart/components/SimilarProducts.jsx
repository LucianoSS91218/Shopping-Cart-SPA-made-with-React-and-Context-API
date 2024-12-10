.carousel .contentWrapper {
  position: relative;
}

.carousel .carouselLeftNav,
.carouselRightNav {
  font-size: 30px;
  color: black;
  position: absolute;
  top: 12%;
  transform: translateY(-220%);
  cursor: pointer;
  opacity: 0.5;
  z-index: 1;
  display: block;
}

.carousel .carouselLeftNav {
  left: 30px;
}

.carousel .carouselRightNav {
  right: 85px;
}

.carousel .carouselItems {
  display: flex;
  gap: 13px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  max-width: 700px;
}

.carousel .carouselItems .carouselItem {
  width: calc(23% - 34px);
  cursor: pointer;
}

.carousel .carouselItems .carouselItem .padreImg {
  position: relative;
  /*cuando cambias los px o % se te puede mover las letras y quedar descentradas con
 respecto a la imagen*/
  width: 135px;
  height: 155px;
  padding: 5px;
}

.carousel .carouselItems .carouselItem .padreImg img {
  width: 90%;
  height: 95%;
  object-fit: contain;
}

.carousel .carouselItems .carouselItem .textBlock {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.carousel .carouselItems .carouselItem .textBlock .title {
  font-size: 20px;
  margin-bottom: 7px;
  line-height: 24px;
  color: white;
}

.carousel .carouselItems .carouselItem .textBlock .price {
  font-size: 16px;
  opacity: 0.5;
}

/* media query for arrows */

@media (min-width: 300px) and (max-width: 358px) {
  #octv {
    width: 100%;
  }

  .carousel .carouselLeftNav {
    left: 28px;
  }

  .carousel .carouselRightNav {
    right: 18px;
  }
}

@media (min-width: 359px) and (max-width: 391px) {
  #octv {
    width: 90%;
  }

  .carousel .carouselLeftNav {
    left: 30px;
  }

  .carousel .carouselRightNav {
    right: 20px;
  }
}

@media (min-width: 410px) and (max-width: 412px) {
  #octv {
    width: 100%;
  }

  .carousel .carouselLeftNav {
    left: 30px;
  }

  .carousel .carouselRightNav {
    right: 43px;
  }
}

@media (min-width: 413px) and (max-width: 415px) {
  #octv {
    width: 57%;
  }

  .carousel .carouselLeftNav {
    left: 30px;
  }

  .carousel .carouselRightNav {
    right: 46px;
  }
}

@media (min-width: 428px) and (max-width: 431px) {
  #octv {
    width: 95%;
  }

  .carousel .carouselLeftNav {
    left: 30px;
  }

  .carousel .carouselRightNav {
    right: 60px;
  }
}

/* media query for carousel */

@media (min-width: 300px) and (max-width: 391px) {
  .carousel .carouselItems {
    max-width: 330px;
  }

  .carousel .carouselItems .carouselItem {
    width: 114px;
  }
}

@media (min-width: 390px) and (max-width: 391px) {
  .carousel .carouselItems {
    max-width: 265px;
  }

  .carousel .carouselItems .carouselItem {
    width: 120px;
  }
}

@media (min-width: 400px) and (max-width: 431px) {
  .carousel .carouselItems {
    max-width: 266px;
  }

  .carousel .carouselItems .carouselItem {
    width: 121px;
  }
}

@media (min-width: 460px) and (max-width: 540px) {
  .carousel .carouselLeftNav {
    left: 30px;
  }

  .carousel .carouselRightNav {
    right: 33px;
  }

  .carousel .carouselItems {
    max-width: 400px;
  }

  .carousel .carouselItems .carouselItem {
    width: 122px;
  }
}
