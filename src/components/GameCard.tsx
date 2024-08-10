import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "entities/Game";
import getCroppedImageUrl from "@utils/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        height={"220px"}
        objectFit={"cover"}
      />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="large">
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
        </Heading>
        <Emoji rating={game.rating} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
