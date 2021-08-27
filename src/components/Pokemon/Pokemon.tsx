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
                                {/* <ul>
                                    {

                                    }
                                </ul> */}
                            </div>
                        </div>
            }
        </div>
    )
}

export default Pokemon;
