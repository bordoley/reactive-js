/// <reference types="./Observable.forEach.d.ts" />

import { compose, ignore } from "../../../functions.js";
import Observable_enqueue from "./Observable.enqueue.js";
const Observable_forEach = (effect) => Observable_enqueue(compose(effect, ignore));
export default Observable_forEach;
