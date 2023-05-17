/// <reference types="./Enumerator.concatMap.d.ts" />

import Enumerator_map from "../../Enumerator/__internal__/Enumerator.map.js";
import { compose } from "../../functions.js";
import Enumerator_concatAll from "./Enumerator.concatAll.js";
const Enumerator_concatMap = (selector) => compose(Enumerator_map(selector), Enumerator_concatAll());
export default Enumerator_concatMap;
