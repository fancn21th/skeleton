import { Flex, Card as RCard, Box, Text } from "@radix-ui/themes";
import styles from "./Card.module.css";

export const Card = () => {
  return (
    <RCard size="5">
      <Flex gap="3" align="center">
        <Box width="64px" height="64px">
          <img
            className={styles.img}
            src="https://images.unsplash.com/photo-1700981293090-f78b500fc92c?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Box>
        <Box>
          <Text as="div" size="2" weight="light">
            主标题
          </Text>
          <Text as="div" size="2" weight="light">
            副标题
          </Text>
        </Box>
      </Flex>
    </RCard>
  );
};
