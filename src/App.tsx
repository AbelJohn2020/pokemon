import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListPokemons from './components/ListPokemons/ListPokemons';
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
            pokemonData.map( pokemon => (
              <Route exact path={`/pokemon/${pokemon.id}`}>
              </Route>
            ))
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
