/// <reference types="./Observable.forEach.d.ts" />

import { alwaysTrue, compose } from "../../../functions.js";
import Observable_enqueue from "./Observable.enqueue.js";
const Observable_forEach = (effect) => Observable_enqueue(compose(effect, alwaysTrue));
export default Observable_forEach;
