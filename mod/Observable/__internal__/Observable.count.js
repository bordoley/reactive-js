/// <reference types="./Observable.count.d.ts" />

import { increment, returns } from "../../functions.js";
import Observable_reduce from "./Observable.reduce.js";
const Observable_count = () => Observable_reduce(increment, returns(0));
export default Observable_count;
