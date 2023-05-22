/// <reference types="./Observable.fromFactory.d.ts" />

import { compose } from "../../functions.js";
import Observable_fromValue from "./Observable.fromValue.js";
import Observable_map from "./Observable.map.js";
const Observable_fromFactory = ((options) => compose(Observable_fromValue(options), Observable_map((f) => f())));
export default Observable_fromFactory;
