/// <reference types="./Observable.log.d.ts" />

import { log } from "../../../functions.js";
import Observable_forEach from "./Observable.forEach.js";
const Observable_log = () => Observable_forEach(log);
export default Observable_log;
