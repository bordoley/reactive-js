/// <reference types="./EnumerableBase.enumerate.d.ts" />

import { EnumerableLike_enumerate } from "../../types.js";
const EnumerableBase_enumerate = () => (enumerable) => enumerable[EnumerableLike_enumerate]();
export default EnumerableBase_enumerate;
