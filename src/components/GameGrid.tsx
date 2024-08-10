import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "@hooks/useGames";
import InfiniteScroll from "react-infinite-scroll-component";
import { Fragment } from "react/jsx-runtime";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameSkeletonCard from "./GameSkeletonCard";

const GameGrid = () => {
  const { data, error, isLoading, hasNextPage, fetchNextPage } = useGames();
  if (error) return <Text>{error.message}</Text>;
  const fetchedGamesCounts =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;
  return (
    <InfiniteScroll
      dataLength={fetchedGamesCounts}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        padding={3}
      >
        {isLoading ? (
          <GameSkeletonCard length={8} />
        ) : (
          <>
            {data?.pages.map((page, index) => (
              <Fragment key={index}>
                {page?.results.map((item) => (
                  <GameCardContainer key={item.id}>
                    <GameCard game={item} />
                  </GameCardContainer>
                ))}
              </Fragment>
            ))}
          </>
        )}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
