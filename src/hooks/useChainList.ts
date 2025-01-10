// import { useEffect } from "react";
// import { uniqBy } from "lodash";
import { IChain as Chain } from "../models/chain";
import React from "react";
import { useTranslation } from "react-i18next";

declare var process: {
  env: {
    REACT_APP_MOONBASEAPI: string;
    REACT_APP_MOONRIVERAPI: string;
    REACT_APP_MOONBEAMAPI: string;
  };
};

export default function () {
  const { t } = useTranslation();
  const [chains, setChains] = React.useState<Chain[]>([
    {
      name: "Westend AssetHub",
      network: t("testnet"),
      rpc: ["https://westend-asset-hub-eth-rpc.polkadot.io/"],
    },
  ]);

  // uncomment once we add 'chain list provider' concept. This list blows.

  // useEffect(() => {
  //   if (chains === undefined) {
  //     fetch("https://chainid.network/chains.json")
  //       .then((r) => r.json())
  //       .then((chainIdNetwork) => {
  //         const filteredChains = chainIdNetwork.filter((c: Chain) => {
  //           if (c.rpc.length === 0) {
  //             return false;
  //           }
  //           return true;
  //         });
  //         if (chains) {
  //           setChains(mergeChainSets(chains, filteredChains));
  //         } else {
  //           setChains(filteredChains);
  //         };
  //       });
  //   }
  // }, [chains]);

  return [chains, setChains];
}
