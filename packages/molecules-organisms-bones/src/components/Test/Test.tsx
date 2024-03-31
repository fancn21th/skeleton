import { Flex, Skeleton, Switch } from "@radix-ui/themes";

export const Test = () => {
  return (
    <Flex gap="4">
      <Skeleton loading={true}>
        <Switch defaultChecked />
      </Skeleton>
      <Skeleton loading={false}>
        <Switch defaultChecked />
      </Skeleton>
    </Flex>
  );
};
