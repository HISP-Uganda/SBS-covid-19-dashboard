import {
    Box, Table, Tbody, Td, Th, Thead, Tr, Button
} from "@chakra-ui/react";
import { useStore } from "effector-react";
import { fromPairs } from "lodash";
import { $store } from "../stores/Store";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
const StatsTable = ({ data }: { data: any }) => {
  const store = useStore($store);
  const elements: string[] = String(
    "PEn6nKhtnGg-mGk4R6i1tz9-HwcoAIH8yOC-l2CJ4fYySx9-rrvYimAHvV7-oC2I44e31Pu"
  ).split("-");
  const values = fromPairs(
    data.numerators.map((row: any) => [`${row[1]}${row[0]}`, row[2]])
  );
  return (
      <>
      <Button colorScheme="blue">
            <ReactHTMLTableToExcel
              id="test1-table-xls-button"
              className="download-table-xls-button"
              table="StatTableToXls"
              filename="Statistics table"
              sheet="tablexls"
              buttonText="Download as XLS"
            />
          </Button>
    <Box overflowY="auto" maxHeight="530px" display="flex">
      <Table
       variant="striped"
       colorScheme="blue"
       size="sm"
       id="StatTableToXls"
      >
        <Thead>
          <Tr>
            <Th>Organisation</Th>
            {/* {elements.map((e: string) => (
              <Th key={e}>{e}</Th>
            ))} */}
            <Th>No. Screened</Th>
            <Th>No. Tested +ve</Th>
            <Th>Referred for Testing</Th>
            <Th>With Symptoms</Th>
            <Th>Isolated at School</Th>
            <Th>Managed from School</Th>
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
  );
};

export default StatsTable;
