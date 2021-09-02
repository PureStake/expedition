import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import ChartCard from "./ChartCard";
import { VictoryPie } from "victory";
import CustomPieChartLabel from "./CustomPieChartLabel";
import { useTranslation } from "react-i18next";
import _ from "lodash";

const blockTopMinerCountByAddress = (blocks: any[]) => {
  const result = _(blocks)
    .chain()
    .countBy((b: any) => b.miner)
    .map((key: string, val: number) => ({
      x: val,
      y: key,
      label: val,
    }))
    .sortBy((item: any) => item.y)
    .reverse()
    .value();
  return result;
};

interface IProps {
  blocks: any[];
  config: any;
}

const MinerStats: React.FC<IProps> = ({ blocks }) => {
  const [showDefaultPieHover, setShowDefaultPieHover] = useState(true);
  const { t } = useTranslation();
  const colors = ["#FFACFC", "#F148FB", "#7122FA", "#560A86"];

  return (
    <Grid container justify="space-evenly">
      <Grid key="uncles" item xs={12} md={4} lg={4}>
        <ChartCard title={t("Collator by address")}>
          <VictoryPie
            cornerRadius={1}
            // innerRadius={50}
            colorScale={colors}
            data={blockTopMinerCountByAddress(blocks)}
            events={[
              {
                target: "data",
                eventHandlers: {
                  onMouseOver: () => {
                    return [
                      {
                        target: "labels",
                        mutation: () => {
                          setShowDefaultPieHover(false);
                          return { active: true };
                        },
                      },
                    ];
                  },
                },
              },
            ]}
            labelComponent={
              <CustomPieChartLabel
                {...{
                  defaultActive: showDefaultPieHover
                    ? blockTopMinerCountByAddress(blocks)[0]
                    : undefined,
                }}
              />
            }
          ></VictoryPie>
        </ChartCard>
      </Grid>
    </Grid>
  );
};

export default MinerStats;
