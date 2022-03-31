
import React from "react";
import { Box } from "@chakra-ui/react";
import { Select,  } from "antd";
import { FC, useEffect, useState } from "react";
import { useOrgUnitLevel } from "../stores/Queries";
import { $store } from "../stores/Store";
import { useStore } from "effector-react";
import { setOulevels } from "../stores/Events";

export const OrgUnitLevels: FC<{}> = () => {
  const { isError, isSuccess, error, data } = useOrgUnitLevel();
  const store = useStore($store);
  const { Option } = Select;

  return (
    <>
      {isSuccess && (
        <Select
          placeholder = "Select Org Unit Level"
          allowClear = {true}
          style={{ width:"200px" }}
          size="large"
          onChange={(value: string) => {
            setOulevels(value);
            console.log(value);
          }}
        >
          {data.organisationUnitLevels.map((item) => (
            <Option key={item.id} value={item.id}>
              {item.name}
            </Option>
          ))}
        </Select>
      )}
      {isError && <Box>{error.message}</Box>}
    </>
  );
};
