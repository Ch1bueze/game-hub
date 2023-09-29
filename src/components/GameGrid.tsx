import { useEffect, useState } from "react"
import ApiClient from "./services/Api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number,
  name: string
}

interface FetchGamesResponse{
  count: number,
  results: Game[]
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    ApiClient.get<FetchGamesResponse>("/games")
    .then(response => setGames(response.data.results))
    .catch(err => setError(err.message));
  })
  return (
    <>
    {error && <Text>{error}</Text>}
      <ul>
        {games.map(game => <li key={game.id}>{game.name}</li>)}
      </ul>
    </>
  )
}

export default GameGrid