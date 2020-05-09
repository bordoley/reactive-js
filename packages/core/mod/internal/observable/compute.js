import { compose, call } from "../../functions.js";
import { fromValue } from "./fromValue.js";
import { map } from "./map.js";
export const compute = (options) => compose(fromValue(options), map(call()));
