import { useState } from 'react'
import PickContainer from '../PickContainer'
import Pink from '../Pink'
import Green from '../Green'
import Orange from '../Orange'
import Yellow from '../Yellow'
import Blue from '../Blue'
import PageTitle from '../PageTitle'


const Home = () => {
    const [colorToDisplay, setcolorToDisplay] = useState();
    return (
        <>
        <PageTitle  title="Pick your favorite color!" />
        {!colorToDisplay && <PickContainer updateFunction={setcolorToDisplay} />}
        { colorToDisplay === "Pink" && <Pink updateFunction={setcolorToDisplay} />}
        { colorToDisplay === "Green" && <Green updateFunction={setcolorToDisplay} />}
        { colorToDisplay === "Orange" && <Orange updateFunction={setcolorToDisplay} />}
        { colorToDisplay === "Yellow" && <Yellow updateFunction={setcolorToDisplay} />}
        { colorToDisplay === "Blue" && <Blue updateFunction={setcolorToDisplay} />}
        </>
    )
}

export default Home;