import React from "react";
import BigNumber from "bignumber.js";
import { hexToNumber } from "@etclabscore/eserialize";
import { Grid } from "@material-ui/core";
import ChartCard from "../ChartCard";
import { VictoryAxis, VictoryBar, VictoryChart } from "victory";
import { useTranslation } from "react-i18next";

const config = {
  blockTime: 12, // seconds
  blockHistoryLength: 100,
  chartHeight: 300,
  chartWidth: 400,
};

const customTickFormat = (tick: any, precision: any) => {
  return tick.toFixed(precision);
};

const blockMapGasUsed = (block: any) => {
  return {
    x: hexToNumber(block.number),
    y:
      block.gasUsed !== 0 ? new BigNumber(block.gasUsed).dividedBy(1000000) : 0,
  };
};

const gasUsedPerBlockTransactions = (block: any) => {
  let yValue;
  const gasUsed = hexToNumber(block.gasUsed);
  const txCount = block.transactions.length;
  if (txCount === 0) {
    yValue = 0;
  } else {
    yValue = gasUsed / txCount;
  }

  return {
    x: hexToNumber(block.number),
    y: yValue,
  };
};

const blockMapTransactionCount = (block: any) => {
  return {
    x: hexToNumber(block.number),
    y: block.transactions.length ? block.transactions.length : 0,
  };
};

interface IProps {
  blocks: any[];
  victoryTheme?: any;
}

const StatCharts: React.FC<IProps> = ({ blocks, victoryTheme }) => {
  const { t } = useTranslation();
  return (
    <Grid item container>
      <Grid key="txChart" item xs={12} md={4} lg={4}>
        <ChartCard title={t("Transaction Count")}>
          <VictoryChart
            height={config.chartHeight}
            width={config.chartWidth}
            theme={victoryTheme as any}
          >
            <VictoryBar data={blocks.map(blockMapTransactionCount)} />
            <VictoryAxis
              dependentAxis
              tickFormat={(tick) => customTickFormat(tick, 1)}
            />
            <VictoryAxis tickFormat={(tick) => customTickFormat(tick, 0)} />
          </VictoryChart>
        </ChartCard>
      </Grid>
      <Grid key="gasUsed" item xs={12} md={4} lg={4}>
        <ChartCard title={t("Gas Used (Millions)")}>
          <VictoryChart
            height={config.chartHeight}
            width={config.chartWidth}
            theme={victoryTheme as any}
          >
            <VictoryBar data={blocks.map(blockMapGasUsed)} />
            <VictoryAxis
              dependentAxis
              tickFormat={(tick) => customTickFormat(tick, 2)}
            />
            <VictoryAxis tickFormat={(tick) => customTickFormat(tick, 0)} />
          </VictoryChart>
        </ChartCard>
      </Grid>
      <Grid key="collators" item xs={12} md={4} lg={4}>
        <ChartCard title={t("Gas Used per Tx")}>
          <VictoryChart
            height={config.chartHeight}
            width={config.chartWidth}
            theme={victoryTheme as any}
          >
            <VictoryBar data={blocks.map(gasUsedPerBlockTransactions)} />
            <VictoryAxis
              dependentAxis
              tickFormat={(tick) => customTickFormat(tick, 0)}
            />
            <VictoryAxis tickFormat={(tick) => customTickFormat(tick, 0)} />
          </VictoryChart>
        </ChartCard>
      </Grid>
    </Grid>
  );
};

export default StatCharts;
