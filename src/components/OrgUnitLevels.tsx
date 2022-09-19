import { Box } from "@chakra-ui/react";
import { Select } from "antd";
import { useStore } from "effector-react";
import { useDataEngine } from "@dhis2/app-runtime";

import { setSelectedLevel, setSublevelUnits } from "../stores/Events";
import { useOrgUnitLevel } from "../stores/Queries";
import { $store } from "../stores/Store";

export const OrgUnitLevels = () => {
  const engine = useDataEngine();
  const { isError, isSuccess, error, data } = useOrgUnitLevel();
  const store = useStore($store);
  const { Option } = Select;

  const onOuChange = async (value: string) => {
    setSelectedLevel(value);
    const level = parseInt(value, 10) - parseInt(store.selectedUnitLevel, 10);
    if (value) {
      const {
        units: { organisationUnits },
      }: any = await engine.query({
        units: {
          resource: `organisationUnits/${store.selectedUnits}.json`,
          params: {
            fields: "id,name",
            level,
            paging: false,
          },
        },
      });
      setSublevelUnits(organisationUnits);
    }
  };

  return (
    <>
      {isSuccess && (
        <Select
          placeholder="Select Org Unit Level"
          allowClear={true}
          style={{ width: "200px" }}
          size="large"
          value={store.selectedLevel}
          onChange={onOuChange}
        >

        {<Option>Select Org Unit Level</Option>}
          {data.organisationUnitLevels.map((item: any) => (
            <Option key={item.id} value={String(item.level)}>
              {item.name}
            </Option>
          ))}
        </Select>
      )}
      {isError && <Box>{error.message}</Box>}
    </>
  );
};
