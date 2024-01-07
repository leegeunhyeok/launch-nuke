# launch-nuke

> 💥 Only evaluate once, You can never undo.

## Installation

```bash
npm install launch-nuke
# or yarn
yarn add launch-nuke
```

## Usage

```ts
import { launcher } from 'launch-nuke';

const launch = launcher(() => console.log('💥 launched'));

// Fire!
launch();
```

## Scripts

```bash
# Lint with `oxc`
yarn lint

# Run typescript based demo code with `swc`
yarn demo

# Run typescript based unit tests with `swc` + `jest`
yarn test

# Build with `esbuild`
yarn build

# Publish to npm
yarn release
```

## License

[MIT](./LICENSE)
