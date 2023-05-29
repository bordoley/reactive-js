/// <reference types="./ReadonlyArray.keySet.d.ts" />

import Observable_toReadonlySet from "../../Observable/__internal__/Observable.toReadonlySet.js";
import { compose } from "../../functions.js";
import ReadonlyArray_keys from "./ReadonlyArray.keys.js";
const ReadonlyArray_keySet = (() => compose(ReadonlyArray_keys(), Observable_toReadonlySet()));
export default ReadonlyArray_keySet;
