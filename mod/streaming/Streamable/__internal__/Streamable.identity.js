/// <reference types="./Streamable.identity.d.ts" />

import { identity } from "../../../functions.js";
import Streamable_createLifted from "./Streamable.createLifted.js";
const instance = /*@__PURE__*/ (() => Streamable_createLifted(identity, true, true, true))();
const Streamable_identity = () => instance;
export default Streamable_identity;
