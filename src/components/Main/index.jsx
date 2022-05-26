import React, { useEffect, useState } from "react";
import Card from "../Card";
import "./index.scss";

const BASE_URL = "https://pokeapi.co/api/v2";
export default function Main() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchAllPokemon = async () => {
            const response = await fetch(BASE_URL + "/pokemon");
            const json = await response.json();
            return json.results;
        };

        const fetchPokemonDetail = async (pokemonName) => {
            const response = await fetch(`${BASE_URL}/pokemon/${pokemonName}`);
            const json = await response.json();
            return json;
        };

        fetchAllPokemon().then((res) => {
            Promise.all(
                res.map(async (pokemon) => {
                    const detail = await fetchPokemonDetail(pokemon.name);
                    return {
                        title: pokemon.name,
                        image: detail.sprites.front_default,
                    };
                })
            ).then((result) => {
                setData(result);
            });
        });
    }, []);

    return (
        <div className="card-container">
            {data.map((d) => (
                <Card {...d} key={d.name} />
            ))}
        </div>
    );
}
