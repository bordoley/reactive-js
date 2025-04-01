/// <reference types="./Producer.takeLast.d.ts" />

import * as Consumer from "../../../utils/__internal__/Consumer.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import { Producer_genPure } from "./Producer.gen.js";
const Producer_takeLast = ((options) => DeferredEventSource.takeLast(Producer_genPure, Consumer.takeLast, options));
export default Producer_takeLast;
