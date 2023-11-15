import "./Button.css";

const Button = () => {
  return (
    <div className="container">
      <a href="#" className="button button--piyo ">
        <div className="button__wrapper">
          <span className="button__text">SCROLL</span>
        </div>
        <div className="characterBox">
          <div className="character wakeup">
            <div className="character__face"></div>
          </div>
          <div className="character wakeup">
            <div className="character__face"></div>
          </div>
          <div className="character">
            <div className="character__face"></div>
          </div>
        </div>
      </a>
      </div>
  );
};

export default Button;
