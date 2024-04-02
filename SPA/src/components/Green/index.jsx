import Header from "../Header";
import Button from "../Button";
import Image from "../../assets/Image";

const Green = ({ updateFunction }) => {
  const goToHome = () => {
    updateFunction(null);
  };

  return (
    <>
      <Header fruit="Green" />
      <div className="green">
        Green is top two out of all of the colours. Look at this, it is beautiful. You have amazing taste. 
      </div>
      <Button className="home-button" name="Home" updateFunction={goToHome} />
      <Image />

    </>
  );
};

export default Green;
