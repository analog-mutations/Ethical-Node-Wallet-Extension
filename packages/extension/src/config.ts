import { Bech32Address } from "@keplr-wallet/cosmos";
import { ChainInfo } from "@keplr-wallet/types";

export const EmbedChainInfos: ChainInfo[] = [
//akashnet-2
{
  rpc: "https://rpc-akash.keplr.app",
  rest: "https://lcd-akash.keplr.app",
  chainId: "akashnet-2",
  chainName: "Akash",
  stakeCurrency: {
    coinDenom: "AKT",
    coinMinimalDenom: "uakt",
    coinDecimals: 6,
    coinGeckoId: "akash-network",
  },
  walletUrl:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/akash"
      : "http://localhost:8080/chains/akash",
  walletUrlForStaking:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/akash"
      : "http://localhost:8080/chains/akash",
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config("akash"),
  currencies: [
    {
      coinDenom: "AKT",
      coinMinimalDenom: "uakt",
      coinDecimals: 6,
      coinGeckoId: "akash-network",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "AKT",
      coinMinimalDenom: "uakt",
      coinDecimals: 6,
      coinGeckoId: "akash-network",
    },
  ],
  features: ["ibc-transfer"],
},
//axelar
{
  rpc: "https://rpc-axelar.keplr.app",
  rest: "https://lcd-axelar.keplr.app",
  chainId: "axelar-dojo-1",
  chainName: "Axelar",
  stakeCurrency: {
    coinDenom: "AXL",
    coinMinimalDenom: "uaxl",
    coinDecimals: 6,
    coinGeckoId: "axelar",
  },
  walletUrl:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/axelar"
      : "http://localhost:8080/chains/axelar",
  walletUrlForStaking:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/axelar"
      : "http://localhost:8080/chains/axelar",
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config("axelar"),
  currencies: [
    {
      coinDenom: "AXL",
      coinMinimalDenom: "uaxl",
      coinDecimals: 6,
      coinGeckoId: "axelar",
    },
    {
      coinDenom: "WETH",
      coinMinimalDenom: "weth-wei",
      coinDecimals: 18,
      coinGeckoId: "weth",
    },
    {
      coinDenom: "USDC",
      coinMinimalDenom: "uusdc",
      coinDecimals: 6,
      coinGeckoId: "usd-coin",
    },
    {
      coinDenom: "FRAX",
      coinMinimalDenom: "frax-wei",
      coinDecimals: 18,
      coinGeckoId: "frax",
    },
    {
      coinDenom: "DAI",
      coinMinimalDenom: "dai-wei",
      coinDecimals: 18,
      coinGeckoId: "dai",
    },
    {
      coinDenom: "USDT",
      coinMinimalDenom: "uusdt",
      coinDecimals: 6,
      coinGeckoId: "tether",
    },
    {
      coinDenom: "WBTC",
      coinMinimalDenom: "wbtc-satoshi",
      coinDecimals: 8,
      coinGeckoId: "wrapped-bitcoin",
    },
    {
      coinDenom: "LINK",
      coinMinimalDenom: "link-wei",
      coinDecimals: 18,
      coinGeckoId: "chainlink",
    },
    {
      coinDenom: "AAVE",
      coinMinimalDenom: "aave-wei",
      coinDecimals: 18,
      coinGeckoId: "aave",
    },
    {
      coinDenom: "APE",
      coinMinimalDenom: "ape-wei",
      coinDecimals: 18,
      coinGeckoId: "apecoin",
    },
    {
      coinDenom: "AXS",
      coinMinimalDenom: "axs-wei",
      coinDecimals: 18,
      coinGeckoId: "axie-infinity",
    },
    {
      coinDenom: "MKR",
      coinMinimalDenom: "mkr-wei",
      coinDecimals: 18,
      coinGeckoId: "maker",
    },
    {
      coinDenom: "RAI",
      coinMinimalDenom: "rai-wei",
      coinDecimals: 18,
      coinGeckoId: "rai",
    },
    {
      coinDenom: "SHIB",
      coinMinimalDenom: "shib-wei",
      coinDecimals: 18,
      coinGeckoId: "shiba-inu",
    },
    {
      coinDenom: "stETH",
      coinMinimalDenom: "steth-wei",
      coinDecimals: 18,
      coinGeckoId: "staked-ether",
    },
    {
      coinDenom: "UNI",
      coinMinimalDenom: "uni-wei",
      coinDecimals: 18,
      coinGeckoId: "uniswap",
    },
    {
      coinDenom: "XCN",
      coinMinimalDenom: "xcn-wei",
      coinDecimals: 18,
      coinGeckoId: "chain-2",
    },
    {
      coinDenom: "WGLMR",
      coinMinimalDenom: "wglmr-wei",
      coinDecimals: 18,
      coinGeckoId: "wrapped-moonbeam",
    },
    {
      coinDenom: "DOT",
      coinMinimalDenom: "dot-planck",
      coinDecimals: 10,
      coinGeckoId: "polkadot",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "AXL",
      coinMinimalDenom: "uaxl",
      coinDecimals: 6,
      coinGeckoId: "axelar",
      gasPriceStep: {
        low: 0.007,
        average: 0.007,
        high: 0.01,
      },
    },
  ],
  features: ["ibc-transfer", "ibc-go", "axelar-evm-bridge"],
},
//band
{
  rpc: "https://rpc.cosmos.directory/bandchain",
  rest: "https://rest.cosmos.directory/bandchain",
  chainId: "laozi-mainnet",
  chainName: "Band Protocol",
  stakeCurrency: {
    coinDenom: "BAND",
    coinMinimalDenom: "uband",
    coinDecimals: 6,
    coinGeckoId: "band-protocol"
  },
  walletUrl:
    process.env.NODE_ENV === "production"
      ? "https://rpc.cosmos.directory/bandchain"
      : "http://localhost:8080/chains/akash",
  walletUrlForStaking:
    process.env.NODE_ENV === "production"
      ? "https://restake.app/bandchain"
      : "http://localhost:8080/chains/akash",
  bip44: {
    coinType: 494,
  },
  bech32Config: Bech32Address.defaultBech32Config("band"),
  currencies: [
    {
      coinDenom: "BAND",
      coinMinimalDenom: "uband",
      coinDecimals: 6,
      coinGeckoId: "band-protocol"
    }
  ],
  feeCurrencies: [
    {
      coinDenom: "BAND",
      coinMinimalDenom: "uband",
      coinDecimals: 6,
      coinGeckoId: "band-protocol",
      gasPriceStep: {
        low: 0.0125,
        average: 0.025,
        high: 0.05
      }
    }
  ],
  "beta": true
},
//bitcanna
{
  "chainId": "bitcanna-1",
  "chainName": "BitCanna v1",
  "rpc": "https://rpc.bitcanna.io/",
  "rest": "https://lcd.bitcanna.io/",
  "nodeProvider": {
      "name": "BitCanna Node",
      "email": "dev@bitcanna.io",
      "website":"https://www.bitcanna.io"
  },
  "stakeCurrency": {
      "coinDenom": "BCNA",
      "coinMinimalDenom": "ubcna",
      "coinDecimals": 6,
      "coinGeckoId": "bitcanna"
  },
  "bip44": {
      "coinType": 118
  },
  "bech32Config": {
      "bech32PrefixAccAddr": "bcna",
      "bech32PrefixAccPub": "bcnapub",
      "bech32PrefixValAddr": "bcnavaloper",
      "bech32PrefixValPub": "bcnavaloperpub",
      "bech32PrefixConsAddr": "bcnavalcons",
      "bech32PrefixConsPub": "bcnavalconspub"
  },
  "currencies": [{
      "coinDenom": "BCNA",
      "coinMinimalDenom": "ubcna",
      "coinDecimals": 6,
      "coinGeckoId": "bitcanna"
  }],
  "feeCurrencies": [{
      "coinDenom": "BCNA",
      "coinMinimalDenom": "ubcna",
      "coinDecimals": 6,
      "coinGeckoId": "bitcanna",
      "gasPriceStep": {
        "low": 0.001,
        "average": 0.0025,
        "high": 0.01
      }
  }],
  "features": [
  ],
  "walletUrlForStaking": "https://wallet.bitcanna.io"
},
//bitSong
{
  "rpc": "https://rpc.cosmos.directory/bitsong",
  "rest": "https://rest.cosmos.directory/bitsong",
  "chainId": "bitsong-2b",
  "chainName": "BitSong",
  "stakeCurrency": {
    "coinDenom": "BTSG",
    "coinMinimalDenom": "ubtsg",
    "coinDecimals": 6,
    "coinGeckoId": "bitsong"
  },
  "bip44": {
    "coinType": 639
  },
  "walletUrlForStaking": "https://restake.app/bitsong",
  "bech32Config": {
    "bech32PrefixAccAddr": "bitsong",
    "bech32PrefixAccPub": "bitsongpub",
    "bech32PrefixValAddr": "bitsongvaloper",
    "bech32PrefixValPub": "bitsongvaloperpub",
    "bech32PrefixConsAddr": "bitsongvalcons",
    "bech32PrefixConsPub": "bitsongvalconspub"
  },
  "currencies": [
    {
      "coinDenom": "BTSG",
      "coinMinimalDenom": "ubtsg",
      "coinDecimals": 6,
      "coinGeckoId": "bitsong"
    }
  ],
  "feeCurrencies": [
    {
      "coinDenom": "BTSG",
      "coinMinimalDenom": "ubtsg",
      "coinDecimals": 6,
      "coinGeckoId": "bitsong",
      "gasPriceStep": {
        "low": 3,
        "average": 10,
        "high": 20
      }
    }
  ],
  "beta": true
},
//canto
{
  "rpc": "https://rpc.canto.nodestake.top/",
  "rest": "https://mainnode.plexnode.org:1317",
  "chainId": "canto_7700-1",
  "chainName": "Canto",
  "nodeProvider": {
    "name": "Plex Labs",
    "email": "contact@plex.engineer",
    "website": "https://plex.engineer/"
  },
  "stakeCurrency": {
    "coinDenom": "CANTO",
    "coinMinimalDenom": "acanto",
    "coinDecimals": 18,
    "coinGeckoId": "canto"
  },
  "walletUrl": "https://canto.io/",
  "walletUrlForStaking": "https://canto.io/staking",
  "bip44": {
    "coinType": 60
  },
  "bech32Config": {
    "bech32PrefixAccAddr": "canto",
    "bech32PrefixAccPub": "cantopub",
    "bech32PrefixValAddr": "cantovaloper",
    "bech32PrefixValPub": "cantovaloperpub",
    "bech32PrefixConsAddr": "cantovalcons",
    "bech32PrefixConsPub": "cantovalconspub"
  },
  "currencies": [
    {
      "coinDenom": "CANTO",
      "coinMinimalDenom": "acanto",
      "coinDecimals": 18,
      "coinGeckoId": "canto"
    }
  ],
  "feeCurrencies": [
    {
      "coinDenom": "CANTO",
      "coinMinimalDenom": "acanto",
      "coinDecimals": 18,
      "coinGeckoId": "canto",
      "gasPriceStep": {
        "low": 1250000000000,
        "average": 2500000000000,
        "high": 3750000000000
      }
    }
  ],
  "features": [
    "eth-address-gen",
    "eth-key-sign"
  ]
},
//chihuahua
{
  "chainId": "chihuahua-1",
  "chainName": "Chihuahua v1.1",
  "rpc": "https://rpc.chihuahua.wtf:443/",
  "rest": "https://api.chihuahua.wtf:443/",
  "nodeProvider": {
      "name": "Chihuahua Node",
      "email": "chi@huahua.wtf",
      "website":"https://www.chihuahua.wtf"
  },
  "stakeCurrency": {
      "coinDenom": "HUAHUA",
      "coinMinimalDenom": "uhuahua",
      "coinDecimals": 6,
      "coinGeckoId": "chihuahua-token"
  },
  "bip44": {
      "coinType": 118
  },
  "bech32Config": {
      "bech32PrefixAccAddr": "chihuahua",
      "bech32PrefixAccPub": "chihuahuapub",
      "bech32PrefixValAddr": "chihuahuavaloper",
      "bech32PrefixValPub": "chihuahuavaloperpub",
      "bech32PrefixConsAddr": "chihuahuavalcons",
      "bech32PrefixConsPub": "chihuahuavalconspub"
  },
  "currencies": [{
      "coinDenom": "HUAHUA",
      "coinMinimalDenom": "uhuahua",
      "coinDecimals": 6,
      "coinGeckoId": "chihuahua-token"
  }],
  "feeCurrencies": [{
      "coinDenom": "HUAHUA",
      "coinMinimalDenom": "uhuahua",
      "coinDecimals": 6,
      "coinGeckoId": "chihuahua-token",
      "gasPriceStep": {
          "low": 1,
          "average": 5,
          "high": 10
      }
  }],
  "features": [
      "cosmwasm"
  ],
  "walletUrlForStaking": "https://chihuahua.omniflix.co/stake"
},
//comdex
{
  "rpc": "https://rpc.comdex.one",
  "rest": "https://rest.comdex.one",
  "chainId": "comdex-1",
  "chainName": "Comdex",
  "nodeProvider": {
    "name": "Comdex Node",
    "email": "info@comdex.one",
    "website":"https://comdex.one"
  },
  "stakeCurrency": {
    "coinDenom": "CMDX",
    "coinMinimalDenom": "ucmdx",
    "coinDecimals": 6,
    "coinGeckoId": "comdex"
  },
  "walletUrl": "https://app.harborprotocol.one",
  "walletUrlForStaking": "https://comdex.omniflix.co/stake",
  "bip44": {
    "coinType": 118
  },
  "bech32Config": {
    "bech32PrefixAccAddr": "comdex",
    "bech32PrefixAccPub": "comdexpub",
    "bech32PrefixValAddr": "comdexvaloper",
    "bech32PrefixValPub": "comdexvaloperpub",
    "bech32PrefixConsAddr": "comdexvalcons",
    "bech32PrefixConsPub": "comdexvalconspub"
  },
  "currencies": [
    {
      "coinDenom": "CMDX",
      "coinMinimalDenom": "ucmdx",
      "coinDecimals": 6,
      "coinGeckoId": "comdex"
    },
    {
      "coinDenom": "CMST",
      "coinMinimalDenom": "ucmst",
      "coinDecimals": 6
    },
    {
      "coinDenom": "HARBOR",
      "coinMinimalDenom": "uharbor",
      "coinDecimals": 6
    }
  ],
  "feeCurrencies": [
    {
      "coinDenom": "CMDX",
      "coinMinimalDenom": "ucmdx",
      "coinDecimals": 6,
      "coinGeckoId": "comdex",
      "gasPriceStep": {
        "low": 0,
        "average": 0.025,
        "high": 0.04
      }
    }
  ],
  "features": [
    "cosmwasm"
  ]
},
//cosmoshub
{
  rpc: "https://rpc-cosmoshub.keplr.app",
  rest: "https://lcd-cosmoshub.keplr.app",
  chainId: "cosmoshub-4",
  chainName: "Cosmos Hub",
  stakeCurrency: {
    coinDenom: "ATOM",
    coinMinimalDenom: "uatom",
    coinDecimals: 6,
    coinGeckoId: "cosmos",
  },
  walletUrl:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/cosmos-hub"
      : "http://localhost:8080/chains/cosmos-hub",
  walletUrlForStaking:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/cosmos-hub"
      : "http://localhost:8080/chains/cosmos-hub",
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config("cosmos"),
  currencies: [
    {
      coinDenom: "ATOM",
      coinMinimalDenom: "uatom",
      coinDecimals: 6,
      coinGeckoId: "cosmos",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "ATOM",
      coinMinimalDenom: "uatom",
      coinDecimals: 6,
      coinGeckoId: "cosmos",
    },
  ],
  features: ["ibc-transfer", "ibc-go"],
},
//crescent
{
  "rpc": "https://mainnet.crescent.network:26657",
  "rest": "https://mainnet.crescent.network:1317",
  "chainId": "crescent-1",
  "chainName": "Crescent Network",
  "nodeProvider": {
    "name": "Crescent Node",
    "email": "contact@crescent.network",
    "website":"https://crescent.network"
  },
  "stakeCurrency": {
    "coinDenom": "CRE",
    "coinMinimalDenom": "ucre",
    "coinDecimals": 6,
    "coinGeckoId": "crescent-network"
  },
  "walletUrl": "https://app.crescent.network/",
  "walletUrlForStaking": "https://app.crescent.network/staking",
  "bip44": {
    "coinType": 118
  },
  "bech32Config": {
    "bech32PrefixAccAddr": "cre",
    "bech32PrefixAccPub": "crepub",
    "bech32PrefixValAddr": "crevaloper",
    "bech32PrefixValPub": "crevaloperpub",
    "bech32PrefixConsAddr": "crevalcons",
    "bech32PrefixConsPub": "crevalconspub"
  },
  "currencies": [
    {
      "coinDenom": "CRE",
      "coinMinimalDenom": "ucre",
      "coinDecimals": 6,
      "coinGeckoId": "crescent-network"
    },
    {
      "coinDenom": "bCRE",
      "coinMinimalDenom": "ubcre",
      "coinDecimals": 6,
      "coinGeckoId": "liquid-staking-crescent"
    }
  ],
  "feeCurrencies": [
    {
      "coinDenom": "CRE",
      "coinMinimalDenom": "ucre",
      "coinDecimals": 6,
      "coinGeckoId": "crescent-network",
      "gasPriceStep": {
        "low": 0.01,
        "average": 0.025,
        "high": 0.03
      }
    },
    {
      "coinDenom": "bCRE",
      "coinMinimalDenom": "ubcre",
      "coinDecimals": 6,
      "coinGeckoId": "liquid-staking-crescent",
      "gasPriceStep": {
        "low": 0.0083,
        "average": 0.02075,
        "high": 0.0249
      }
    },
    {
      "coinDenom": "ATOM",
      "coinMinimalDenom": "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
      "coinDecimals": 6,
      "coinGeckoId": "cosmos",
      "gasPriceStep": {
        "low": 0.000063,
        "average": 0.0001575,
        "high": 0.000189
      }
    },
    {
      "coinDenom": "USDC.grav",
      "coinMinimalDenom": "ibc/CD01034D6749F20AAC5330EF4FD8B8CA7C40F7527AB8C4A302FBD2A070852EE1",
      "coinDecimals": 6,
      "coinGeckoId": "usd-coin",
      "gasPriceStep": {
        "low": 0.000842,
        "average": 0.002105,
        "high": 0.002526
      }
    },
    {
      "coinDenom": "USDC.axl",
      "coinMinimalDenom": "ibc/BFF0D3805B50D93E2FA5C0B2DDF7E0B30A631076CD80BC12A48C0E95404B4A41",
      "coinDecimals": 6,
      "coinGeckoId": "usd-coin",
      "gasPriceStep": {
        "low": 0.000842,
        "average": 0.002105,
        "high": 0.002526
      }
    },
    {
      "coinDenom": "IST",
      "coinMinimalDenom": "ibc/CA1261224952DF089EFD363D8DBB30A8AB6D8CD181E60EE9E68E432F8DE14FE3",
      "coinDecimals": 6,
      "coinGeckoId": "inter-stable-token",
      "gasPriceStep": {
        "low": 0.000842,
        "average": 0.002105,
        "high": 0.002526
      }
    },
    {
      "coinDenom": "CMST",
      "coinMinimalDenom": "ibc/9EC8A1701813BB7B73BFED2496009ABB2C8BF187E6CDFA788D77F68E08BC05CD",
      "coinDecimals": 6,
      "coinGeckoId": "composite",
      "gasPriceStep": {
        "low": 0.000842,
        "average": 0.002105,
        "high": 0.002526
      }
    },
    {
      "coinDenom": "JUNO",
      "coinMinimalDenom": "ibc/C814F0B662234E24248AE3B2FE2C1B54BBAF12934B757F6E7BC5AEC119963895",
      "coinDecimals": 6,
      "coinGeckoId": "juno-network",
      "gasPriceStep": {
        "low": 0.000568,
        "average": 0.00142,
        "high": 0.001704
      }
    },
    {
      "coinDenom": "BLD",
      "coinMinimalDenom": "ibc/11F940BCDFD7CFBFD7EDA13F25DA95D308286D441209D780C9863FD4271514EB",
      "coinDecimals": 6,
      "coinGeckoId": "agoric",
      "gasPriceStep": {
        "low": 0.002,
        "average": 0.005,
        "high": 0.006
      }
    },
    {
      "coinDenom": "CMDX",
      "coinMinimalDenom": "ibc/61DF64ADF65230540C14C63D64897BE08A3DC9A516A91425913F01240E2F432F",
      "coinDecimals": 6,
      "coinGeckoId": "comdex",
      "gasPriceStep": {
        "low": 0.008146,
        "average": 0.020365,
        "high": 0.024438
      }
    },
    {
      "coinDenom": "GRAV",
      "coinMinimalDenom": "ibc/C950356239AD2A205DE09FDF066B1F9FF19A7CA7145EA48A5B19B76EE47E52F7",
      "coinDecimals": 6,
      "coinGeckoId": "graviton",
      "gasPriceStep": {
        "low": 0.065405,
        "average": 0.1635125,
        "high": 0.196215
      }
    },
    {
      "coinDenom": "INJ",
      "coinMinimalDenom": "ibc/5A76568E079A31FA12165E4559BA9F1E9D4C97F9C2060B538C84DCD503815E30",
      "coinDecimals": 18,
      "coinGeckoId": "injective-protocol",
      "gasPriceStep": {
        "low": 3350000000,
        "average": 8375000000,
        "high": 10050000000
      }
    },
    {
      "coinDenom": "LUNA",
      "coinMinimalDenom": "ibc/8F865D9760B482FF6254EDFEC1FF2F1273B9AB6873A7DE484F89639795D73D75",
      "coinDecimals": 6,
      "coinGeckoId": "terra-luna-2",
      "gasPriceStep": {
        "low": 0.0004,
        "average": 0.001,
        "high": 0.0012
      }
    },
    {
      "coinDenom": "LUNC",
      "coinMinimalDenom": "ibc/4627AD2524E3E0523047E35BB76CC90E37D9D57ACF14F0FCBCEB2480705F3CB8",
      "coinDecimals": 6,
      "coinGeckoId": "terra-luna",
      "gasPriceStep": {
        "low": 5,
        "average": 12.5,
        "high": 15
      }
    },
    {
      "coinDenom": "stATOM",
      "coinMinimalDenom": "ibc/D64F87FAE0B35C1954DD7921BA7A2939705DE77CBF72B8002F2E3552EDE4DE52",
      "coinDecimals": 6,
      "coinGeckoId": "stride-staked-atom",
      "gasPriceStep": {
        "low": 0.00006,
        "average": 0.00015,
        "high": 0.00018
      }
    },
    {
      "coinDenom": "OKT",
      "coinMinimalDenom": "ibc/764D1629980B02BAFF3D25BEE4FB1E0C5E350AFA252FDF66E68E10D2179A826A",
      "coinDecimals": 18,
      "coinGeckoId": "oec-token",
      "gasPriceStep": {
        "low": 200000000,
        "average": 500000000,
        "high": 600000000
      }
    },
    {
      "coinDenom": "AXL",
      "coinMinimalDenom": "ibc/0634D0993744740D675AD01E81156EAC945AEAAE17C074918DC7FF52F41B263E",
      "coinDecimals": 6,
      "coinGeckoId": "axelar",
      "gasPriceStep": {
        "low": 0.0014,
        "average": 0.0035,
        "high": 0.0042
      }
    }
  ],
  "features": []
},
//cudos
{
  "rpc": "https://rpc.cosmos.directory/cudos",
  "rest": "https://rest.cosmos.directory/cudos",
  "chainId": "cudos-1",
  "chainName": "Cudos",
  "stakeCurrency": {
    "coinDenom": "CUDOS",
    "coinMinimalDenom": "acudos",
    "coinDecimals": 18,
    "coinGeckoId": "cudos"
  },
  "bip44": {
    "coinType": 118
  },
  "walletUrlForStaking": "https://restake.app/cudos",
  "bech32Config": {
    "bech32PrefixAccAddr": "cudos",
    "bech32PrefixAccPub": "cudospub",
    "bech32PrefixValAddr": "cudosvaloper",
    "bech32PrefixValPub": "cudosvaloperpub",
    "bech32PrefixConsAddr": "cudosvalcons",
    "bech32PrefixConsPub": "cudosvalconspub"
  },
  "currencies": [
    {
      "coinDenom": "CUDOS",
      "coinMinimalDenom": "acudos",
      "coinDecimals": 18,
      "coinGeckoId": "cudos"
    }
  ],
  "feeCurrencies": [
    {
      "coinDenom": "CUDOS",
      "coinMinimalDenom": "acudos",
      "coinDecimals": 18,
      "coinGeckoId": "cudos",
      "gasPriceStep": {
        "low": 5000000000000,
        "average": 10000000000000,
        "high": 20000000000000
      }
    }
  ],
  "beta": true
},
//desmos
{
  "chainId": "desmos-mainnet",
  "chainName": "Desmos",
  "rpc": "https://rpc.mainnet.desmos.network",
  "rest": "https://api.mainnet.desmos.network",
  "nodeProvider": {
      "name": "Forbole",
      "email": "info@forbole.com",
      "website": "https://www.forbole.com"
  },
  "bip44": {
      "coinType": 852
  },
  "bech32Config": {
      "bech32PrefixAccAddr": "desmos",
      "bech32PrefixAccPub": "desmospub",
      "bech32PrefixValAddr": "desmosvaloper",
      "bech32PrefixValPub": "desmosvaloperpub",
      "bech32PrefixConsAddr": "desmosvalcons",
      "bech32PrefixConsPub": "desmosvalconspub"
  },
  "currencies": [
      {
          "coinDenom": "DSM",
          "coinMinimalDenom": "udsm",
          "coinDecimals": 6,
          "coinGeckoId": "desmos"
      }
  ],
  "feeCurrencies": [
      {
          "coinDenom": "DSM",
          "coinMinimalDenom": "udsm",
          "coinDecimals": 6,
          "coinGeckoId": "desmos",
          "gasPriceStep": {
              "low": 0.01,
              "average": 0.03,
              "high": 0.05
          }
      }
  ],
  "stakeCurrency": {
      "coinDenom": "DSM",
      "coinMinimalDenom": "udsm",
      "coinDecimals": 6,
      "coinGeckoId": "desmos"
  },
  "features": []
},
//emoney
{
  rpc: "https://rpc-emoney.keplr.app",
  rest: "https://lcd-emoney.keplr.app",
  chainId: "emoney-3",
  chainName: "e-Money",
  stakeCurrency: {
    coinDenom: "NGM",
    coinMinimalDenom: "ungm",
    coinDecimals: 6,
    coinGeckoId: "e-money",
  },
  walletUrl:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/e-money"
      : "http://localhost:8080/chains/e-money",
  walletUrlForStaking:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/e-money"
      : "http://localhost:8080/chains/e-money",
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config("emoney"),
  currencies: [
    {
      coinDenom: "NGM",
      coinMinimalDenom: "ungm",
      coinDecimals: 6,
      coinGeckoId: "e-money",
    },
    {
      coinDenom: "EEUR",
      coinMinimalDenom: "eeur",
      coinDecimals: 6,
      coinGeckoId: "e-money-eur",
    },
    {
      coinDenom: "EDKK",
      coinMinimalDenom: "edkk",
      coinDecimals: 6,
    },
    {
      coinDenom: "ESEK",
      coinMinimalDenom: "esek",
      coinDecimals: 6,
    },
    {
      coinDenom: "ENOK",
      coinMinimalDenom: "enok",
      coinDecimals: 6,
    },
    {
      coinDenom: "ECHF",
      coinMinimalDenom: "echf",
      coinDecimals: 6,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "NGM",
      coinMinimalDenom: "ungm",
      coinDecimals: 6,
      coinGeckoId: "e-money",
      gasPriceStep: {
        low: 1,
        average: 1,
        high: 1,
      },
    },
    {
      coinDenom: "EEUR",
      coinMinimalDenom: "eeur",
      coinDecimals: 6,
      coinGeckoId: "e-money-eur",
      gasPriceStep: {
        low: 1,
        average: 1,
        high: 1,
      },
    },
    {
      coinDenom: "ECHF",
      coinMinimalDenom: "echf",
      coinDecimals: 6,
      gasPriceStep: {
        low: 1,
        average: 1,
        high: 1,
      },
    },
    {
      coinDenom: "ESEK",
      coinMinimalDenom: "esek",
      coinDecimals: 6,
      gasPriceStep: {
        low: 1,
        average: 1,
        high: 1,
      },
    },
    {
      coinDenom: "ENOK",
      coinMinimalDenom: "enok",
      coinDecimals: 6,
      gasPriceStep: {
        low: 1,
        average: 1,
        high: 1,
      },
    },
    {
      coinDenom: "EDKK",
      coinMinimalDenom: "edkk",
      coinDecimals: 6,
      gasPriceStep: {
        low: 1,
        average: 1,
        high: 1,
      },
    },
  ],
  features: ["ibc-transfer"],
},
//evmos
{
  rpc: "https://rpc-evmos.keplr.app",
  rest: "https://lcd-evmos.keplr.app",
  chainId: "evmos_9001-2",
  chainName: "Evmos",
  stakeCurrency: {
    coinDenom: "EVMOS",
    coinMinimalDenom: "aevmos",
    coinDecimals: 18,
    coinGeckoId: "evmos",
  },
  walletUrl:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/evmos"
      : "http://localhost:8080/chains/evmos",
  walletUrlForStaking:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/evmos"
      : "http://localhost:8080/chains/evmos",
  bip44: {
    coinType: 60,
  },
  bech32Config: Bech32Address.defaultBech32Config("evmos"),
  currencies: [
    {
      coinDenom: "EVMOS",
      coinMinimalDenom: "aevmos",
      coinDecimals: 18,
      coinGeckoId: "evmos",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "EVMOS",
      coinMinimalDenom: "aevmos",
      coinDecimals: 18,
      coinGeckoId: "evmos",
      gasPriceStep: {
        low: 25000000000,
        average: 25000000000,
        high: 40000000000,
      },
    },
  ],
  features: ["ibc-transfer", "ibc-go", "eth-address-gen", "eth-key-sign"],
},
//fetch
{
  "rpc": "https://rpc.cosmos.directory/fetchhub",
  "rest": "https://rest.cosmos.directory/fetchhub",
  "chainId": "fetchhub-4",
  "chainName": "Fetch.ai",
  "stakeCurrency": {
    "coinDenom": "FET",
    "coinMinimalDenom": "afet",
    "coinDecimals": 18,
    "coinGeckoId": "fetch-ai"
  },
  "bip44": {
    "coinType": 118
  },
  "walletUrlForStaking": "https://restake.app/fetchhub",
  "bech32Config": {
    "bech32PrefixAccAddr": "fetch",
    "bech32PrefixAccPub": "fetchpub",
    "bech32PrefixValAddr": "fetchvaloper",
    "bech32PrefixValPub": "fetchvaloperpub",
    "bech32PrefixConsAddr": "fetchvalcons",
    "bech32PrefixConsPub": "fetchvalconspub"
  },
  "currencies": [
    {
      "coinDenom": "FET",
      "coinMinimalDenom": "afet",
      "coinDecimals": 18,
      "coinGeckoId": "fetch-ai"
    }
  ],
  "feeCurrencies": [
    {
      "coinDenom": "FET",
      "coinMinimalDenom": "afet",
      "coinDecimals": 18,
      "coinGeckoId": "fetch-ai",
      "gasPriceStep": {
        "low": 0.025,
        "average": 0.025,
        "high": 0.035
      }
    }
  ],
  "beta": true
},
//injective
{
  rpc: "https://rpc-injective.keplr.app",
  rest: "https://lcd-injective.keplr.app",
  chainId: "injective-1",
  chainName: "Injective",
  stakeCurrency: {
    coinDenom: "INJ",
    coinMinimalDenom: "inj",
    coinDecimals: 18,
    coinGeckoId: "injective-protocol",
  },
  walletUrl:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/injective"
      : "http://localhost:8080/chains/injective",
  walletUrlForStaking:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/injective"
      : "http://localhost:8080/chains/injective",
  bip44: {
    coinType: 60,
  },
  bech32Config: Bech32Address.defaultBech32Config("inj"),
  currencies: [
    {
      coinDenom: "INJ",
      coinMinimalDenom: "inj",
      coinDecimals: 18,
      coinGeckoId: "injective-protocol",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "INJ",
      coinMinimalDenom: "inj",
      coinDecimals: 18,
      coinGeckoId: "injective-protocol",
      gasPriceStep: {
        low: 5000000000,
        average: 25000000000,
        high: 50000000000,
      },
    },
  ],
  features: ["ibc-transfer", "ibc-go", "eth-address-gen", "eth-key-sign"],
},
//irishub
{
  rpc: "https://rpc-iris.keplr.app",
  rest: "https://lcd-iris.keplr.app",
  chainId: "irishub-1",
  chainName: "IRISnet",
  stakeCurrency: {
    coinDenom: "IRIS",
    coinMinimalDenom: "uiris",
    coinDecimals: 6,
    coinGeckoId: "iris-network",
  },
  walletUrl:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/irisnet"
      : "http://localhost:8080/chains/irisnet",
  walletUrlForStaking:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/irisnet"
      : "http://localhost:8080/chains/irisnet",
  bip44: {
    coinType: 118,
  },
  alternativeBIP44s: [
    {
      coinType: 566,
    },
  ],
  bech32Config: {
    bech32PrefixAccAddr: "iaa",
    bech32PrefixAccPub: "iap",
    bech32PrefixValAddr: "iva",
    bech32PrefixValPub: "ivp",
    bech32PrefixConsAddr: "ica",
    bech32PrefixConsPub: "icp",
  },
  currencies: [
    {
      coinDenom: "IRIS",
      coinMinimalDenom: "uiris",
      coinDecimals: 6,
      coinGeckoId: "iris-network",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "IRIS",
      coinMinimalDenom: "uiris",
      coinDecimals: 6,
      coinGeckoId: "iris-network",
      gasPriceStep: {
        low: 0.2,
        average: 0.3,
        high: 0.4,
      },
    },
  ],
  features: ["ibc-transfer", "ibc-go"],
},
//juno
{
  rpc: "https://rpc-juno.keplr.app",
  rest: "https://lcd-juno.keplr.app",
  chainId: "juno-1",
  chainName: "Juno",
  stakeCurrency: {
    coinDenom: "JUNO",
    coinMinimalDenom: "ujuno",
    coinDecimals: 6,
    coinGeckoId: "juno-network",
  },
  walletUrl:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/juno"
      : "http://localhost:8080/chains/juno",
  walletUrlForStaking:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/juno"
      : "http://localhost:8080/chains/juno",
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config("juno"),
  currencies: [
    {
      coinDenom: "JUNO",
      coinMinimalDenom: "ujuno",
      coinDecimals: 6,
      coinGeckoId: "juno-network",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "JUNO",
      coinMinimalDenom: "ujuno",
      coinDecimals: 6,
      coinGeckoId: "juno-network",
      gasPriceStep: {
        low: 0.001,
        average: 0.0025,
        high: 0.004,
      },
    },
    {
      coinDenom: "ATOM",
      coinMinimalDenom:
        "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
      coinDecimals: 6,
      gasPriceStep: {
        low: 0.001 * 0.33,
        average: 0.0025 * 0.33,
        high: 0.004 * 0.33,
      },
    },
  ],
  features: ["cosmwasm", "ibc-transfer", "ibc-go", "wasmd_0.24+"],
},
//kava
{
  rpc: "https://rpc-kava.keplr.app",
  rest: "https://lcd-kava.keplr.app",
  chainId: "kava_2222-10",
  chainName: "Kava",
  stakeCurrency: {
    coinDenom: "KAVA",
    coinMinimalDenom: "ukava",
    coinDecimals: 6,
    coinGeckoId: "kava",
  },
  walletUrl:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/kava"
      : "http://localhost:8080/chains/kava",
  walletUrlForStaking:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/kava"
      : "http://localhost:8080/chains/kava",
  bip44: { coinType: 459 },
  alternativeBIP44s: [{ coinType: 118 }],
  bech32Config: Bech32Address.defaultBech32Config("kava"),
  currencies: [
    {
      coinDenom: "KAVA",
      coinMinimalDenom: "ukava",
      coinDecimals: 6,
      coinGeckoId: "kava",
    },
    {
      coinDenom: "SWP",
      coinMinimalDenom: "swp",
      coinDecimals: 6,
      coinGeckoId: "kava-swap",
    },
    {
      coinDenom: "USDX",
      coinMinimalDenom: "usdx",
      coinDecimals: 6,
      coinGeckoId: "usdx",
    },
    {
      coinDenom: "HARD",
      coinMinimalDenom: "hard",
      coinDecimals: 6,
    },
    {
      coinDenom: "BNB",
      coinMinimalDenom: "bnb",
      coinDecimals: 8,
    },
    {
      coinDenom: "BTCB",
      coinMinimalDenom: "btcb",
      coinDecimals: 8,
    },
    {
      coinDenom: "BUSD",
      coinMinimalDenom: "busd",
      coinDecimals: 8,
    },
    {
      coinDenom: "XRPB",
      coinMinimalDenom: "xrpb",
      coinDecimals: 8,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "KAVA",
      coinMinimalDenom: "ukava",
      coinDecimals: 6,
      coinGeckoId: "kava",
      gasPriceStep: {
        low: 0.05,
        average: 0.1,
        high: 0.25,
      },
    },
  ],
},
//Ki
{
  "rpc": "https://rpc.cosmos.directory/kichain",
  "rest": "https://rest.cosmos.directory/kichain",
  "chainId": "kichain-2",
  "chainName": "Ki",
  "stakeCurrency": {
    "coinDenom": "XKI",
    "coinMinimalDenom": "uxki",
    "coinDecimals": 6,
    "coinGeckoId": "ki"
  },
  "bip44": {
    "coinType": 118
  },
  "walletUrlForStaking": "https://restake.app/kichain",
  "bech32Config": {
    "bech32PrefixAccAddr": "ki",
    "bech32PrefixAccPub": "kipub",
    "bech32PrefixValAddr": "kivaloper",
    "bech32PrefixValPub": "kivaloperpub",
    "bech32PrefixConsAddr": "kivalcons",
    "bech32PrefixConsPub": "kivalconspub"
  },
  "currencies": [
    {
      "coinDenom": "XKI",
      "coinMinimalDenom": "uxki",
      "coinDecimals": 6,
      "coinGeckoId": "ki"
    }
  ],
  "feeCurrencies": [
    {
      "coinDenom": "XKI",
      "coinMinimalDenom": "uxki",
      "coinDecimals": 6,
      "coinGeckoId": "ki",
      "gasPriceStep": {
        "low": 0.025,
        "average": 0.03,
        "high": 0.05
      }
    }
  ],
  "beta": true
},
//kujira
{
  "rpc": "https://rpc.cosmos.directory/kujira",
  "rest": "https://rest.cosmos.directory/kujira",
  "chainId": "kaiyo-1",
  "chainName": "Kujira",
  "stakeCurrency": {
    "coinDenom": "KUJI",
    "coinMinimalDenom": "ukuji",
    "coinDecimals": 6,
    "coinGeckoId": "kujira"
  },
  "bip44": {
    "coinType": 118
  },
  "walletUrlForStaking": "https://restake.app/kujira",
  "bech32Config": {
    "bech32PrefixAccAddr": "kujira",
    "bech32PrefixAccPub": "kujirapub",
    "bech32PrefixValAddr": "kujiravaloper",
    "bech32PrefixValPub": "kujiravaloperpub",
    "bech32PrefixConsAddr": "kujiravalcons",
    "bech32PrefixConsPub": "kujiravalconspub"
  },
  "currencies": [
    {
      "coinDenom": "KUJI",
      "coinMinimalDenom": "ukuji",
      "coinDecimals": 6,
      "coinGeckoId": "kujira"
    }
  ],
  "feeCurrencies": [
    {
      "coinDenom": "KUJI",
      "coinMinimalDenom": "ukuji",
      "coinDecimals": 6,
      "coinGeckoId": "kujira",
      "gasPriceStep": {
        "low": 0.01,
        "average": 0.025,
        "high": 0.03
      }
    }
  ],
  "beta": true
},
//likecoin
{
  rpc: "https://rpc-likecoin.keplr.app",
  rest: "https://lcd-likecoin.keplr.app",
  chainId: "likecoin-mainnet-2",
  chainName: "Likecoin",
  stakeCurrency: {
    coinDenom: "LIKE",
    coinMinimalDenom: "nanolike",
    coinDecimals: 9,
    coinGeckoId: "likecoin",
  },
  bip44: {
    coinType: 118,
  },
  bech32Config: {
    bech32PrefixAccAddr: "like",
    bech32PrefixAccPub: "likepub",
    bech32PrefixValAddr: "likevaloper",
    bech32PrefixValPub: "likevaloperpub",
    bech32PrefixConsAddr: "likevalcons",
    bech32PrefixConsPub: "likevalconspub",
  },
  currencies: [
    {
      coinDenom: "LIKE",
      coinMinimalDenom: "nanolike",
      coinDecimals: 9,
      coinGeckoId: "likecoin",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "LIKE",
      coinMinimalDenom: "nanolike",
      coinDecimals: 9,
      coinGeckoId: "likecoin",
      gasPriceStep: {
        low: 1,
        average: 2,
        high: 3,
      },
    },
  ],
  features: [],
},
//lum
{
  "rpc": "https://node0.mainnet.lum.network/rpc",
  "rest": "https://node0.mainnet.lum.network/rest",
  "chainId": "lum-network-1",
  "chainName": "Lum Network",
  "stakeCurrency": {
      "coinDenom": "LUM",
      "coinMinimalDenom": "ulum",
      "coinDecimals": 6,
      "coinGeckoId": "lum-network"
  },
  "nodeProvider": {
      "name": "Lum Network",
      "email": "contact@lum.network",
      "website": "https://lum.network"
  },
  "walletUrlForStaking": "https://wallet.lum.network",
  "bip44": {
      "coinType": 118
  },
  "bech32Config": {
      "bech32PrefixAccAddr": "lum",
      "bech32PrefixAccPub": "lumpub",
      "bech32PrefixValAddr": "lumvaloper",
      "bech32PrefixValPub": "lumvaloperpub",
      "bech32PrefixConsAddr": "lumvalcons",
      "bech32PrefixConsPub": "lumvalconspub"
  },
  "currencies": [
      {
          "coinDenom": "LUM",
          "coinMinimalDenom": "ulum",
          "coinDecimals": 6,
          "coinGeckoId": "lum-network"
      },
      {
          "coinDenom": "DFR",
          "coinMinimalDenom": "udfr",
          "coinDecimals": 6            
      }
  ],
  "feeCurrencies": [
      {
          "coinDenom": "LUM",
          "coinMinimalDenom": "ulum",
          "coinDecimals": 6,
          "coinGeckoId": "lum-network",
          "gasPriceStep": {
              "low": 0.01,
              "average": 0.025,
              "high": 0.04
          }
      }
  ]
},
//mantle
{
  "chainId": "mantle-1",
  "chainName": "AssetMantle",
  "nodeProvider": {
    "name": "mantleNode",
    "email": "hello@assetmantle.one",
    "website": "https://assetmantle.one/"
  },
  "rpc": "https://rpc.assetmantle.one",
  "rest": "https://rest.assetmantle.one",
  "bip44": {
    "coinType": 118
  },
  "bech32Config": {
    "bech32PrefixAccAddr": "mantle",
    "bech32PrefixAccPub": "mantlepub",
    "bech32PrefixValAddr": "mantlevaloper",
    "bech32PrefixValPub": "mantlevaloperpub",
    "bech32PrefixConsAddr": "mantlevalcons",
    "bech32PrefixConsPub": "mantlevalconspub"
  },
  "currencies": [
    {
      "coinDenom": "MNTL",
      "coinMinimalDenom": "umntl",
      "coinDecimals": 6,
      "coinGeckoId": "assetmantle",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mantle/chain.png"
    }
  ],
  "feeCurrencies": [
    {
      "coinDenom": "MNTL",
      "coinMinimalDenom": "umntl",
      "coinDecimals": 6,
      "coinGeckoId": "assetmantle",
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mantle/chain.png",
      "gasPriceStep": {
        "low": 0.01,
        "average": 0.025,
        "high": 0.04
      }
    }
  ],
  "stakeCurrency": {
    "coinDenom": "MNTL",
    "coinMinimalDenom": "umntl",
    "coinDecimals": 6,
    "coinGeckoId": "assetmantle",
    "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mantle/chain.png"
  },
  "features": [],
  "walletUrl": "https://wallet.assetmantle.one",
  "walletUrlForStaking": "https://wallet.assetmantle.one/stake"
},
//marshub
{
  rpc: "https://rpc-mars.keplr.app",
  rest: "https://lcd-mars.keplr.app",
  chainId: "mars-1",
  chainName: "Mars Hub",
  stakeCurrency: {
    coinDenom: "MARS",
    coinMinimalDenom: "umars",
    coinDecimals: 6,
  },
  walletUrl:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/mars"
      : "http://localhost:8080/chains/mars",
  walletUrlForStaking:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/mars"
      : "http://localhost:8080/chains/mars",
  bip44: {
    coinType: 118,
  },
  alternativeBIP44s: [
    {
      coinType: 330,
    },
  ],
  bech32Config: Bech32Address.defaultBech32Config("mars"),
  currencies: [
    {
      coinDenom: "MARS",
      coinMinimalDenom: "umars",
      coinDecimals: 6,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "MARS",
      coinMinimalDenom: "umars",
      coinDecimals: 6,
      gasPriceStep: {
        low: 0,
        average: 0,
        high: 0.01,
      },
    },
  ],
  features: [],
},
//medibloc
{
  "chainId": "panacea-3",
  "chainName": "MediBloc",
  "rpc": "https://rpc.gopanacea.org",
  "rest": "https://api.gopanacea.org",
  "nodeProvider": {
    "name": "MediBloc",
    "email": "blockchain@medibloc.org",
    "website":"https://medibloc.com"
  },
  "bip44": {
    "coinType": 371
  },
  "bech32Config": {
    "bech32PrefixAccAddr": "panacea",
    "bech32PrefixAccPub": "panaceapub",
    "bech32PrefixValAddr": "panaceavaloper",
    "bech32PrefixValPub": "panaceavaloperpub",
    "bech32PrefixConsAddr": "panaceavalcons",
    "bech32PrefixConsPub": "panaceavalconspub"
  },
  "currencies": [
    {
      "coinDenom": "MED",
      "coinMinimalDenom": "umed",
      "coinDecimals": 6,
      "coinGeckoId": "medibloc"
    }
  ],
  "feeCurrencies": [
    {
      "coinDenom": "MED",
      "coinMinimalDenom": "umed",
      "coinDecimals": 6,
      "coinGeckoId": "medibloc",
      "gasPriceStep": {
        "low": 5,
        "average": 7,
        "high": 9
      }
    }
  ],
  "stakeCurrency": {
    "coinDenom": "MED",
    "coinMinimalDenom": "umed",
    "coinDecimals": 6,
    "coinGeckoId": "medibloc"
  },
  "features": []
},
//osmosis
{
  rpc: "https://rpc-osmosis.keplr.app",
  rest: "https://lcd-osmosis.keplr.app",
  chainId: "osmosis-1",
  chainName: "Osmosis",
  stakeCurrency: {
    coinDenom: "OSMO",
    coinMinimalDenom: "uosmo",
    coinDecimals: 6,
    coinGeckoId: "osmosis",
  },
  walletUrl:
    process.env.NODE_ENV === "production"
      ? "https://app.osmosis.zone"
      : "https://app.osmosis.zone",
  walletUrlForStaking:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/osmosis"
      : "http://localhost:8080/chains/osmosis",
  bip44: { coinType: 118 },
  bech32Config: Bech32Address.defaultBech32Config("osmo"),
  currencies: [
    {
      coinDenom: "OSMO",
      coinMinimalDenom: "uosmo",
      coinDecimals: 6,
      coinGeckoId: "osmosis",
    },
    {
      coinDenom: "ION",
      coinMinimalDenom: "uion",
      coinDecimals: 6,
      coinGeckoId: "ion",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "OSMO",
      coinMinimalDenom: "uosmo",
      coinDecimals: 6,
      coinGeckoId: "osmosis",
      gasPriceStep: {
        low: 0,
        average: 0.025,
        high: 0.04,
      },
    },
  ],
  features: [
    "ibc-transfer",
    "ibc-go",
    "cosmwasm",
    "wasmd_0.24+",
    "osmosis-txfees",
  ],
},
//Quasar
{
  rpc: "https://rpc-quasar.keplr.app",
  rest: "https://lcd-quasar.keplr.app",
  chainId: "quasar-1",
  chainName: "Quasar",
  stakeCurrency: {
    coinDenom: "QSR",
    coinMinimalDenom: "uqsr",
    coinDecimals: 6,
  },
  bip44: {
    coinType: 118,
  },
  bech32Config: {
    bech32PrefixAccAddr: "quasar",
    bech32PrefixAccPub: "quasarpub",
    bech32PrefixValAddr: "quasarvaloper",
    bech32PrefixValPub: "quasarvaloperpub",
    bech32PrefixConsAddr: "quasarvalcons",
    bech32PrefixConsPub: "quasarvalconspub",
  },
  currencies: [
    {
      coinDenom: "QSR",
      coinMinimalDenom: "uqsr",
      coinDecimals: 6,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "OSMO",
      coinMinimalDenom:
        "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
      coinDecimals: 6,
      gasPriceStep: {
        low: 0.01,
        average: 0.01,
        high: 0.02,
      },
    },
    {
      coinDenom: "ATOM",
      coinMinimalDenom:
        "ibc/FA0006F056DB6719B8C16C551FC392B62F5729978FC0B125AC9A432DBB2AA1A5",
      coinDecimals: 6,
      gasPriceStep: {
        low: 0.01,
        average: 0.01,
        high: 0.02,
      },
    },
    {
      coinDenom: "USDC",
      coinMinimalDenom:
        "ibc/FA7775734CC73176B7425910DE001A1D2AD9B6D9E93129A5D0750EAD13E4E63A",
      coinDecimals: 6,
      gasPriceStep: {
        low: 0.01,
        average: 0.01,
        high: 0.02,
      },
    },
  ],
  features: [],
},
//quicksilver
{
  rpc: "https://rpc-quicksilver.keplr.app",
  rest: "https://lcd-quicksilver.keplr.app",
  chainId: "quicksilver-1",
  chainName: "Quicksilver",
  stakeCurrency: {
    coinDenom: "QCK",
    coinMinimalDenom: "uqck",
    coinDecimals: 6,
  },
  walletUrlForStaking:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/quicksilver"
      : "http://localhost:8080/chains/quicksilver",
  bip44: {
    coinType: 118,
  },
  bech32Config: {
    bech32PrefixAccAddr: "quick",
    bech32PrefixAccPub: "quickpub",
    bech32PrefixValAddr: "quickvaloper",
    bech32PrefixValPub: "quickvaloperpub",
    bech32PrefixConsAddr: "quickvalcons",
    bech32PrefixConsPub: "quickvalconspub",
  },
  currencies: [
    {
      coinDenom: "QCK",
      coinMinimalDenom: "uqck",
      coinDecimals: 6,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "QCK",
      coinMinimalDenom: "uqck",
      coinDecimals: 6,
      gasPriceStep: {
        low: 0,
        average: 0.0001,
        high: 0.00025,
      },
    },
  ],
  features: [],
},
//regen
{
  rpc: "https://rpc-regen.keplr.app",
  rest: "https://lcd-regen.keplr.app",
  chainId: "regen-1",
  chainName: "Regen",
  stakeCurrency: {
    coinDenom: "REGEN",
    coinMinimalDenom: "uregen",
    coinDecimals: 6,
    coinGeckoId: "regen",
  },
  walletUrl:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/regen"
      : "http://localhost:8080/chains/regen",
  walletUrlForStaking:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/regen"
      : "http://localhost:8080/chains/regen",
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config("regen"),
  currencies: [
    {
      coinDenom: "REGEN",
      coinMinimalDenom: "uregen",
      coinDecimals: 6,
      coinGeckoId: "regen",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "REGEN",
      coinMinimalDenom: "uregen",
      coinDecimals: 6,
      coinGeckoId: "regen",
      gasPriceStep: {
        low: 0.015,
        average: 0.025,
        high: 0.04,
      },
    },
  ],
  features: ["ibc-go", "ibc-transfer"],
},
//secret-4
{
  rpc: "https://rpc-secret.keplr.app",
  rest: "https://lcd-secret.keplr.app",
  chainId: "secret-4",
  chainName: "Secret Network",
  stakeCurrency: {
    coinDenom: "SCRT",
    coinMinimalDenom: "uscrt",
    coinDecimals: 6,
    coinGeckoId: "secret",
  },
  walletUrl:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/secret-network"
      : "http://localhost:8080/chains/secret-network",
  walletUrlForStaking:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/secret-network"
      : "http://localhost:8080/chains/secret-network",
  bip44: {
    coinType: 529,
  },
  alternativeBIP44s: [
    {
      coinType: 118,
    },
  ],
  bech32Config: Bech32Address.defaultBech32Config("secret"),
  currencies: [
    {
      coinDenom: "SCRT",
      coinMinimalDenom: "uscrt",
      coinDecimals: 6,
      coinGeckoId: "secret",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "SCRT",
      coinMinimalDenom: "uscrt",
      coinDecimals: 6,
      coinGeckoId: "secret",
      gasPriceStep: {
        low: 0.2,
        average: 0.25,
        high: 0.3,
      },
    },
  ],
  features: ["secretwasm", "ibc-go", "ibc-transfer"],
},
//sentinelhub
{
  rpc: "https://rpc-sentinel.keplr.app",
  rest: "https://lcd-sentinel.keplr.app",
  chainId: "sentinelhub-2",
  chainName: "Sentinel",
  stakeCurrency: {
    coinDenom: "DVPN",
    coinMinimalDenom: "udvpn",
    coinDecimals: 6,
    coinGeckoId: "sentinel",
  },
  walletUrl:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/sentinel"
      : "http://localhost:8080/chains/sentinel",
  walletUrlForStaking:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/sentinel"
      : "http://localhost:8080/chains/sentinel",
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config("sent"),
  currencies: [
    {
      coinDenom: "DVPN",
      coinMinimalDenom: "udvpn",
      coinDecimals: 6,
      coinGeckoId: "sentinel",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "DVPN",
      coinMinimalDenom: "udvpn",
      coinDecimals: 6,
      coinGeckoId: "sentinel",
      gasPriceStep: {
        low: 0.1,
        average: 0.25,
        high: 0.4,
      },
    },
  ],
  features: ["ibc-transfer"],
},
//shentu
{
  rpc: "https://rpc-certik.keplr.app",
  rest: "https://lcd-certik.keplr.app",
  chainId: "shentu-2.2",
  chainName: "Shentu",
  stakeCurrency: {
    coinDenom: "CTK",
    coinMinimalDenom: "uctk",
    coinDecimals: 6,
    coinGeckoId: "certik",
  },
  walletUrl:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/shentu"
      : "http://localhost:8080/chains/shentu",
  walletUrlForStaking:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/shentu"
      : "http://localhost:8080/chains/shentu",
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config("certik"),
  currencies: [
    {
      coinDenom: "CTK",
      coinMinimalDenom: "uctk",
      coinDecimals: 6,
      coinGeckoId: "certik",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "CTK",
      coinMinimalDenom: "uctk",
      coinDecimals: 6,
      coinGeckoId: "certik",
    },
  ],
  features: ["ibc-transfer", "ibc-go"],
},
//sifchain
{
  rpc: "https://rpc-sifchain.keplr.app",
  rest: "https://lcd-sifchain.keplr.app",
  chainId: "sifchain-1",
  chainName: "Sifchain",
  stakeCurrency: {
    coinDenom: "ROWAN",
    coinMinimalDenom: "rowan",
    coinDecimals: 18,
    coinGeckoId: "sifchain",
  },
  walletUrl:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/sifchain"
      : "http://localhost:8080/chains/sifchain",
  walletUrlForStaking:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/sifchain"
      : "http://localhost:8080/chains/sifchain",
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config("sif"),
  currencies: [
    {
      coinDenom: "ROWAN",
      coinMinimalDenom: "rowan",
      coinDecimals: 18,
      coinGeckoId: "sifchain",
    },
    {
      coinDenom: "Tether USDT",
      coinMinimalDenom: "cusdt",
      coinDecimals: 6,
    },
    {
      coinDenom: "Ethereum",
      coinMinimalDenom: "ceth",
      coinDecimals: 18,
    },
    {
      coinDenom: "Basic Attention Token",
      coinMinimalDenom: "cbat",
      coinDecimals: 18,
    },
    {
      coinDenom: "Aragon",
      coinMinimalDenom: "cant",
      coinDecimals: 18,
    },
    {
      coinDenom: "Bancor Network Token",
      coinMinimalDenom: "cbnt",
      coinDecimals: 18,
    },
    {
      coinDenom: "0x",
      coinMinimalDenom: "czrx",
      coinDecimals: 18,
    },
    {
      coinDenom: "Chainlink",
      coinMinimalDenom: "clink",
      coinDecimals: 18,
    },
    {
      coinDenom: "Decentraland",
      coinMinimalDenom: "cmana",
      coinDecimals: 18,
    },
    {
      coinDenom: "Loopring",
      coinMinimalDenom: "clrc",
      coinDecimals: 18,
    },
    {
      coinDenom: "Enjin Coin",
      coinMinimalDenom: "cenj",
      coinDecimals: 18,
    },
    {
      coinDenom: "Synthetix Network Token",
      coinMinimalDenom: "csnx",
      coinDecimals: 18,
    },
    {
      coinDenom: "TrueUSD",
      coinMinimalDenom: "ctusd",
      coinDecimals: 18,
    },
    {
      coinDenom: "Ocean Protocol",
      coinMinimalDenom: "cocean",
      coinDecimals: 18,
    },
    {
      coinDenom: "Fantom",
      coinMinimalDenom: "cftm",
      coinDecimals: 18,
    },
    {
      coinDenom: "sUSD",
      coinMinimalDenom: "csusd",
      coinDecimals: 18,
    },
    {
      coinDenom: "USD Coin",
      coinMinimalDenom: "cusdc",
      coinDecimals: 6,
    },
    {
      coinDenom: "Crypto com Coin",
      coinMinimalDenom: "ccro",
      coinDecimals: 8,
    },
    {
      coinDenom: "Wrapped Bitcoin",
      coinMinimalDenom: "cwbtc",
      coinDecimals: 8,
    },
    {
      coinDenom: "Swipe",
      coinMinimalDenom: "csxp",
      coinDecimals: 18,
    },
    {
      coinDenom: "Band Protocol",
      coinMinimalDenom: "cband",
      coinDecimals: 18,
    },
    {
      coinDenom: "Dai Stablecoin",
      coinMinimalDenom: "cdai",
      coinDecimals: 18,
    },
    {
      coinDenom: "Compound",
      coinMinimalDenom: "ccomp",
      coinDecimals: 18,
    },
    {
      coinDenom: "UMA",
      coinMinimalDenom: "cuma",
      coinDecimals: 18,
    },
    {
      coinDenom: "Balancer",
      coinMinimalDenom: "cbal",
      coinDecimals: 18,
    },
    {
      coinDenom: "Yearn finance",
      coinMinimalDenom: "cyfi",
      coinDecimals: 18,
    },
    {
      coinDenom: "Serum",
      coinMinimalDenom: "csrm",
      coinDecimals: 6,
    },
    {
      coinDenom: "Cream",
      coinMinimalDenom: "ccream",
      coinDecimals: 18,
    },
    {
      coinDenom: "SAND",
      coinMinimalDenom: "csand",
      coinDecimals: 18,
    },
    {
      coinDenom: "Sushi",
      coinMinimalDenom: "csushi",
      coinDecimals: 18,
    },
    {
      coinDenom: "Empty Set Dollar",
      coinMinimalDenom: "cesd",
      coinDecimals: 18,
    },
    {
      coinDenom: "Uniswap",
      coinMinimalDenom: "cuni",
      coinDecimals: 18,
    },
    {
      coinDenom: "Aave",
      coinMinimalDenom: "caave",
      coinDecimals: 18,
    },
    {
      coinDenom: "BarnBridge",
      coinMinimalDenom: "cbond",
      coinDecimals: 18,
    },
    {
      coinDenom: "Wrapped Filecoin",
      coinMinimalDenom: "cwfil",
      coinDecimals: 18,
    },
    {
      coinDenom: "The Graph",
      coinMinimalDenom: "cgrt",
      coinDecimals: 18,
    },
    {
      coinDenom: "Tokenlon",
      coinMinimalDenom: "clon",
      coinDecimals: 18,
    },
    {
      coinDenom: "1inch",
      coinMinimalDenom: "c1inch",
      coinDecimals: 18,
    },
    {
      coinDenom: "THORChain ERC20",
      coinMinimalDenom: "crune",
      coinDecimals: 18,
    },
    {
      coinDenom: "Secret ERC20",
      coinMinimalDenom: "cwscrt",
      coinDecimals: 6,
    },
    {
      coinDenom: "IoTeX",
      coinMinimalDenom: "ciotx",
      coinDecimals: 18,
    },
    {
      coinDenom: "Reef Finance",
      coinMinimalDenom: "creef",
      coinDecimals: 18,
    },
    {
      coinDenom: "COCOS BCX",
      coinMinimalDenom: "ccocos",
      coinDecimals: 18,
    },
    {
      coinDenom: "Keep Network",
      coinMinimalDenom: "ckeep",
      coinDecimals: 18,
    },
    {
      coinDenom: "Origin Protocol",
      coinMinimalDenom: "cogn",
      coinDecimals: 18,
    },
    {
      coinDenom: "ODAOfi",
      coinMinimalDenom: "cdaofi",
      coinDecimals: 18,
    },
    {
      coinDenom: "Linear",
      coinMinimalDenom: "clina",
      coinDecimals: 18,
    },
    {
      coinDenom: "12Ships",
      coinMinimalDenom: "ctshp",
      coinDecimals: 18,
    },
    {
      coinDenom: "B.20",
      coinMinimalDenom: "cb20",
      coinDecimals: 18,
    },
    {
      coinDenom: "Akropolis",
      coinMinimalDenom: "cakro",
      coinDecimals: 18,
    },
    {
      coinDenom: "Rio Fuel Token",
      coinMinimalDenom: "crfuel",
      coinDecimals: 18,
    },
    {
      coinDenom: "Rally",
      coinMinimalDenom: "crly",
      coinDecimals: 18,
    },
    {
      coinDenom: "Convergence",
      coinMinimalDenom: "cconv",
      coinDecimals: 18,
    },
    {
      coinDenom: "Render Token",
      coinMinimalDenom: "crndr",
      coinDecimals: 18,
    },
    {
      coinDenom: "PAID Network",
      coinMinimalDenom: "cpaid",
      coinDecimals: 18,
    },
    {
      coinDenom: "Tidal",
      coinMinimalDenom: "ctidal",
      coinDecimals: 18,
    },
    {
      coinDenom: "Axie Infinity",
      coinMinimalDenom: "caxs",
      coinDecimals: 18,
    },
    {
      coinDenom: "BitSong",
      coinMinimalDenom: "cbtsg",
      coinDecimals: 18,
    },
    {
      coinDenom: "Cosmostarter",
      coinMinimalDenom: "ccsms",
      coinDecimals: 18,
    },
    {
      coinDenom: "Dfyn Network",
      coinMinimalDenom: "cdfyn",
      coinDecimals: 18,
    },
    {
      coinDenom: "DinoSwap",
      coinMinimalDenom: "cdino",
      coinDecimals: 18,
    },
    {
      coinDenom: "DinoX",
      coinMinimalDenom: "cdnxc",
      coinDecimals: 18,
    },
    {
      coinDenom: "Don-key",
      coinMinimalDenom: "cdon",
      coinDecimals: 18,
    },
    {
      coinDenom: "Ethernity Chain",
      coinMinimalDenom: "cern",
      coinDecimals: 18,
    },
    {
      coinDenom: "Frax",
      coinMinimalDenom: "cfrax",
      coinDecimals: 18,
    },
    {
      coinDenom: "Frax Share",
      coinMinimalDenom: "cfxs",
      coinDecimals: 18,
    },
    {
      coinDenom: "Knit Finance",
      coinMinimalDenom: "ckft",
      coinDecimals: 18,
    },
    {
      coinDenom: "Lido DAO",
      coinMinimalDenom: "cldo",
      coinDecimals: 18,
    },
    {
      coinDenom: "Doge Killer",
      coinMinimalDenom: "cleash",
      coinDecimals: 18,
    },
    {
      coinDenom: "LGCY Network",
      coinMinimalDenom: "clgcy",
      coinDecimals: 18,
    },
    {
      coinDenom: "Polygon",
      coinMinimalDenom: "cmatic",
      coinDecimals: 18,
    },
    {
      coinDenom: "Metis Token",
      coinMinimalDenom: "cmetis",
      coinDecimals: 18,
    },
    {
      coinDenom: "Oh! Finance",
      coinMinimalDenom: "coh",
      coinDecimals: 18,
    },
    {
      coinDenom: "Polkastarter",
      coinMinimalDenom: "cpols",
      coinDecimals: 18,
    },
    {
      coinDenom: "Marlin",
      coinMinimalDenom: "cpond",
      coinDecimals: 18,
    },
    {
      coinDenom: "Quickswap",
      coinMinimalDenom: "cquick",
      coinDecimals: 18,
    },
    {
      coinDenom: "Railgun",
      coinMinimalDenom: "crail",
      coinDecimals: 18,
    },
    {
      coinDenom: "StaFi rATOM",
      coinMinimalDenom: "cratom",
      coinDecimals: 18,
    },
    {
      coinDenom: "Saito",
      coinMinimalDenom: "csaito",
      coinDecimals: 18,
    },
    {
      coinDenom: "Shiba Inu",
      coinMinimalDenom: "cshib",
      coinDecimals: 18,
    },
    {
      coinDenom: "Tokemak",
      coinMinimalDenom: "ctoke",
      coinDecimals: 18,
    },
    {
      coinDenom: "UFO Gaming",
      coinMinimalDenom: "cufo",
      coinDecimals: 18,
    },
    {
      coinDenom: "UST (ERC-20)",
      coinMinimalDenom: "cust",
      coinDecimals: 18,
    },
    {
      coinDenom: "0chain",
      coinMinimalDenom: "czcn",
      coinDecimals: 18,
    },
    {
      coinDenom: "Unizen",
      coinMinimalDenom: "czcx",
      coinDecimals: 18,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "ROWAN",
      coinMinimalDenom: "rowan",
      coinDecimals: 18,
      coinGeckoId: "sifchain",
      gasPriceStep: {
        low: 1000000000000,
        average: 1500000000000,
        high: 2000000000000,
      },
    },
  ],
  features: [],
},
//sommelier
{
  rpc: "https://rpc-sommelier.keplr.app",
  rest: "https://lcd-sommelier.keplr.app",
  chainId: "sommelier-3",
  chainName: "Sommelier",
  stakeCurrency: {
    coinDenom: "SOMM",
    coinMinimalDenom: "usomm",
    coinDecimals: 6,
    coinGeckoId: "sommelier",
  },
  walletUrl:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/sommelier"
      : "http://localhost:8080/chains/sommelier",
  walletUrlForStaking:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/sommelier"
      : "http://localhost:8080/chains/sommelier",
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config("somm"),
  currencies: [
    {
      coinDenom: "SOMM",
      coinMinimalDenom: "usomm",
      coinDecimals: 6,
      coinGeckoId: "sommelier",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "SOMM",
      coinMinimalDenom: "usomm",
      coinDecimals: 6,
      coinGeckoId: "sommelier",
    },
  ],
  features: ["ibc-transfer", "ibc-go"],
},
//stargaze
{
  rpc: "https://rpc-stargaze.keplr.app",
  rest: "https://lcd-stargaze.keplr.app",
  chainId: "stargaze-1",
  chainName: "Stargaze",
  stakeCurrency: {
    coinDenom: "STARS",
    coinMinimalDenom: "ustars",
    coinDecimals: 6,
    coinGeckoId: "stargaze",
  },
  walletUrl:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/stargaze"
      : "http://localhost:8080/chains/stargaze",
  walletUrlForStaking:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/stargaze"
      : "http://localhost:8080/chains/stargaze",
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config("stars"),
  currencies: [
    {
      coinDenom: "STARS",
      coinMinimalDenom: "ustars",
      coinDecimals: 6,
      coinGeckoId: "stargaze",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "STARS",
      coinMinimalDenom: "ustars",
      coinDecimals: 6,
      coinGeckoId: "stargaze",
    },
  ],
  features: ["ibc-transfer", "ibc-go"],
},
//stride
{
    rpc: "https://rpc-stride.keplr.app",
    rest: "https://lcd-stride.keplr.app",
    chainId: "stride-1",
    chainName: "Stride",
    stakeCurrency: {
      coinDenom: "STRD",
      coinMinimalDenom: "ustrd",
      coinDecimals: 6,
      coinGeckoId: "stride",
    },
    walletUrl:
      process.env.NODE_ENV === "production"
        ? "https://wallet.keplr.app/chains/stride"
        : "http://localhost:8080/chains/stride",
    walletUrlForStaking:
      process.env.NODE_ENV === "production"
        ? "https://wallet.keplr.app/chains/stride"
        : "http://localhost:8080/chains/stride",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("stride"),
    currencies: [
      {
        coinDenom: "STRD",
        coinMinimalDenom: "ustrd",
        coinDecimals: 6,
        coinGeckoId: "stride",
      },
      {
        coinDenom: "stATOM",
        coinMinimalDenom: "stuatom",
        coinDecimals: 6,
      },
      {
        coinDenom: "stOSMO",
        coinMinimalDenom: "stuosmo",
        coinDecimals: 6,
      },
      {
        coinDenom: "stJUNO",
        coinMinimalDenom: "stujuno",
        coinDecimals: 6,
      },
      {
        coinDenom: "stSTARS",
        coinMinimalDenom: "stustars",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "STRD",
        coinMinimalDenom: "ustrd",
        coinDecimals: 6,
        coinGeckoId: "stride",
        gasPriceStep: {
          low: 0,
          average: 0,
          high: 0.04,
        },
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
},
//territori
{
  "rpc": "https://rpc.cosmos.directory/teritori",
  "rest": "https://rest.cosmos.directory/teritori",
  "chainId": "teritori-1",
  "chainName": "Teritori",
  "stakeCurrency": {
    "coinDenom": "TORI",
    "coinMinimalDenom": "utori",
    "coinDecimals": 6,
    "coinGeckoId": "teritori"
  },
  "bip44": {
    "coinType": 118
  },
  "walletUrlForStaking": "https://restake.app/teritori",
  "bech32Config": {
    "bech32PrefixAccAddr": "tori",
    "bech32PrefixAccPub": "toripub",
    "bech32PrefixValAddr": "torivaloper",
    "bech32PrefixValPub": "torivaloperpub",
    "bech32PrefixConsAddr": "torivalcons",
    "bech32PrefixConsPub": "torivalconspub"
  },
  "currencies": [
    {
      "coinDenom": "TORI",
      "coinMinimalDenom": "utori",
      "coinDecimals": 6,
      "coinGeckoId": "teritori"
    }
  ],
  "feeCurrencies": [
    {
      "coinDenom": "TORI",
      "coinMinimalDenom": "utori",
      "coinDecimals": 6,
      "coinGeckoId": "teritori",
      "gasPriceStep": {
        "low": 0,
        "average": 0.25,
        "high": 0.5
      }
    }
  ],
  "beta": true
},
//tgrade
{
  rpc: "https://rpc-tgrade.keplr.app",
  rest: "https://lcd-tgrade.keplr.app",
  chainId: "tgrade-mainnet-1",
  chainName: "Tgrade",
  stakeCurrency: {
    coinDenom: "TGD",
    coinMinimalDenom: "utgd",
    coinDecimals: 6,
  },
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config("tgrade"),
  currencies: [
    {
      coinDenom: "TGD",
      coinMinimalDenom: "utgd",
      coinDecimals: 6,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "TGD",
      coinMinimalDenom: "utgd",
      coinDecimals: 6,
      gasPriceStep: {
        low: 0.05,
        average: 0.05,
        high: 0.075,
      },
    },
  ],
  features: ["cosmwasm", "ibc-transfer", "ibc-go", "wasmd_0.24+"],
}, 
//umee
{
  rpc: "https://rpc-umee.keplr.app",
  rest: "https://lcd-umee.keplr.app",
  chainId: "umee-1",
  chainName: "Umee",
  stakeCurrency: {
    coinDenom: "UMEE",
    coinMinimalDenom: "uumee",
    coinDecimals: 6,
  },
  walletUrl:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/umee"
      : "http://localhost:8080/chains/umee",
  walletUrlForStaking:
    process.env.NODE_ENV === "production"
      ? "https://wallet.keplr.app/chains/umee"
      : "http://localhost:8080/chains/umee",
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config("umee"),
  currencies: [
    {
      coinDenom: "UMEE",
      coinMinimalDenom: "uumee",
      coinDecimals: 6,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "UMEE",
      coinMinimalDenom: "uumee",
      coinDecimals: 6,
      gasPriceStep: {
        low: 0.05,
        average: 0.06,
        high: 0.1,
      },
    },
  ],
  features: ["ibc-transfer", "ibc-go"],
},
//xpla
{
  "rpc": "https://rpc.cosmos.directory/xpla",
  "rest": "https://rest.cosmos.directory/xpla",
  "chainId": "dimension_37-1",
  "chainName": "XPLA",
  "stakeCurrency": {
    "coinDenom": "XPLA",
    "coinMinimalDenom": "axpla",
    "coinDecimals": 18,
    "coinGeckoId": "xpla"
  },
  "bip44": {
    "coinType": 60
  },
  "walletUrlForStaking": "https://restake.app/xpla",
  "bech32Config": {
    "bech32PrefixAccAddr": "xpla",
    "bech32PrefixAccPub": "xplapub",
    "bech32PrefixValAddr": "xplavaloper",
    "bech32PrefixValPub": "xplavaloperpub",
    "bech32PrefixConsAddr": "xplavalcons",
    "bech32PrefixConsPub": "xplavalconspub"
  },
  "currencies": [
    {
      "coinDenom": "XPLA",
      "coinMinimalDenom": "axpla",
      "coinDecimals": 18,
      "coinGeckoId": "xpla"
    }
  ],
  "feeCurrencies": [
    {
      "coinDenom": "XPLA",
      "coinMinimalDenom": "axpla",
      "coinDecimals": 18,
      "coinGeckoId": "xpla",
      "gasPriceStep": {
        "low": 850000000000,
        "average": 850000000000,
        "high": 1700000000000
      }
    }
  ],
  "features": [
    "ibc-transfer",
    "ibc-go",
    "eth-address-gen",
    "eth-key-sign"
  ],
  "beta": true
},
];

// The origins that are able to pass any permission that external webpages can have.
export const PrivilegedOrigins: string[] = [
  "https://wallet.keplr.app",
  "https://validator.keplr.app",
  "https://chains.keplr.app",
];

export const CommunityChainInfoRepo = {
  organizationName: "MouazzamaAnalog",
  repoName: "En_Chains",
  branchName: "main",
};
