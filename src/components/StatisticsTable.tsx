import { Box, Spinner } from "@chakra-ui/react";
import { useStore } from "effector-react";
import { mainDashboard } from "../stores/Indicators";
import { $store } from "../stores/Store";
import StatsTable from "./StatsTable";

import { useSqlView } from "../stores/Queries";
import React from "react";

const StatisticsTable = () => {
  const store = useStore($store);
  const { isLoading, isError, isSuccess, error, data } = useSqlView(
    mainDashboard.registeredReportersLeagueTable(
      store.selectedUnits,
      "l2CJ4fYySx9-HwcoAIH8yOC-rrvYimAHvV7-mGk4R6i1tz9-oC2I44e31Pu",
      parseInt(store.selectedLevel, 10) + 1,
      // console.log(parseInt(store.selectedLevel, 10) + 1),
      store.period[0].format("YYYY-MM-DD"),
      store.period[1].format("YYYY-MM-DD")
    )
  );

  return (
    <>
      {isLoading && <Spinner />}
      {isSuccess && data && <StatsTable data={data} />}
      {isError && <Box>{error.message}</Box>}
    </>
  );
};

export default StatisticsTable;
