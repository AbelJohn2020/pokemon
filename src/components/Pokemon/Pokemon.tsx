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
