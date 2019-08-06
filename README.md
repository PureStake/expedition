# Jade Explorer

A block explorer for Ethereum based blockchains. The explorer uses Jade Service Runner for managing background services (Multi-Geth), OpenRPC for underlying functionality, and Pristine.

![jade-block-explorer-light](https://user-images.githubusercontent.com/364566/62577862-aa927780-b854-11e9-9aba-a58eb7b44a47.png)
![jade-block-explorer](https://user-images.githubusercontent.com/364566/62577861-aa927780-b854-11e9-8b5d-d8e04aaf2357.png)

## Install

### Dependencies

- at least node `v10.15.3`
- at least npm `v6.4.1`

Clone the repository and install project dependencies.

```bash
git clone https://github.com/etclabscore/jade-explorer.git && cd jade-explorer && npm install
```

## Usage


```bash
npm run service-runner
```

Jade Service Runner will run at http://localhost:8002/.

Start the explorer.

```bash
npm start
```

The explorer will run at http://localhost:3000/ which should display multi-geth's status, and make sure multi-geth is running.

### Notes on Multi-Geth & Service Runner

By default, multi-geth service will run ETC mainnet. Jade Service runner conveniently contains the service in the `/.services/` directory of project.

```bash
# ./services/
.
└── multi-geth
    └── 1.9.0
        └── multi-geth
            └── 1.9.0
                └── classic
                    ├── geth
                    │   ├── chaindata
                    │   ├── ethash
                    │   └── nodes
                    └── keystore
```

## Resources

- [Ethereum JSON RPC Specification](https://github.com/etclabscore/ethereum-json-rpc-specification)
- [Jade Service Runner](https://github.com/etclabscore/jade-service-runner)
- [OpenRPC](https://open-rpc.org)
- [Pristine](https://github.com/etclabscore/pristine)

## Contributing

How to contribute, build and release are outlined in [CONTRIBUTING.md](CONTRIBUTING.md), [BUILDING.md](BUILDING.md) and [RELEASING.md](RELEASING.md) respectively. Commits in this repository follow the [CONVENTIONAL_COMMITS.md](CONVENTIONAL_COMMITS.md) specification.

---

This repo originally forked from [ETCDEVTeam/emerald-explorer](https://github.com/ETCDEVTeam/emerald-explorer).
