import Header from "../Header";
import Button from "../Button";

const Yellow = ({updateFunction}) => {
    const goToHome = ()=> {
        updateFunction(null);
    }
    return (
        <>
        <Header fruit="Yellow" />
        <div className="yellow">
            Yellow is cute, like this color! Your taste is good. 
        </div>
        <Button className="home-button" name="Home" updateFunction={goToHome} />

        </>
    )
}

export default Yellow;