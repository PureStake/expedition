// import { useEffect } from "react";
// import { uniqBy } from "lodash";
import { IChain as Chain } from "../models/chain";
import React from "react";
import { useTranslation } from "react-i18next";

declare var process: {
  env: {
    REACT_APP_DANCEBOXEVMAPI: string;
  };
};

export default function () {
  const { t } = useTranslation();
  const [chains, setChains] = React.useState<Chain[]>([
    {
      name: "Dancebox EVM ContainerChain",
      network: t("testnet"),
      rpc: ["https://fraa-dancebox-3001-rpc.a.dancebox.tanssi.network/"],
    },
    {
      name: "Stagebox EVM ContainerChain",
      network: t("testnet"),
      rpc: ["https://fraa-stagebox-2002-rpc.a.stagenet.tanssi.network"],
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
