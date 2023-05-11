/// <reference types="./Observable.fromFactory.d.ts" />

import Optional_toRunnable from "../../Optional/__internal__/Optional.toRunnable.js";
import { compose } from "../../functions.js";
import Observable_map from "./Observable.map.js";
const Observable_fromFactory = ((options) => compose(Optional_toRunnable(options), Observable_map((f) => f())));
export default Observable_fromFactory;
