import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatform from "@hooks/usePlatform";
import usePlatforms from "@hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "@state/store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatform = usePlatform(selectedPlatformId);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((item) => (
          <MenuItem
            onClick={() => setSelectedPlatformId(item.id)}
            key={item.id}
          >
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
