import React from "react";
import { Box, Spinner } from "@chakra-ui/react";
import { useStore } from "effector-react";
import { mainDashboard } from "../stores/Indicators";
import { $store } from "../stores/Store";

import { useSqlView } from "../stores/Queries";
import LeagueTableProcessor from "./LeagueTableProcessor";
const LeaguesTable = () => {
  const store = useStore($store);
  const { isLoading, isError, isSuccess, error, data } = useSqlView(
    mainDashboard.registeredReportersLeagueTable(
      store.selectedUnits,
      "uw6OMvjHWtB-nQcVI19bUv5-pn2j3e9l6Hl-joUVrbUnE5C",
      parseInt(store.selectedLevel, 10) + 1,
      store.period[0].format("YYYY-MM-DD"),
      store.period[1].format("YYYY-MM-DD")
    )
  );

  return (
    <>
      {isLoading && <Spinner />}
      {isSuccess && data && <LeagueTableProcessor data={data} />}
      {isError && <Box>{error.message}</Box>}
    </>
  );
};

export default LeaguesTable;
