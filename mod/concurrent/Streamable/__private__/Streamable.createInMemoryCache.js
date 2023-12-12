/// <reference types="./Streamable.createInMemoryCache.d.ts" />

import { none } from "../../../functions.js";
import Streamable_createCache from "./Streamable.createCache.js";
const Streamable_createInMemoryCache = (options = {}) => Streamable_createCache(none, options);
export default Streamable_createInMemoryCache;
