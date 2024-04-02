import Header from "../Header";
import Button from "../Button";

const Blue = ({ updateFunction }) => {
  const goToHome = () => {
    updateFunction(null);
  };

  return (
    <>
      <Header fruit="Blue" />
      <div className="blue">
        Blue is alright, but mostly in shades like this. Your taste is ok.. 
      </div>
      <Button className="home-button" name="Home" updateFunction={goToHome} />

    </>
  );
};

export default Blue;
