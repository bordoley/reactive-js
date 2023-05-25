/// <reference types="./Observable.fromFactory.d.ts" />

import { compose } from "../../functions.js";
import Observable_fromValue from "./Observable.fromValue.js";
import Observable_map from "./Observable.map.js";
const Observable_fromFactory = (() => compose(Observable_fromValue(), Observable_map((f) => f())));
export default Observable_fromFactory;
