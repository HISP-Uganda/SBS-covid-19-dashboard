import React from "react";
import { Box, Table, Tbody, Td, Th, Thead, Tr, Button } from "@chakra-ui/react";
import { useStore } from "effector-react";
import { fromPairs } from "lodash";
import { $store } from "../stores/Store";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const LeagueTableProcessor = ({ data }: { data: any }) => {
  const store = useStore($store);
  const elements: string[] = String(
    "uw6OMvjHWtB-nQcVI19bUv5-pn2j3e9l6Hl-joUVrbUnE5C"
  ).split("-");
  const values = fromPairs(
    data.numerators.map((row: any) => [`${row[1]}${row[0]}`, row[2]])
  );
  return <>
  <Button colorScheme="blue">
            <ReactHTMLTableToExcel
              id="test1-table-xls-button"
              className="download-table-xls-button"
              table="LeagueTableToXls"
              filename="League table"
              sheet="tablexls"
              buttonText="Download as XLS"
            />
          </Button>
          <Box overflowY="auto" maxHeight="530px" display="flex">
      <Table
       variant="striped"
       colorScheme="teal"
       size="sm"
       id="LeagueTableToXls"
      >
        <Thead>
          <Tr>
            <Th>Organisation</Th>
            {/* {elements.map((e: string) => (
              <Th key={e}>{e}</Th>
            ))} */}
            <Th>No. Of Schools - S</Th>
            <Th>No. Of Reporters - S</Th>
            <Th>No. of Schools with Reporters</Th>
            <Th>No of Schools Reporting</Th>
            <Th>% of Schools Reporting - S</Th>
          </Tr>
        </Thead>
        <Tbody>
          {store.sublevelUnits.map((ou) => (
            <Tr key={ou.id}>
              <Td>{ou.name}</Td>
              {elements.map((e: string) => (
                <Td key={`${ou.id}${e}`}>{values[`${ou.id}${e}`]}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  </>

  
};

export default LeagueTableProcessor;
