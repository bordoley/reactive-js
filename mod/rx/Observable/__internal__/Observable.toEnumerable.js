/// <reference types="./Observable.toEnumerable.d.ts" />

import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_throws from "./Observable.throws.js";
const Observable_toEnumerable = () => (obs) => Observable_isEnumerable(obs) ? obs : Observable_throws();
export default Observable_toEnumerable;
