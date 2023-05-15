/// <reference types="./Observable.fromFactory.d.ts" />

import Optional_toObservable from "../../Optional/__internal__/Optional.toObservable.js";
import { compose } from "../../functions.js";
import Observable_map from "./Observable.map.js";
const Observable_fromFactory = ((options) => compose(Optional_toObservable(options), Observable_map((f) => f())));
export default Observable_fromFactory;
