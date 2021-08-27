import React, { useEffect, useState } from 'react';
import { informationPokemon } from '../utils';
import Loading from '../Loading/Loading';
import { InformationPokemon } from './Types';

type propsData = {
    id: string,
    url: string,
    name: string,
    picture: string
}

const Pokemon = ({id, url, name, picture}: propsData) => {

    const [dataPokemon, setDataPokemon] = useState<InformationPokemon>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    useEffect(() => {
        informationPokemon(url)
            .then(res => {
                if(res && res.length === 0) {
                    return res;
                } else {
                    setIsLoading(true);
                    setDataPokemon(res);
                }
            })
            .catch( error => error)
            .finally(() => setIsLoading(false))
    }, []);

    const informationCard = () => {
        if(dataPokemon) {
            const getId = dataPokemon.id;
            const getAbilities = dataPokemon.abilities.map( ability => ability.ability.name);
            const getExperience = dataPokemon.base_experience;
            const getheight = dataPokemon.height;
            const getMoves = dataPokemon.moves.map( movements => movements.move.name);
            const getTypes = dataPokemon.types.map( species => species.type.name);
            const getWeight = dataPokemon.weight;

            return {
                id: getId,
                abilities: getAbilities,
                experience: getExperience,
                height: getheight,
                moves: getMoves,
                type: getTypes,
                weight: getWeight,
            }
        } else {
            return dataPokemon;
        }
    }

    const information = informationCard();

    return (
        <div>
            {
                isLoading
                    ?   <Loading />
                    :   <div>
                            <div>
                                <img src={picture} alt={name} />
                            </div>
                            <h1>{name}</h1>
                            <div>
                                <ul>
                                    <li>
                                        <h4>abilities: </h4>
                                        {
                                            information && 
                                                information.abilities.map( ability => (
                                                    <div key={ability}>{ability}</div>
                                                ))
                                        }
                                    </li>
                                    <li>
                                        <h4>base experience: </h4>
                                        <div>{information && information.experience}</div>
                                    </li>
                                    <li>
                                        <h4>heigh: </h4>
                                        <div>{information && information.height}</div>
                                    </li>
                                    <li>
                                        <h4>main movements: </h4>
                                        {
                                            information && 
                                                information.moves.slice(0, 8).map( move => (
                                                    <div key={move}>{move}</div>
                                                ))
                                        }
                                    </li>
                                    <li>
                                        <h4>type: </h4>
                                        {
                                            information && 
                                                information.type.map( type => (
                                                    <div key={type}>{type}</div>
                                                ))
                                        }
                                    </li>
                                    <li>
                                        <h4>weight: </h4>
                                        <div>{information && information.weight}</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
            }
        </div>
    )
}

export default Pokemon;
