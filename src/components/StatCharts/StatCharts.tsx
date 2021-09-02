import React from "react";
import BigNumber from "bignumber.js";
import { hexToNumber } from "@etclabscore/eserialize";
import { Grid } from "@material-ui/core";
import ChartCard from "../ChartCard";
import { VictoryBar, VictoryChart } from "victory";
import { useTranslation } from "react-i18next";

const config = {
  blockTime: 12, // seconds
  blockHistoryLength: 100,
  chartHeight: 200,
  chartWidth: 400,
};

const blockMapGasUsed = (block: any) => {
  return {
    x: hexToNumber(block.number),
    y: new BigNumber(block.gasUsed).dividedBy(1000000),
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
    y: block.transactions.length,
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
      <Grid key="txChart" item xs={12} md={6} lg={3}>
        <ChartCard title={t("Transaction count")}>
          <VictoryChart
            height={config.chartHeight}
            width={config.chartWidth}
            theme={victoryTheme as any}
          >
            <VictoryBar data={blocks.map(blockMapTransactionCount)} />
          </VictoryChart>
        </ChartCard>
      </Grid>
      <Grid key="gasUsed" item xs={12} md={6} lg={3}>
        <ChartCard title={t("Gas Used (Millions)")}>
          <VictoryChart
            height={config.chartHeight}
            width={config.chartWidth}
            theme={victoryTheme as any}
          >
            <VictoryBar data={blocks.map(blockMapGasUsed)} />
          </VictoryChart>
        </ChartCard>
      </Grid>
      <Grid key="uncles" item xs={12} md={6} lg={3}>
        <ChartCard title={t("Gas Used per Tx")}>
          <VictoryChart
            height={config.chartHeight}
            width={config.chartWidth}
            theme={victoryTheme as any}
          >
            <VictoryBar data={blocks.map(gasUsedPerBlockTransactions)} />
          </VictoryChart>
        </ChartCard>
      </Grid>
    </Grid>
  );
};

export default StatCharts;
