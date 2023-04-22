import { useParams } from "react-router-dom";
import { Link, useOutletContext } from "react-router-dom";

export default function PokemonDetail(){
    const { name } = useParams(); // 동적인 파라미터 값을 가져옴
    const {pokemonEach}=useOutletContext();
    const thisPokemon = pokemonEach.filter((pokename)=>(pokename.name===name))[0]

    if (!thisPokemon) {
        return <div>Loading...</div>;
    }
    
    const imgSrc= thisPokemon.sprites.other['official-artwork'].front_default
    const type= thisPokemon.types[0].type.name
    const pokecard="PokemonDetail-card "
    const typecss='type-'
    let totalStat=0;

    return(
        <div>
        <div className="PokemonDetail-container">
            <div className={pokecard+typecss+type}>
                <div className="PokemonDetail-divLeft">
                    <h3>{thisPokemon.name.toUpperCase()}</h3>
                    <img src={imgSrc} className="PokemonDetail-img"/>
                    {thisPokemon.types.map(element => {
                        // console.log(element.type.name)
                        const detailType=element.type.name
                        const detailcss ='PokemonDetail-type '
                        return (<button className={detailcss+typecss+detailType}>{element.type.name}</button>);
                    })}
                </div>
                <div className="PokemonDetail-divRight">
                    <h1>Base Stats</h1>
                    {thisPokemon.stats.map(element => {
                        // console.log(element.stat.name)
                        const statName=element.stat.name
                        const baseStat=element.base_stat
                        totalStat+=baseStat

                        return (
                            <div>
                                <text className="Status">{statName}: </text>
                                <text>{baseStat}</text>
                            </div>
                        );
                    })}
                    <div>
                                <text>Total: </text>
                                <text>{totalStat}</text>
                    </div>
                    <div>
                                <text>-</text>
                    </div>
                    <div>
                                <text>Height: </text>
                                <text>{thisPokemon.height}</text>
                    </div>
                    <div>
                                <text>Weight: </text>
                                <text>{thisPokemon.weight}</text>
                    </div>
                    
                </div>
            </div>
            
        </div>
        <div className="PokemonDetail-backDiv">
            <Link to = "/" className="PokemonDetail-back"><div >← back</div></Link>
        </div></div>
    );
}