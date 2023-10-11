# EthicalNode Wallet Browser Extension

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)


## Official Releases
  - EthicalNode officially supports Chrome, Firefox.

## Building browser extension locally

### Requirements

- protoc v21.3 (recommended)

  ```sh
    # This script is example for mac arm64 user. for other OS, replace URL(starts with https://..) to be matched with your OS from https://github.com/protocolbuffers/protobuf/releases/tag/v21.3
    curl -Lo protoc-21.3.zip https://github.com/protocolbuffers/protobuf/releases/download/v21.3/protoc-21.3-osx-aarch_64.zip 
    unzip protoc-21.3.zip -d $HOME/protoc
    cp -r $HOME/protoc/include /usr/local
    cp -r $HOME/protoc/bin /usr/local
  ```
  
- [Node.js v18+](https://nodejs.org/)
  
Clone this repo and run:

```sh
yarn && yarn build
```

You can find the build output of EthicalNode Extension in packages/extension/build/manifest-v3. This output only works on Chrome now, so we recommend using other build outputs (in packages/extension/build/manifest-v2 or packages/extension/build/firefox) for other browsers. You can visit [this page](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked) for instructions on loading the build output on Chrome.

## License

### Browser Extension
Copyright 2023 EthicalNode Wallet Extension

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

NOTICE: THIS FILE HAS BEEN MODIFIED BY Analog Mutations UNDER COMPLIANCE WITH THE APACHE 2.0 LICENCE FROM THE ORIGINAL WORK 
OF THE COMPANY Keplr (Chainapsis, Inc).

### iOS / Android App

Copyright (c) 2021 Chainapsis Inc. All rights reserved.
