/// <reference types="./ReadonlyMap.keySet.d.ts" />

import { newInstance } from "../../../functions.js";
const ReadonlyMap_keySet = () => (map) => newInstance((Set), map.keys());
export default ReadonlyMap_keySet;
