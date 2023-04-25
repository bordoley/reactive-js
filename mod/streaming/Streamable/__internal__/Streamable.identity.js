/// <reference types="./Streamable.identity.d.ts" />

import { identity } from "../../../functions.js";
import Streamable_create from "./Streamable.create.js";
const instance = /*@__PURE__*/ (() => Streamable_create(identity))();
const Streamable_identity = () => instance;
export default Streamable_identity;
