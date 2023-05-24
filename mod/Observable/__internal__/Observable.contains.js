/// <reference types="./Observable.contains.d.ts" />

import { isEqualTo } from "../../functions.js";
import Observable_someSatisfy from "./Observable.someSatisfy.js";
const Observable_contains = (value, options) => Observable_someSatisfy(isEqualTo(value, options));
export default Observable_contains;
