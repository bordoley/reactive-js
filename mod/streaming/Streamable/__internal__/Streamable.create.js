/// <reference types="./Streamable.create.d.ts" />

import Streamable_createLifted from "./Streamable.createLifted.js";
const Streamable_create = (op) => Streamable_createLifted(op, false, false, false);
export default Streamable_create;
