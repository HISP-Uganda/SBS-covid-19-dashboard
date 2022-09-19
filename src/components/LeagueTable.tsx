import React, { useRef } from "react";
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
  Button,
  Flex,
} from "@chakra-ui/react";
//import { DownloadTableExcel } from 'react-export-table-to-excel';
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { useStore } from "effector-react";
import { $store } from "../stores/Store";
import SimpleSingleValue from "./SimpleSingleValue";
import { mainDashboard } from "../stores/Indicators";
import {
  processSingleValue,
  processReportingPercentage,
} from "../stores/ProcessData";
import "../style.css"

const LeagueTable = () => {
  const store = useStore($store);

  return (
    <>
      <Button colorScheme="blue">
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button"
          table="table-to-xls"
          filename="League table"
          sheet="tablexls"
          buttonText="Download as XLS"
        />
      </Button>
      <Flex alignContent="center"> 
      <Box borderColor='tomato' height="500" overflowX='scroll'  overflowY='scroll' >
        

        <Table variant="striped" colorScheme="teal" size="sm" id="table-to-xls" overflow="5px" >
          <Thead>
            <Tr>
              <Th>Organisation</Th>
              <Th>No. of schools </Th>
              <Th>No. of reporters</Th>
              <Th>No. of schools with reporters</Th>
              <Th>No. of schools reporting</Th>
              
              {/* <Th>No. of reports</Th> */}
              
              <Th>% of schools reporting </Th>
            </Tr>
          </Thead>
          <Tbody>
            {store.sublevelUnits.map((ou: any) => (
              <Tr key={ou.id}>
                <Td>{ou.name}</Td>
                <Td>
                  <SimpleSingleValue
                    processor={processSingleValue}
                    indicator={mainDashboard.totalSchoolsRegistered(
                      parseInt(store.selectedLevel, 10) + 1,
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
                      parseInt(store.selectedLevel, 10) + 1,
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
                      parseInt(store.selectedLevel, 10) + 1,
                      ou.id,
                      store.ougroups,
                      store.period[0].format("YYYY-MM-DD"),
                      store.period[1].format("YYYY-MM-DD"),
                    )}
                    color="dodgerblue"
                  />
                  </Td>
                  <Td>
                  <SimpleSingleValue
                    processor={processSingleValue}
                    indicator={mainDashboard.schools_reporting(
                      parseInt(store.selectedLevel, 10) + 1,
                      ou.id,
                      store.period[0].format("YYYY-MM-DD"),
                      store.period[1].format("YYYY-MM-DD"),
                      store.ougroups,
                    )}
                    color="dodgerblue"
                  />
                </Td>
                
               
                {/* <Td>
                  <SimpleSingleValue
                    processor={processSingleValue}
                    indicator={mainDashboard.reporting_schools(
                      
                      ou.id,
                      store.period[0].format("YYYY-MM-DD"),
                      store.period[1].format("YYYY-MM-DD"),
                      store.ougroups
                    )}
                    color="dodgerblue"
                  />
                </Td> */}
                <Td>
                  <SimpleSingleValue
                    processor={processReportingPercentage}
                    indicator={mainDashboard.report_percentage(
                      parseInt(store.selectedLevel, 10) + 1,
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
      </Flex>
    </>
  );
};

export default LeagueTable;
