import { Spinner, Stack, Text,Box, Tooltip } from "@chakra-ui/react";
import { FC } from "react";
import { Indicator } from "../interfaces";
import { useSqlView } from "../stores/Queries";
import { formatter } from "../utils";

type func = (value: number) => string;

const ST: FC<{
  data: any;
  postfix?: string;
  color?: string;
  otherColor?: func;
  tooltip: string;
}> = ({ 
  data, 
  postfix, 
  color,
  otherColor,
 }) => {
  return (
    <Stack
      h="100%"
    >
      <Text fontSize={"0.8vw"}
       color={
        otherColor !== undefined
          ? otherColor(Number(data))
          : !!color
          ? color
          : "red"
      }
    //    fontWeight="bold"
       >
        {formatter.format(Number(data))}
        {postfix}
      </Text>
    </Stack>
  );
};

const SimpleSingleValue: FC<{
  indicator: Indicator;
  postfix?: string;
  hasProgress?: boolean;
  color?: string;
  otherColor?: func;
  processor: (...data: any[]) => any;
  tooltip?: string;
  otherArgs?: any[];
}> = ({
  indicator,
  postfix = "",
  tooltip = "",
  processor,
  color,
  otherArgs = [],
  otherColor,
}) => {
  const { isLoading, isError, isSuccess, error, data } = useSqlView(indicator);
  return (
    <Box h="100%">
      {isLoading && <Spinner />}
      {isSuccess && (
        <ST
          tooltip={tooltip}
          color={color}
          otherColor={otherColor}
          data={processor(data, ...otherArgs)}
          postfix={postfix}
        />
      )}
      {isError && <pre>{error.message}</pre>}
    </Box>
  );
};

export default SimpleSingleValue;
