# wasm-ferris-says

A little glue on the `ferris-says` crate to support easy WASM interop.

- [ferris-says](https://github.com/mgattozzi/ferris-says)
- built on the [wasm-pack-template](https://github.com/rustwasm/wasm-pack-template)
- test web client bootstrapped with [create-wasm-app](https://github.com/rustwasm/create-wasm-app)

## getting started

- Get the code: `git clone https://github.com/bever1337/wasm-ferris-says.git`
- Navigate to the cloned repo: `cd wasm-ferris-says`
- Generate WASM for rust glue: `wasm-pack build`
- Navigate to the test client: `cd www`
- Install node depdencies: `npm i`
- Bundle the WASM node module: `npm run build`
- Start the dev server: `npm run start`
- Navigate to `localhost:8080` in your browser of choice
