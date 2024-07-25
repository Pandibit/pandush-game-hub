import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by relevance
        </MenuButton>
        <MenuList>
          <MenuItem>1</MenuItem>
          <MenuItem>2</MenuItem>
          <MenuItem>3</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default SortSelector;
