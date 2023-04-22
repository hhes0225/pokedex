import React from 'react';
import {Link, Outlet, useNavigate, useOutletContext} from 'react-router-dom'

export default function ContentHome(){
    const {pokemonEach, offsetObj, limit, total}=useOutletContext();

    const showPrev=()=>{
        if(offsetObj.offset-20>=0){
            offsetObj.setOffset(offsetObj.offset - limit)
        }
    }
    const showNext=()=>{
        if(offsetObj.offset+20<total){
            offsetObj.setOffset(offsetObj.offset + limit)
        }
    }

    const showFirst=()=>{
        offsetObj.setOffset(0)
    }
    const showLast=()=>{
        console.log(total)
        offsetObj.setOffset(total-20)
    }

    if(pokemonEach.length===0){
        return <div>Loading...</div>;
    }


    return (
        <div className='ContentArea'>
            {/* pokemon thumbnail part */}
            <div className='ContentHome-thumbnailArea'>
                {
                    pokemonEach.map((pokemon, index)=>{
                        const pokemonNumber=pokemon.id
                        const pokemonName=pokemon.name
                        const imageUrl=pokemon.sprites.front_default

                        let pokemonType=pokemon.types[0].type.name
                        const buttonStyle = 'ContentHome-pokemonThumbnail type-'

                        return(
                            <Link to={"pokemon/"+pokemonName} className={buttonStyle+pokemonType}>
                                <button key={index} className={buttonStyle+pokemonType+' thumbnailBtn'}>
                                    <div className='ContentHome-thumbnailText'>
                                        <div>#{pokemonNumber}</div>
                                        <div className='PokemonThumbnail-name'>{pokemon.name}</div>
                                    </div>
                                    <div className='thumbnailImgDiv'>
                                        <img src={imageUrl} className='PokemonThumbnail-img'/>
                                    </div>
                                </button>
                            </Link>);
                    })
                }
            </div>
            {/* prev, next button & page part */}
            <div className='ContentHome-buttonDiv'>
                <div className='ContentHome-leftButton'>
                    <button onClick={showFirst} className='ContentHome-buttons left'>First Page</button>
                    <button onClick={showPrev} className='ContentHome-buttons left'>Prev</button>
                </div>
                <div className='ContentHome-centerText'>
                    {parseInt(offsetObj.offset/20)+1} / {parseInt(total/20)}
                </div>
                <div className='ContentHome-rightButton'>
                    <button onClick={showNext} className='ContentHome-buttons right'>Next</button>
                    <button onClick={showLast} className='ContentHome-buttons right'>Last Page</button>
                </div>
            </div>
        </div>
    );
    
}