import React, { useEffect, useState } from 'react';
import { getId, informationPokemon } from '../utils';
import Loading from '../Loading/Loading';
import { InformationPokemon } from './Types';
import { BoxTitle, DivImg, FirstBlockInRightDiv, H1Pokemon, H4Pokemon, H4PokemonFB, IdPokemon, Information, InformationCard, LeftDiv, Li, PlasticCard, PokemonCard, PokemonContainer, PPokemon, PPokemonFB, RightDiv, Ul, UlFB } from './PokemonStyles';

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
                                <BoxTitle>
                                    <H1Pokemon>{name}</H1Pokemon>
                                    <IdPokemon>{getId(id)}</IdPokemon>        
                                </BoxTitle>
                                <PlasticCard>
                                    <InformationCard>
                                        <LeftDiv>
                                            <DivImg>
                                                <img src={picture} alt={name} />
                                            </DivImg>
                                        </LeftDiv>
                                        <RightDiv>
                                            <FirstBlockInRightDiv>
                                                <UlFB>
                                                    <Li>
                                                        <H4PokemonFB>base experience: </H4PokemonFB>
                                                        <PPokemonFB>{information && information.experience}</PPokemonFB>
                                                    </Li>
                                                    <Li>
                                                        <H4PokemonFB>heigh: </H4PokemonFB>
                                                        <PPokemonFB>{information && information.height}</PPokemonFB>
                                                    </Li>
                                                    <Li>
                                                        <H4PokemonFB>weight: </H4PokemonFB>
                                                        <PPokemonFB>{information && information.weight}</PPokemonFB>
                                                    </Li>
                                                </UlFB>
                                                <UlFB>
                                                    <Li>
                                                        <H4PokemonFB>abilities: </H4PokemonFB>
                                                        {
                                                            information && 
                                                                information.abilities.map( ability => (
                                                                    <PPokemonFB key={ability}>{ability}</PPokemonFB>
                                                                ))
                                                        }
                                                    </Li>
                                                </UlFB>
                                            </FirstBlockInRightDiv>
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
                                                    <H4Pokemon>type: </H4Pokemon>
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
                                </PlasticCard>
                            </Information>
                }
            </PokemonCard>
        </PokemonContainer>
    )
}

export default Pokemon;
