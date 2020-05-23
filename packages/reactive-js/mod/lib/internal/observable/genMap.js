import { compose, returns } from "../../functions.js";
import { fromIterator } from "./fromIterable.js";
import { map } from "./map.js";
import { concatMap } from "./mergeAll.js";
export const genMap = (mapper) => compose(map(mapper), concatMap(compose(returns, fromIterator())));
