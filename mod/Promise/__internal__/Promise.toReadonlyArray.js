/// <reference types="./Promise.toReadonlyArray.d.ts" />

const Promise_toReadonlyArrayAsync = () => (promise) => promise.then((v) => [v]);
export default Promise_toReadonlyArrayAsync;
