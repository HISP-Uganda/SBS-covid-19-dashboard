// import React, { useRef } from "react";
// import {
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   TableCaption,
//   Box,
//   Spinner,
//   Button,
//   Flex,
// } from "@chakra-ui/react";
// import { useStore } from "effector-react";
// import { $store } from "../stores/Store";
// import { mainDashboard } from "../stores/Indicators";

// import { useSqlView } from "../stores/Queries";

// const StatisticsTable = () => {
//   const store = useStore($store);
//   const { isLoading, isError, isSuccess, error, data } = useSqlView(
//     mainDashboard.registeredReportersLeagueTable(
//       store.selectedUnits,
//       "PEn6nKhtnGg-mGk4R6i1tz9-HwcoAIH8yOC-v44UNoaMdFD",
//       5,
//       store.period[0].format("YYYY-MM-DD"),
//       store.period[1].format("YYYY-MM-DD")
//     )
//   );
//   const data1 = [["a0DfYpC2Rwl", 85412, 38],["a0DfYpC2Rwl", 812, 588]]
//   // numerators: [
//   //   ["HwcoAIH8yOC", "W0g7xrcRykI", 0],
//   //   ["PEn6nKhtnGg", "W0g7xrcRykI", 80],
//   //   ["mGk4R6i1tz9", "W0g7xrcRykI", 0],
//   // ];

//   // const results = {};
//   // data.numerators.forEach((_:any, index:any, array:any[]) => {
//   //   const key = array[index][1];
//   //   if (results[key]) {
//   //     results[key] = [array[index][2], ...results[key]];
//   //   } else {
//   //     results[key] = [array[index][2]];
//   //   }
//   // });
//   // const data1 = [];
//   // for (const [key, value] of Object.entries(results)) {
//   // //   const array: any = [key].concat(value);
//   // // data.push(array)
//   // data.push([key, ...[value]])
//   // }

//   // console.log(results)


//   return (
//     <>
//       {isLoading && <Spinner />}
//       {isSuccess && data && (
//         <Box overflowY="auto" maxHeight="530px" display="flex">
//           {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
//           <Table>
//             <Thead>
//               {/* <Tr>
//                 {data.numHeaders.map((header: any) => (
//                   <Th key={header.name}>{header.column}</Th>
//                 ))}
//               </Tr> */}
//               <Tr>
//                 <Th>Organisation</Th>
//                 {data.numerators.map((numerator: any) => (
//                   <Th key={numerator[0]}>{numerator[0]}</Th>
//                 ))}
//               </Tr>
//             </Thead>
//             <Tbody>
//               {data1.map((item: any) => (
//                   <Td key={item}>{item}</Td>
//                 ))}
//               {data1.map((row: any, index: number) => (
//                 <Tr key={index}>
//                   {row.map((r: string, i: number) => (
//                     <Td key={`${index}${i}`}>{r}</Td>
//                   ))}
//                 </Tr>
//               ))}
//             </Tbody>
//           </Table>
//         </Box>
//       )}
//       {isError && <Box>{error.message}</Box>}
//     </>
//   );
// };

// export default StatisticsTable;






// import React, { useRef } from "react";
// import {
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   TableCaption,
//   Box,
//   Spinner,
//   Button,
//   Flex,
// } from "@chakra-ui/react";
// import { useStore } from "effector-react";
// import { $store } from "../stores/Store";
// import { mainDashboard } from "../stores/Indicators";

// import {useSqlView } from "../stores/Queries";

