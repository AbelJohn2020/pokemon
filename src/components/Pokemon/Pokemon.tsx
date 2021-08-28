import React, { useEffect, useState } from 'react';
import { getId, informationPokemon } from '../utils';
import Loading from '../Loading/Loading';
import { InformationPokemon } from './Types';
import { BoxMoves, BoxTitle, BoxTypes, DivImg, DivPPokemonSB, DivPPokemonTB, FirstBlockInRightDiv, H1Pokemon, H4Pokemon, H4PokemonFB, IdPokemon, Information, InformationCard, LeftDiv, Li, PlasticCard, PokemonCard, PokemonContainer, PPokemonFB, PPokemonSB, RightDiv, SecondBlockInRightDiv, Ul, UlFB } from './PokemonStyles';
import { ContainerStat, GraphicStat, PlasticContainerStat, PStat, StatTitle } from './PokemonStatsStyles';

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
            const getStats = dataPokemon.stats.map( stats => {
                const get_base_stats = Math.floor(stats.base_stat/15);
                const arr_stats_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
                return {
                    name: stats.stat.name,
                    base_stat: get_base_stats,
                    max_stat: arr_stats_numbers,
                }
            })

            return {
                id: getId,
                abilities: getAbilities,
                experience: getExperience,
                height: getheight,
                moves: getMoves,
                type: getTypes,
                weight: getWeight,
                stats: getStats,
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
                                            <PlasticContainerStat>
                                                <StatTitle>Stats</StatTitle>
                                                <ContainerStat>
                                                    {
                                                        information && 
                                                            information.stats.map(stats => (
                                                                <div key={stats.name}>
                                                                    <GraphicStat>
                                                                        {
                                                                            stats.max_stat.map(number => (
                                                                                <div 
                                                                                    key={number} 
                                                                                    className={(number >= stats.base_stat+1) ? 'global stat' : 'stat propertyPokemon' }
                                                                                >
                                                                                </div>
                                                                            ))
                                                                        }
                                                                    </GraphicStat>
                                                                    <PStat>{stats.name}</PStat>
                                                                </div>
                                                            ))
                                                    }
                                                </ContainerStat>
                                            </PlasticContainerStat>
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
                                            <SecondBlockInRightDiv>
                                                <Ul>
                                                    <Li>
                                                        <H4Pokemon>type: </H4Pokemon>
                                                        <BoxTypes>
                                                            {
                                                                information && 
                                                                    information.type.map( type => (
                                                                        <DivPPokemonSB key={type}>
                                                                            <PPokemonSB>{type}</PPokemonSB>
                                                                        </DivPPokemonSB>
                                                                    ))
                                                            }
                                                        </BoxTypes>
                                                    </Li>
                                                </Ul>
                                            </SecondBlockInRightDiv>
                                            <SecondBlockInRightDiv>
                                                <Ul>
                                                    <Li>
                                                        <H4Pokemon>main movements: </H4Pokemon>
                                                        <BoxMoves>
                                                            {
                                                                information && 
                                                                    information.moves.slice(0, 9).map( move => (
                                                                        <DivPPokemonTB key={move}>
                                                                            <PPokemonSB>{move}</PPokemonSB>
                                                                        </DivPPokemonTB>
                                                                    ))
                                                            }
                                                        </BoxMoves>
                                                    </Li>
                                                </Ul>
                                            </SecondBlockInRightDiv>
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
