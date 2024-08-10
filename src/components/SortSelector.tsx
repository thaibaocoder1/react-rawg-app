import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "@state/store";

const SortSelector = () => {
  const sortGames = [
    {
      value: "",
      label: "Relevance",
    },
    {
      value: "-added",
      label: "Date added",
    },
    {
      value: "name",
      label: "Name",
    },
    {
      value: "-released",
      label: "Release date",
    },
    {
      value: "-metacritic",
      label: "Popularity",
    },
    {
      value: "-rating",
      label: "Average rating",
    },
  ];
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSelectedSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const currentSortOrder = sortGames.find((order) => order.value === sortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder ? currentSortOrder.label : "Relevance"}
      </MenuButton>
      <MenuList>
        {sortGames.map((item) => (
          <MenuItem
            onClick={() => setSelectedSortOrder(item.value)}
            key={item.value}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
