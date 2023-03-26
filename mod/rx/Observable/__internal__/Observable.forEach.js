/// <reference types="./Observable.forEach.d.ts" />

import Observable_enqueue from "./Observable.enqueue.js";
const Observable_forEach = (effect) => Observable_enqueue(effect);
export default Observable_forEach;
