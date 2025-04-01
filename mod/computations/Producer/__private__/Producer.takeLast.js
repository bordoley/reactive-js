/// <reference types="./Producer.takeLast.d.ts" />

import * as Consumer from "../../../utils/__internal__/Consumer.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";
import { Producer_genPure } from "./Producer.gen.js";
const Producer_takeLast = ((options) => DeferredReactiveSource.takeLast(Producer_genPure, Consumer.takeLast, options));
export default Producer_takeLast;
