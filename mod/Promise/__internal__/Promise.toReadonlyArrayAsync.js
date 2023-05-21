/// <reference types="./Promise.toReadonlyArrayAsync.d.ts" />

const Promise_toReadonlyArrayAsync = () => (promise) => promise.then((v) => [v]);
export default Promise_toReadonlyArrayAsync;
