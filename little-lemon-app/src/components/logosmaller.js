import logo from "../assets/6866595.png";

const Logosmaller = () => {
  return (
    <div className="restNameSmaller">
      <span>
        Little Lemon
        <img src={logo} alt="logo" className="logoSmaller" />
      </span>
      <span>Restaurant</span>
    </div>
  );
};
export default Logosmaller;
