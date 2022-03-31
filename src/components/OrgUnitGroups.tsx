import React from "react";
import { Box } from "@chakra-ui/react";
import { Select,  } from "antd";
import { FC, useEffect, useState } from "react";
import { useUserOrgUnitGroup } from "../stores/Queries";
import { $store } from "../stores/Store";
import { useStore } from "effector-react";
import { setOugroups } from "../stores/Events";

export const OrgUnitGroups: FC<{}> = () => {
  const { isError, isSuccess, error, data } = useUserOrgUnitGroup();
  const store = useStore($store);
  const { Option } = Select;

  return (
    <>
      {isSuccess && (
        <Select
          placeholder="Select Org Unit Group"
          style={{ width:"200px", maxHeight: 400,}}
          allowClear = {true}
          size="large"
          onChange={(value: string) => {
            setOugroups(value);
            console.log(value);
          }}
        >
          {data.organisationUnitGroups.map((item) => (
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
