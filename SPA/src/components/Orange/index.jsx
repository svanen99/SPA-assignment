import Header from "../Header";
import Button from "../Button";

const Orange = ({updateFunction}) => {
    const goToHome = () => {
        updateFunction(null)
    }
    return (
        <>
        <Header fruit="Orange" />
        <div className="orange">
            Orange can be ugly, but in colours like these, it is nice. You have a good taste!
        </div>
        <Button className="home-Button" name="Home" updateFunction={goToHome} />

        </>
    )
}

export default Orange;