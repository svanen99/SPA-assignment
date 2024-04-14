import Header from "../Header";
import Button from "../Button";

const Blue = ({ updateFunction }) => {
  const goToHome = () => {
    updateFunction(null);
  };

  return (
    <>
      <div className="blue">
        The color blue is a color that is associated with inteligens, peace and trust. And is also a very boring color. 
      </div>
      <Button className="home-button" name="Home" updateFunction={goToHome} />
      <img src="../../public/blue.png" alt="blue picture"/>

    </>
  );
};

export default Blue;
