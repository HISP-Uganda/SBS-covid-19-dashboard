import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
  Spinner,
} from "@chakra-ui/react";
import { useStore } from "effector-react";
import { $store } from "../stores/Store";
import SimpleSingleValue from "./SimpleSingleValue";
import { mainDashboard } from "../stores/Indicators";
import {
  processSingleValue,
  processReportingPercentage,
} from "../stores/ProcessData";
import { useOrganizationSubLevel } from "../stores/Queries";

const LeagueTable = () => {
  const store = useStore($store);
  const { isLoading, isSuccess, isError, data, error } =
    useOrganizationSubLevel(store.selectedUnits);
  return (
    <>
      {isLoading && <Spinner />}
      {isSuccess && data && (
        <Box overflowY="auto" maxHeight="530px" display="flex">
        <Table variant="striped" colorScheme="teal" size="sm" width="40px" height="10px">
          <Thead>
            <Tr>
              <Th>Organisation</Th>
              <Th>No. of schools </Th>
              <Th>No. of reporters</Th>
              <Th>No. of schools with reporters</Th>
              <Th>No. of reports</Th>
              <Th>No. of schools reporting</Th>
              <Th>% of schools reporting </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((ou: any) => (
              <Tr key={ou.id}>
                <Td>{ou.name}</Td>
                <Td>
                  <SimpleSingleValue
                    processor={processSingleValue}
                    indicator={mainDashboard.total_schools_registered(
                      ou.id,
                      store.ougroups
                    )}
                    color="dodgerblue"
                  />
                </Td>
                <Td>
                  <SimpleSingleValue
                   processor={processSingleValue}
                   indicator={mainDashboard.users_at_school_level(
                     ou.id,
                     store.ougroups
                   )}
                   color="dodgerblue"
                  />
                </Td>
                <Td>
                  <SimpleSingleValue
                    processor={processSingleValue}
                    indicator={mainDashboard.registered_reporters(
                      ou.id,
                      store.selectedUnits, store.ougroups
                    )}
                    color="dodgerblue"
                  />
                </Td>
                <Td>
                  <SimpleSingleValue
                    processor={processSingleValue}
                    indicator={mainDashboard.schools_reporting(
                      ou.id,
                      store.period[0].format("YYYY-MM-DD"),
                      store.period[1].format("YYYY-MM-DD"),
                      store.ougroups
                    )}
                    color="dodgerblue"
                  />
                </Td>
                <Td>
                  <SimpleSingleValue
                    processor={processSingleValue}
                    indicator={mainDashboard.schools_reporting(
                      ou.id,
                      store.period[0].format("YYYY-MM-DD"),
                      store.period[1].format("YYYY-MM-DD"),
                      store.ougroups
                    )}
                    color="dodgerblue"
                  />
                </Td>
                <Td>
                  <SimpleSingleValue
                    processor={processReportingPercentage}
                    indicator={mainDashboard.report_percentage(
                      ou.id,
                      store.period[0].format("YYYY-MM-DD"),
                      store.period[1].format("YYYY-MM-DD"),
                      store.ougroups
                    )}
                    color="dodgerblue"
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        </Box>
      )}
      {isError && <Box>{error.message}</Box>}
    </>
  );
};

export default LeagueTable;
