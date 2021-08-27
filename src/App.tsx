import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListPokemons from './components/ListPokemons/ListPokemons';
import Pokemon from './components/Pokemon/Pokemon';
import { getCharacters, propsPokemon } from './components/utils';

function App() {
  const [pokemonData, setPokemonData] = useState<propsPokemon[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCharacters()
            .then(res => {
                    if(res?.length === 0 || res === undefined) {
                        return res;
                    } else {
                        setPokemonData(res);
                        setLoading(false);
                    }
            })
            .catch(error => console.log(error));
    }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <ListPokemons pokemonData={pokemonData} loading={loading} />
          </Route>
          {
            pokemonData.map( data => (
              <Route exact path={`/pokemon/${data.id}`} key={data.id}>
                <Pokemon 
                  id={data.id} 
                  url={data.url} 
                  name={data.name} 
                  picture={data.picture} 
                />
              </Route>
            ))
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
