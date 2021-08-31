import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListPokemons from './components/ListPokemons/ListPokemons';
import Navbar from './components/Navbar/Navbar';
import Pokemon from './components/Pokemon/Pokemon';
import { getCharacters, propsPokemon } from './components/utils';

function App() {
  const [pokemonData, setPokemonData] = useState<propsPokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

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
            .catch(error => alert(`${error}: Error to connecting to server`));
    }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            {
              pokemonData 
                ? <ListPokemons pokemonData={pokemonData} loading={loading} /> 
                : <h1>Error to connecting to the server</h1>
            }
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
