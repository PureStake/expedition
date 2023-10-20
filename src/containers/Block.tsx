import { CircularProgress } from "@material-ui/core";
import useEthRPCStore from "../stores/useEthRPCStore";
import * as React from "react";
import BlockView from "../components/BlockView";
import { Block as IBlock } from "@etclabscore/ethereum-json-rpc";
import ETHJSONSpec from "@etclabscore/ethereum-json-rpc-specification/openrpc.json";

const isKeccakHash = (q: string): boolean => {
  const re = new RegExp(ETHJSONSpec.components.schemas.Keccak.pattern);
  return re.test(q);
};

export default function Block(props: any) {
  const {
    match: {
      params: { hash },
    },
  } = props;
  const [block, setBlock] = React.useState<IBlock>();
  const [erpc] = useEthRPCStore();

  React.useEffect(() => {
    if (erpc === undefined) {
      return;
    }

    // Check if the `hash` is a number (block number)
    if (!isKeccakHash(hash)) {
      const blockNumber = `0x${parseInt(hash, 10).toString(16)}`;
      erpc.eth_getBlockByNumber(blockNumber, true).then((b: any) => {
        if (b === null) {
          return;
        }
        erpc.eth_getBlockByHash(b.hash, true).then((b) => {
          if (b === null) {
            return;
          }
          setBlock(b);
        });
      });
    } else {
      // If it's not a number, assume it's a block hash
      erpc.eth_getBlockByHash(hash, true).then((b) => {
        console.log(b);
        if (b === null) {
          return;
        }
        setBlock(b);
      });
    }
  }, [hash, erpc]);

  if (!block) {
    return <CircularProgress />;
  }
  return <BlockView block={block} />;
}
