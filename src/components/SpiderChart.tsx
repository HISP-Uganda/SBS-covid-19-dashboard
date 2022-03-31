import { Box, Flex, Spinner } from "@chakra-ui/react";
import { FC } from "react";
import Plot from "react-plotly.js";
import { Indicator } from "../interfaces";
import { useSqlView } from "../stores/Queries";
const SpiderChart: FC<{
  indicator: Indicator;
  processor: (data: any, ...args: any[]) => any;
  args: any[];
}> = ({ indicator, processor, args }) => {
  const { isLoading, isError, isSuccess, error, data } = useSqlView(indicator);
  return (
    <Flex flex={1}>
      {isLoading && <Spinner />}
      {isSuccess && (
        <Plot
          data={processor(data, ...args)}
          layout = {{
            polar: {
              radialaxis: {
                visible: false,
                range: [0, 100]
              }
            },
            showlegend: false
          }}
          style={{ width: "100%", height: "100%" }}
          config={{ displayModeBar: false, responsive: true }}
        />
      )}

      {isError && <Box>{error.message}</Box>}
    </Flex>
  );
};

export default SpiderChart;