// const StatisticsTable = () => {
//   const store = useStore($store);
//   const { isLoading, isError, isSuccess, error, data } = useSqlView(
//     mainDashboard.registeredReportersLeagueTable(
//       store.selectedUnits,
//       "PEn6nKhtnGg-mGk4R6i1tz9-HwcoAIH8yOC-v44UNoaMdFD",
//       5,
//       store.period[0].format("YYYY-MM-DD"),
//       store.period[1].format("YYYY-MM-DD")
//     )
//   );
// //   const data1 = [["a0DfYpC2Rwl", 85412, 38, 0],["a0DfYpC2Rwl", 412, 8, 7]]
//   return (
//     <>
//       {isLoading && <Spinner />}
//       {isSuccess && data && (
//         <Box overflowY="auto" maxHeight="530px" display="flex">
//           {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
//           <Table>
//             <Thead>
//             {/* <Tr>
//                 {data.numHeaders.map((header: any) => (
//                   <Th key={header.name}>{header.column}</Th>
//                 ))}
//               </Tr> */}
//               <Tr>
//               <Th>Organisation</Th>
//                 {data.numerators.map((numerator: any) => (
//                   <Th key={numerator[0]}>{numerator[0]}</Th>
//                 ))}
//               </Tr>
//             </Thead>
//             <Tbody>
//             {data.numerators.map((numerator: any) => (
//                   <Td key={numerator[1]}>{numerator[1]}</Td>
//                 ))}
//               {/* {data.numerators.map((row: string[], index: number) => (
//                 <Tr key={index}>
//                   {row.map((r: string, i: number) => (
//                     <Td key={`${index}${i}`}>{r}</Td>
//                   ))}
//                 </Tr>
//               ))} */}
//             </Tbody>
//           </Table>


//         </Box>
//       )}
//       {isError && <Box>{error.message}</Box>}
//     </>
//   );
// };



// export default StatisticsTable;







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
import { useStore } from "effector-react";
import { $store } from "../stores/Store";
import { mainDashboard } from "../stores/Indicators";

import { useSqlView } from "../stores/Queries";

const StatisticsTable = () => {
  const store = useStore($store);
  const { isLoading, isError, isSuccess, error, data } = useSqlView(
    mainDashboard.registeredReportersLeagueTable(
      store.selectedUnits,
      "PEn6nKhtnGg-mGk4R6i1tz9-HwcoAIH8yOC-v44UNoaMdFD",
      5,
      store.period[0].format("YYYY-MM-DD"),
      store.period[1].format("YYYY-MM-DD")
    )
  );
  // const data1 = [["a0DfYpC2Rwl", 85412, 38, 0],["a0DfYpC2Rwl", 812, 588, 8474]]
  // numerators: [
  //   ["HwcoAIH8yOC", "W0g7xrcRykI", 0],
  //   ["PEn6nKhtnGg", "W0g7xrcRykI", 80],
  //   ["mGk4R6i1tz9", "W0g7xrcRykI", 0],
  // ];


  console.log(data)
  const results = {};
  data.numerators.forEach((_:any, index:any, array:any[]) => {
    const key = array[index][1];
    if (results[key]) {
      results[key] = [array[index][2], ...results[key]];
    } else {
      results[key] = [array[index][2]];
    }
  });
  const data1 = [];
  for (const [key, value] of Object.entries(results)) {
    const array = value ? value : [];
  data.push([key, ...[value]] );
  }
  
  return (
    <>
      {isLoading && <Spinner />}
      {isSuccess && data && (
        <Box overflowY="auto" maxHeight="530px" display="flex">
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <Table>
            <Thead>
              {/* <Tr>
                {data.numHeaders.map((header: any) => (
                  <Th key={header.name}>{header.column}</Th>
                ))}
            //   </Tr> */}
              <Tr>
                <Th>Organisation</Th>
                {data.numerators.map((numerator: any) => (
                  <Th key={numerator[0]}>{numerator[0]}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {/* {data1.map((item: any) => (
                  <Td key={item}>{item}</Td>
                ))} */}
              {/* {data.map((row: any, index: number) => (
                <Tr key={index}>
                  {row.map((r: string, i: number) => (
                    <Td key={`${index}${i}`}>{r}</Td>
                  ))}
                </Tr>
              ))} */}
            </Tbody>
          </Table>
        </Box>
      )}
      {isError && <Box>{error.message}</Box>}
    </>
  );
};

export default StatisticsTable;





