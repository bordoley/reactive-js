/// <reference types="./Producer.takeLast.d.ts" />

import * as Observer from "../../../utils/__internal__/Observer.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import { Producer_genPure } from "./Producer.gen.js";
const m = {
    genPure: Producer_genPure,
};
const Producer_takeLast = ((options) => DeferredSource.createTakeLast(m)(Observer.takeLast, options));
export default Producer_takeLast;
