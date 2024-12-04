import "./404.css";

import ContentWrapper from "../components/ContentWrapper.jsx";

export function ErrorPage() {
  return (
    <div className="pageNotFound">
      <ContentWrapper>
        <span className="bigText">404</span>
        <span className="smallText">Page not found!</span>
      </ContentWrapper>
    </div>
  );
}
