"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Collapse } from "antd";

const { Panel } = Collapse;

export default function Home() {
  const [usersDepart, setUsersDepart] = useState<DepartmentSummary>({});

  const ApiData = async () => {
    try {
      const res = await axios.get("Test2/api");
      console.log("Data Status:", res.status, res.statusText);

      if (res.status !== 200) {
        console.log("Data failed:", res.status, res.statusText);
        return;
      }

      const Modata = await res.data;
      console.log("OK Modata::", Modata);
      setUsersDepart(Modata);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    ApiData();
  }, []);

  return (
    <div>
      <div className="mt-4">
        <Collapse accordion>
          {Object.entries(usersDepart).map(([department, result]) => (
            <Panel header={department} key={department}>
              <p className="text-lg font-medium"> Gender :</p>
              <div className="pl-24">
                <p>Male: {result.male}</p>
                <p>Female: {result.female}</p>
              </div>

              <p className="text-lg font-medium">Age Range :</p>
              <div className="pl-24">
                <p>Age Range: {result.ageRange}</p>{" "}
              </div>

              <p className="text-lg font-medium">Hair Colors:</p>
              <div className="pl-24">
                <ul>
                  {Object.entries(result.hair).map(([color, count]) => (
                    <li key={color}>
                      {color}: {count}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-lg font-medium">Addresses:</p>
              <div className="pl-24">
                <ul>
                  {Object.entries(result.addressUser).map(
                    ([name, postalCode]) => (
                      <li key={name}>
                        {name}: {postalCode}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
  );
}
