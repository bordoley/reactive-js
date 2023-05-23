/// <reference types="./Enumerable.enumerate.d.ts" />

import { EnumerableLike_enumerate } from "../../types.js";
const Enumerable_enumerate = () => (enumerable) => enumerable[EnumerableLike_enumerate]();
export default Enumerable_enumerate;
