import Button from '../Button'

const PickContainer = ({ updateFunction }) => {
    return (
        <div className='container'>
            <p className='options'>Here are your options:</p>
            <Button className="pink" name="Pink" updateFunction={updateFunction}/>
            <Button className="green" name="Green" updateFunction={updateFunction}/>
            <Button className="orange" name="Orange" updateFunction={updateFunction}/>
            <Button className="yellow" name="Yellow" updateFunction={updateFunction}/>
            <Button className="blue" name="Blue" updateFunction={updateFunction}/>
        </div>
    )
}

export default PickContainer;
