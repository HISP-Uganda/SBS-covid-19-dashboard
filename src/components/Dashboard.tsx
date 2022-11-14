import React from "react";
import {
  Grid,
  GridItem,
  Button,
  Box,
  Flex,
  HStack,
  Image,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
  Select,
  useColorModeValue,
  chakra,
  HTMLChakraProps,
  VStack,
} from "@chakra-ui/react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import PieChart from "./PieChart";
import Donut from "./Donut";
import Speed from "./Speed";
import OrgUnitTreeHierachy from "./OrgUnitHierachy";
import { OrgUnitGroups } from "./OrgUnitGroups";
import { OrgUnitLevels } from "./OrgUnitLevels";
import moment from "moment";
import { useStore } from "effector-react";
import { useState } from "react";
import { $store } from "../stores/Store";
import { DatePicker } from "antd";
import SingleValue from "./SingleValue";
import BarGraphs from "./BarGraphs";
import useInterval from "react-useinterval";
import VisualizeMap from "./VisualizeMap";
import SpiderChart from "./SpiderChart";
import { BarGraph } from "./BarGraph";
import { mainDashboard } from "../stores/Indicators";
import {
  processSingleValue,
  processSingleRowValue,
  processPieData,
  calculateNoScreened,
  processReportingPercentage,
  processDonutData,
  processSpiderData,
  processTestData,
  processSingleValuePercentage,
} from "../stores/ProcessData";
import { HTMLMotionProps, motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { changePeriod } from "../stores/Events";

type Merge<P, T> = Omit<P, keyof T> & T;

type MotionBoxProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;

export const MotionBox: React.FC<MotionBoxProps> = motion(chakra.div);

const { RangePicker } = DatePicker;
const Dashboard = () => {
  const handle = useFullScreenHandle();
  const store = useStore($store);
  const [date, setDate] = useState<[any, any]>([moment(), moment()]);
  const [selectedDate, setSelectedDate] = useState<[string, string]>([
    date[0].format("YYYY-MM-DD"),
    date[1].format("YYYY-MM-DD"),
  ]);
  const [index, setIndex] = useState<number>(0);
  const [current, setCurrent] = useState<number>(0);
  const templateColumns = useBreakpointValue({
    base: "100%",
    lg: "repeat(12, 1fr)",
  });
  const templateRows = useBreakpointValue({
    base: "100%",
    md: "repeat(16, 1fr)",
  });
  const bg = useColorModeValue("white", "#2D3748");
  const realBg = useColorModeValue("gray.300", "gray.900");
  const yColor = useColorModeValue("black", "white");

  const maps = [
    <MotionBox
      key="screened"
      h="100%"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 1 }}
    >
      <VisualizeMap
        indicator={mainDashboard.screened_events(
          store.selectedUnits,
          store.currentLevel + 1,
          store.period[0].format("YYYY-MM-DD"),
          store.period[1].format("YYYY-MM-DD"),
          store.ougroups
        )}
        title="Total Screened"
      />
    </MotionBox>,
    <MotionBox
      key="symptoms"
      h="100%"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 1 }}
    >
      <VisualizeMap
        indicator={mainDashboard.screened_with_covid_symptoms_map(
          store.selectedUnits,
          store.currentLevel + 1,
          store.period[0].format("YYYY-MM-DD"),
          store.period[1].format("YYYY-MM-DD"),
          store.ougroups
        )}
        title=" Number Screened with COVID-19 Symptoms"
      />
    </MotionBox>,
    <MotionBox
      key="symptoms"
      h="100%"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 1 }}
    >
      <VisualizeMap
        indicator={mainDashboard.cumulativePositiveMap(
          store.selectedUnits,
          store.currentLevel + 1,
          store.period[0].format("YYYY-MM-DD"),
          store.period[1].format("YYYY-MM-DD"),
          store.ougroups
        )}
        title=" Cumulative Positives"
      />
    </MotionBox>,
    <MotionBox
      key="symptoms"
      h="100%"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 1 }}
    >
      <VisualizeMap
        indicator={mainDashboard.withSymptoms(
          store.selectedUnits,
          store.currentLevel + 1,
          store.period[0].format("YYYY-MM-DD"),
          store.period[1].format("YYYY-MM-DD"),
          store.ougroups
        )}
        title="Number With Symptoms"
      />
    </MotionBox>,
  ];

  const incrementMaps = () => setIndex((s: number) => (s + 1) % maps.length);
  useInterval(incrementMaps, 1000 * 30);
  return (
    <FullScreen handle={handle}>
      <Stack bg={realBg} p="5px">
        <HStack h="60px">
          <Image
            src="https://raw.githubusercontent.com/HISP-Uganda/covid-dashboard/master/src/images/Coat_of_arms_of_Uganda.svg"
            alt="Ministry of Health"
            boxSize="48px"
          />
          <Flex minWidth="max-content">
            <Text fontSize="3xl" fontWeight="bold" color="blue.500">
              SBS COVID-19 Dashboard
            </Text>
          </Flex>
          <Spacer />
          {handle.active ? (
            <Button onClick={handle.exit}>Exit fullscreen</Button>
          ) : (
            <Button onClick={handle.enter}>Enter fullscreen</Button>
          )}
          <RangePicker
            style={{ height: "67%" }}
            value={store.period}
            onChange={changePeriod}
          />
          <OrgUnitTreeHierachy />
          <OrgUnitLevels />
          <OrgUnitGroups />
        </HStack>
        <Grid
          overflow="auto"
          h={[
            "auto",
            "auto",
            `calc(100vh - ${handle.active ? "70px" : "118px"})`,
          ]}
          w="calc(100vw - 10px)"
          templateColumns={templateColumns}
          templateRows={templateRows}
          gap={1}
        >
          <GridItem colSpan={[1, 1, 8]} rowSpan={15}>
            <Grid
              templateRows="repeat(6, 1fr)"
              templateColumns="repeat(6, 1fr)"
              gap={1}
              h="100%"
            >
              <GridItem colSpan={3} bg="gray.100" h="100%">
                <Grid h="100%" bg="gray.200">
                  <GridItem bg="white">
                    <Stack spacing={0} h="100%" w="100%">
                      <Flex
                        alignItems="center"
                        bg="gray.200"
                        h="30px"
                        alignContent="center"
                        justifyItems="center"
                      >
                        <Text
                          pl="25px"
                          h="20px"
                          textTransform="uppercase"
                          fontWeight="bold"
                          fontSize="0.8vw"
                          color="blue.500"
                          isTruncated
                        >
                          MTRAC REGISTRATIONS
                        </Text>
                      </Flex>
                      <HStack
                        justifyItems="space-around"
                        justifyContent="space-around"
                        w="100%"
                        h="100%"
                        flex={1}
                      >
                        <SingleValue
                          processor={processSingleValue}
                          indicator={mainDashboard.total_schools_registered(
                            store.selectedUnits,
                            store.ougroups
                          )}
                          title="Number of Schools"
                          color="dodgerblue"
                        />
                        <SingleValue
                          processor={processSingleValue}
                          indicator={mainDashboard.registered_reporters1(
                            store.selectedUnits,
                            store.ougroups,
                            store.period[0].format("YYYY-MM-DD"),
                            store.period[1].format("YYYY-MM-DD")
                          )}
                          title="Schools with Reg Reporters"
                          color="dodgerblue"
                        />
                        <SingleValue
                          processor={processSingleValue}
                          indicator={mainDashboard.UsersAtSchoolLevel(
                            store.selectedUnits,
                            store.ougroups,
                            store.period[0].format("YYYY-MM-DD"),
                            store.period[1].format("YYYY-MM-DD")
                          )}
                          title="Reg Users at School level"
                          color="dodgerblue"
                        />
                      </HStack>
                    </Stack>
                  </GridItem>
                </Grid>
              </GridItem>
              <GridItem bg="white" colSpan={3}>
                <Stack direction="column" spacing={0} h="100%" w="100%">
                  <Flex
                    alignItems="center"
                    bg="gray.200"
                    h="30px"
                    alignContent="center"
                    justifyItems="center"
                  >
                    <Text
                      pl="25px"
                      h="20px"
                      textTransform="uppercase"
                      fontWeight="bold"
                      fontSize="0.8vw"
                      color="blue.500"
                      isTruncated
                    >
                      REPORTING RATES ({store.period[0].format("YYYY-MM-DD")} -{" "}
                      {store.period[1].format("YYYY-MM-DD")})
                    </Text>
                  </Flex>
                  <HStack
                    flex={1}
                    justifyItems="space-around"
                    justifyContent="space-around"
                    h="100%"
                    w="100%"
                  >
                    <SingleValue
                      processor={processSingleValue}
                      indicator={mainDashboard.schools_reporting1(
                        store.selectedUnits,
                        store.period[0].format("YYYY-MM-DD"),
                        store.period[1].format("YYYY-MM-DD"),
                        store.ougroups
                      )}
                      title="Schools Reporting"
                      color="lightseagreen"
                    />
                    <Box w="350px">
                      <Speed
                        processor={processReportingPercentage}
                        indicator={mainDashboard.reportPercentage(
                          store.selectedUnits,
                          store.period[0].format("YYYY-MM-DD"),
                          store.period[1].format("YYYY-MM-DD"),
                          store.ougroups
                        )}
                        title="% of Schools Reporting"
                      />
                    </Box>
                  </HStack>
                </Stack>
              </GridItem>

              <GridItem
                // direction="column"
                justifyContent="center"
                colSpan={8}
                bg="white"
                justifyItems="center"
                w="99.4%"
              >
                <Stack spacing={0} h="100%">
                  <Flex
                    alignItems="center"
                    bg="gray.200"
                    h="30px"
                    alignContent="center"
                    justifyItems="center"
                  >
                    <Text
                      pl="25px"
                      h="20px"
                      textTransform="uppercase"
                      fontWeight="bold"
                      fontSize="0.8vw"
                      color="blue.500"
                      isTruncated
                    >
                      SCREENING ({store.period[0].format("YYYY-MM-DD")} -{" "}
                      {store.period[1].format("YYYY-MM-DD")})
                    </Text>
                  </Flex>
                  <Flex
                    direction="row"
                    justifyContent="space-around"
                    justifyItems="center"
                    alignItems="center"
                    h="100%"
                    flex={1}
                  >
                    {/* <Box w="350px">
                      <SingleValue
                        processor={calculateNoScreened}
                        indicator={mainDashboard.no_screened(
                          store.selectedUnits,
                          store.period[0].format("YYYY-MM-DD"),
                          store.period[1].format("YYYY-MM-DD"),
                          store.ougroups
                        )}
                        title="screening events"
                        color="darkgreen"
                      />
                    </Box> */}
                    <Box w="350px">
                      <SingleValue
                        processor={processSingleValue}
                        indicator={mainDashboard.screened_with_covid_symptoms(
                          store.selectedUnits,
                          store.period[0].format("YYYY-MM-DD"),
                          store.period[1].format("YYYY-MM-DD"),
                          store.ougroups
                        )}
                        title="# with Symptoms"
                      />
                    </Box>
                    {/* <Box w="350px">
                      <SingleValue
                        processor={processSingleValuePercentage}
                        indicator={mainDashboard.percentage_with_symptoms(
                          store.selectedUnits,
                          store.period[0].format("YYYY-MM-DD"),
                          store.period[1].format("YYYY-MM-DD"),
                          store.ougroups
                        )}
                        postfix="%"
                        title="% with Symptoms"
                      />
                    </Box> */}
                    <Box w="350px">
                      <SingleValue
                        processor={processSingleValue}
                        indicator={mainDashboard.no_referred_testing(
                          store.selectedUnits,
                          store.period[0].format("YYYY-MM-DD"),
                          store.period[1].format("YYYY-MM-DD"),
                          store.ougroups
                        )}
                        color="darkgreen"
                        title="No. Referred for Testing"
                      />
                    </Box>
                    <Box w="350px">
                      <SingleValue
                        processor={processSingleValue}
                        indicator={mainDashboard.numberTested(
                          store.selectedUnits,
                          store.period[0].format("YYYY-MM-DD"),
                          store.period[1].format("YYYY-MM-DD"),
                          store.ougroups
                        )}
                        title="Number Tested"
                      />
                    </Box>
                    <Box w="350px">
                      <SingleValue
                        processor={processSingleValuePercentage}
                        indicator={mainDashboard.percentage_referred_for_testing(
                          store.selectedUnits,
                          store.period[0].format("YYYY-MM-DD"),
                          store.period[1].format("YYYY-MM-DD"),
                          store.ougroups
                        )}
                        postfix="%"
                        title="% Referred for testing"
                      />
                    </Box>
                    <Box w="350px">
                      <SingleValue
                        processor={processSingleValue}
                        indicator={mainDashboard.number_tested_positive(
                          store.selectedUnits,
                          store.period[0].format("YYYY-MM-DD"),
                          store.period[1].format("YYYY-MM-DD"),
                          store.ougroups
                        )}
                        title="No. Reported +ve"
                      />
                    </Box>
                    <Box w="350px">
                      <SingleValue
                        processor={processSingleValuePercentage}
                        indicator={mainDashboard.positivityRate(
                          store.selectedUnits,
                          store.period[0].format("YYYY-MM-DD"),
                          store.period[1].format("YYYY-MM-DD"),
                          store.ougroups
                        )}
                        postfix="%"
                        title="Positivity Rate"
                      />
                    </Box>
                    {/* <Box w="350px">
                      <SingleValue
                        processor={processSingleValue}
                        indicator={mainDashboard.cumulativeReferredForTesting(
                          store.selectedUnits,
                          store.period[0].format("YYYY-MM-DD"),
                          store.period[1].format("YYYY-MM-DD"),
                          store.ougroups
                        )}
                        title="C. Referred for Testing"
                      />
                    </Box> */}
                  </Flex>
                </Stack>
              </GridItem>

              <GridItem rowSpan={5} colSpan={5} bg="white" h="100%" w="100%">
                <Stack spacing={0} h="100%">
                  <Flex
                    alignItems="center"
                    bg="gray.200"
                    h="40px"
                    alignContent="center"
                    justifyItems="center"
                  >
                    <Text
                      pl="25px"
                      h="20px"
                      textTransform="uppercase"
                      fontWeight="bold"
                      fontSize="0.8vw"
                      color="blue.500"
                      isTruncated
                    >
                      PERFORMANCE BY REGION AND OVER TIME ( Last 14 Days /
                      Weeks)
                    </Text>
                  </Flex>
                  <BarGraphs yColor={yColor} bg={bg} />
                </Stack>
              </GridItem>
              <GridItem rowSpan={5} bg="white" h="100%" w="100%">
                <Stack h="100%" spacing={0}>
                  <SingleValue
                    processor={processSingleValuePercentage}
                    indicator={mainDashboard.percentageTested(
                      store.selectedUnits,
                      store.period[0].format("YYYY-MM-DD"),
                      store.period[1].format("YYYY-MM-DD"),
                      store.ougroups
                    )}
                    postfix="%"
                    title="% Tested"
                  />
                  <SingleValue
                    processor={processSingleValue}
                    indicator={mainDashboard.cumulative_positive(
                      store.selectedUnits,
                      store.period[0].format("YYYY-MM-DD"),
                      store.period[1].format("YYYY-MM-DD"),
                      store.ougroups
                    )}
                    title="Cum. Positives"
                  />
                  <SingleValue
                    processor={processSingleValuePercentage}
                    indicator={mainDashboard.cumulativePositivityRate(
                      store.selectedUnits,
                      store.period[0].format("YYYY-MM-DD"),
                      store.period[1].format("YYYY-MM-DD"),
                      store.ougroups
                    )}
                    postfix="%"
                    title="Cum. Positivity Rate"
                  />
                  <Flex
                    alignItems="center"
                    bg="gray.200"
                    h="100px"
                    alignContent="center"
                    justifyItems="center"
                    pb={4}
                  >
                    <Text
                      pl="25px"
                      h="30px"
                      textTransform="uppercase"
                      fontWeight="bold"
                      fontSize="0.7vw"
                      color="blue.500"
                    >
                      Care <br />({store.period[0].format("YYYY-MM-DD")} -{" "}
                      {store.period[1].format("YYYY-MM-DD")})
                    </Text>
                  </Flex>
                  <SingleValue
                    processor={processSingleValue}
                    indicator={mainDashboard.casesHospitalized(
                      store.selectedUnits,
                      store.period[0].format("YYYY-MM-DD"),
                      store.period[1].format("YYYY-MM-DD"),
                      store.ougroups
                    )}
                    title="Cases Hospitalized"
                  />
                  {/* <SingleValue
                    processor={processSingleValuePercentage}
                    indicator={mainDashboard.isolated_students(
                      store.selectedUnits,
                      store.period[0].format("YYYY-MM-DD"),
                      store.period[1].format("YYYY-MM-DD"),
                      store.ougroups
                    )}
                    postfix="%"
                    title="% Isolated at school"
                  /> */}
                  <SingleValue
                    processor={processSingleValue}
                    indicator={mainDashboard.casesInHomeBasedCare(
                      store.selectedUnits,
                      store.period[0].format("YYYY-MM-DD"),
                      store.period[1].format("YYYY-MM-DD"),
                      store.ougroups
                    )}
                    title="Home Based Care"
                    color="goldenrod"
                  />
                  <SingleValue
                    processor={processSingleValue}
                    indicator={mainDashboard.managed_from_school(
                      store.selectedUnits,
                      store.period[0].format("YYYY-MM-DD"),
                      store.period[1].format("YYYY-MM-DD"),
                      store.ougroups
                    )}
                    title="School Based Care"
                  />
                </Stack>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem colSpan={[1, 4]} rowSpan={15}>
            <Grid templateRows="repeat(6, 1fr)" h="100%" gap={1}>
              <GridItem rowSpan={2}>
                <Grid
                  templateColumns="repeat(2, 1fr)"
                  templateRows="repeat(2, 1fr)"
                  gap={1}
                  h="100%"
                >
                  <GridItem rowSpan={2} bg="gray.200">
                    <Stack w="100%" h="100%" spacing={0}>
                      <Flex
                        alignItems="center"
                        bg="gray.200"
                        h="30px"
                        alignContent="center"
                        justifyItems="center"
                      >
                        <Text
                          pl="25px"
                          h="20px"
                          textTransform="uppercase"
                          fontWeight="bold"
                          fontSize="0.8vw"
                          color="blue.500"
                          isTruncated
                        >
                          # Referred for Testing by region
                        </Text>
                      </Flex>

                      <PieChart
                        processor={processPieData}
                        indicator={mainDashboard.number_isolated_school(
                          store.selectedUnits,
                          store.sublevel,
                          store.period[0].format("YYYY-MM-DD"),
                          store.period[1].format("YYYY-MM-DD"),
                          store.ougroups
                        )}
                        args={[store.sublevels]}
                      />
                    </Stack>
                  </GridItem>
                  <GridItem rowSpan={2} bg="gray.200">
                    <Stack w="100%" h="100%" spacing={0}>
                      <Flex
                        alignItems="center"
                        bg="gray.200"
                        h="30px"
                        alignContent="center"
                        justifyItems="center"
                      >
                        <Text
                          pl="25px"
                          h="20px"
                          textTransform="uppercase"
                          fontWeight="bold"
                          fontSize="0.8vw"
                          color="blue.500"
                          isTruncated
                        >
                          Ebola Related
                        </Text>
                      </Flex>
                      {/* <SpiderChart
                        processor={processSpiderData}
                        indicator={mainDashboard.per_positives_in_school_based_care(
                          store.selectedUnits,
                          store.sublevel,
                          store.period[0].format("YYYY-MM-DD"),
                          store.period[1].format("YYYY-MM-DD")
                        )}
                        args={[store.sublevels]}
                      /> */}
                      <VStack
                        justifyItems="space-around"
                        justifyContent="space-around"
                        w="100%"
                        h="100%"
                        flex={1}
                        bg="white"
                      >
                        <SingleValue
                          processor={processSingleValue}
                          indicator={mainDashboard.absentFromSchool(
                            store.selectedUnits,
                            store.period[0].format("YYYY-MM-DD"),
                            store.period[1].format("YYYY-MM-DD"),
                            store.ougroups,
                          )}
                          title="No. Absent From School"
                          color="blue"
                        />
                        <SingleValue
                          processor={processSingleValue}
                          indicator={mainDashboard.evdRelatedSymptoms(
                            store.selectedUnits,
                            store.period[0].format("YYYY-MM-DD"),
                            store.period[1].format("YYYY-MM-DD"),
                            store.ougroups,
                          )}
                          title="No. with EVD Related Symptoms"
                          color="dodgerblue"
                        />
                        <SingleValue
                          processor={processSingleValue}
                          indicator={mainDashboard.withFevers(
                            store.selectedUnits,
                            store.period[0].format("YYYY-MM-DD"),
                            store.period[1].format("YYYY-MM-DD"),
                            store.ougroups,
                          )}
                          title="No. with Fevers"
                          color="green"
                        />
                      </VStack>
                    </Stack>
                  </GridItem>
                </Grid>
              </GridItem>
              <GridItem rowSpan={4} bg={bg}>
                {maps[index]}
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem colSpan={12} bg={bg} justifyItems="center" w="100%">
            <Flex flex={1} alignItems="center" justifyContent="center">
              <Marquee pauseOnHover speed={100}>
                <HStack h="100%" w="100%">
                  <SingleValue
                    processor={processSingleValuePercentage}
                    direction="row"
                    indicator={mainDashboard.positivityRate(
                      store.selectedUnits,
                      store.period[0].format("YYYY-MM-DD"),
                      store.period[1].format("YYYY-MM-DD"),
                      store.ougroups
                    )}
                    postfix="%"
                    title="Positivity Rate"
                  />
                  <SingleValue
                    processor={processSingleValue}
                    direction="row"
                    indicator={mainDashboard.screened_with_covid_symptoms(
                      store.selectedUnits,
                      store.period[0].format("YYYY-MM-DD"),
                      store.period[1].format("YYYY-MM-DD"),
                      store.ougroups
                    )}
                    title="Number with Symptoms"
                    color="red"
                  />
                  <SingleValue
                    processor={processSingleRowValue}
                    direction="row"
                    indicator={mainDashboard.no_referred_testing(
                      store.selectedUnits,
                      store.period[0].format("YYYY-MM-DD"),
                      store.period[1].format("YYYY-MM-DD"),
                      store.ougroups
                    )}
                    title="Number referred for testing"
                    color="darkgreen"
                  />
                  <SingleValue
                    processor={processSingleRowValue}
                    direction="row"
                    indicator={mainDashboard.no_isolated_at_school(
                      store.selectedUnits,
                      store.period[0].format("YYYY-MM-DD"),
                      store.period[1].format("YYYY-MM-DD"),
                      store.ougroups
                    )}
                    title="Number Isolated at School"
                    color="goldenrod"
                  />
                  <SingleValue
                    processor={processSingleValue}
                    direction="row"
                    indicator={mainDashboard.number_tested_positive(
                      store.selectedUnits,
                      store.period[0].format("YYYY-MM-DD"),
                      store.period[1].format("YYYY-MM-DD"),
                      store.ougroups
                    )}
                    title="No. Reported positive"
                    color="red"
                  />
                  <SingleValue
                    processor={processSingleRowValue}
                    direction="row"
                    indicator={mainDashboard.cases_manages_from_school(
                      store.selectedUnits,
                      store.period[0].format("YYYY-MM-DD"),
                      store.period[1].format("YYYY-MM-DD"),
                      store.ougroups
                    )}
                    title="Covid Cases Managed from school"
                    color="red"
                  />
                </HStack>
              </Marquee>
              <Box>
                <Image
                  src="https://raw.githubusercontent.com/HISP-Uganda/covid-dashboard/master/src/images/logo.png"
                  alt="Ministry of Health"
                  w="100%"
                  maxWidth="110px"
                  h="auto"
                />
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Stack>
    </FullScreen>
  );
};

export default Dashboard;
