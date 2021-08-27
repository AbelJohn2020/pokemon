import React, { useEffect, useState } from 'react';
import { informationPokemon } from '../utils';
import Loading from '../Loading/Loading';
import { InformationPokemon } from './Types';
import { DivImg, H1Pokemon, H4Pokemon, Information, InformationCard, LeftDiv, Li, PokemonCard, PokemonContainer, PPokemon, RightDiv, Ul } from './PokemonStyles';

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
        <PokemonContainer>
            <PokemonCard>
                {
                    isLoading
                        ?   <Loading />
                        :   <Information>
                                <H1Pokemon>{name}</H1Pokemon>
                                <InformationCard>
                                    <LeftDiv>
                                        <DivImg>
                                            <img src={picture} alt={name} />
                                        </DivImg>
                                    </LeftDiv>
                                    <RightDiv>
                                        <Ul>
                                            <Li>
                                                <H4Pokemon>base experience: </H4Pokemon>
                                                <PPokemon>{information && information.experience}</PPokemon>
                                            </Li>
                                            <Li>
                                                <H4Pokemon>heigh: </H4Pokemon>
                                                <PPokemon>{information && information.height}</PPokemon>
                                            </Li>
                                            <Li>
                                                <H4Pokemon>weight: </H4Pokemon>
                                                <PPokemon>{information && information.weight}</PPokemon>
                                            </Li>
                                            <Li>
                                                <H4Pokemon>abilities: </H4Pokemon>
                                                {
                                                    information && 
                                                        information.abilities.map( ability => (
                                                            <PPokemon key={ability}>{ability}</PPokemon>
                                                        ))
                                                }
                                            </Li>
                                        </Ul>
                                        <Ul>
                                            <Li>
                                                <H4Pokemon>main movements: </H4Pokemon>
                                                {
                                                    information && 
                                                        information.moves.slice(0, 8).map( move => (
                                                            <PPokemon key={move}>{move}</PPokemon>
                                                        ))
                                                }
                                            </Li>
                                            <Li>
                                                <h4>type: </h4>
                                                {
                                                    information && 
                                                        information.type.map( type => (
                                                            <PPokemon key={type}>{type}</PPokemon>
                                                        ))
                                                }
                                            </Li>
                                        </Ul>
                                    </RightDiv>
                                </InformationCard>
                            </Information>
                }
            </PokemonCard>
        </PokemonContainer>
    )
}

export default Pokemon;
