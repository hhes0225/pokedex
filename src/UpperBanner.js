import pikachu from './pikachu.png'
import { Link } from 'react-router-dom';


export default function UpperBanner({mode, setMode}){
    //console.log(mode)
    let buttons

    if(mode==='HOME'){
        //console.log('1')
        buttons = [<Link to="/">
                    <button className="UpperBanner-selectedbutton" id="HOME" onClick={setMode[1]}>HOME</button></Link>,
                <Link to='/about'><button className="UpperBanner-nonselectedbutton" id="ABOUT" onClick={setMode[0]}>ABOUT</button></Link>]
    }
    else{
        //console.log('2')
        buttons = [<Link to="/"><button className="UpperBanner-nonselectedbutton" id="HOME" onClick={setMode[1]}>HOME</button></Link>,
                <Link to='/about'><button className="UpperBanner-selectedbutton" id="ABOUT" onClick={setMode[0]}>ABOUT</button></Link>]
    }

    return (
        <header className="App-header">
            <span className="UpperBanner-divLeft">
                <img src={pikachu} className="App-logo" alt="logo"/> 
                <h1 className="UpperBanner-h1">Pokedex</h1>
            </span>
            <span className="UpperBanner-divRight">
                {buttons}
            </span>
      </header>
    );
}