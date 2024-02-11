/// <reference types="./Streamable.persistentCache.d.ts" />

import Streamable_cache from "./Streamable.cache.js";
const Streamable_persistentCache = (persistentStore, options = {}) => Streamable_cache(persistentStore, options);
export default Streamable_persistentCache;
