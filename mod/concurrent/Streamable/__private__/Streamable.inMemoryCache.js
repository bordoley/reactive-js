/// <reference types="./Streamable.inMemoryCache.d.ts" />

import { none } from "../../../functions.js";
import Streamable_cache from "./Streamable.cache.js";
const Streamable_inMemoryCache = (options = {}) => Streamable_cache(none, options);
export default Streamable_inMemoryCache;
