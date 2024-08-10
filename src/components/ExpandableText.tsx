import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const LIMIT_CHARACTERS = 300;
  if (!children) return null;
  if (children.length <= LIMIT_CHARACTERS) {
    return <Text>{children}</Text>;
  }
  const summary = expanded
    ? children
    : children.substring(0, LIMIT_CHARACTERS).concat("... ");
  return (
    <Text>
      {summary}
      <Button
        size={"sm"}
        fontWeight={"bold"}
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
