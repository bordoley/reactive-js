/// <reference types="./Observable.enumerate.d.ts" />

import { EnumerableLike_enumerate } from "../../types.js";
const Observable_enumerate = () => (enumerable) => enumerable[EnumerableLike_enumerate]();
export default Observable_enumerate;
