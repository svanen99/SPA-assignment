import Header from "../Header";
import Button from "../Button";


const Pink = ({ updateFunction }) => {
  const goToHome = () => {
    updateFunction(null);
  };

  return (
    <>
        <div className="pink">
            Pink is the superior colour. It is made for champions and if this is your favorite colour, then you are the chosen one. You can do anything your heart decires and there is no end to your possibilites. you. are. the. one. 
        </div>
      <Button className="home-button" name="Home" updateFunction={goToHome} />


    </>
  );
};

export default Pink;
