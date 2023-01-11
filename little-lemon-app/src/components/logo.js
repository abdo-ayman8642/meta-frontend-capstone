import logo from "../assets/6866595.png";

const Logo = () => {
  return (
    <div className="restName">
      <span>
        Little Lemon
        <img src={logo} alt="logo" className="logo" />
      </span>
      <span>Restaurant</span>
    </div>
  );
};
export default Logo;
