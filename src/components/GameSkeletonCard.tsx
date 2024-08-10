import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

interface Props {
  length: number;
}
const GameSkeletonCard = ({ length }: Props) => {
  return Array.from(new Array(length)).map((_, index) => (
    <GameCardContainer key={index}>
      <Card>
        <Skeleton height="220px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </GameCardContainer>
  ));
};

export default GameSkeletonCard;
