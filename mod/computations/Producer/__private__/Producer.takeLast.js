/// <reference types="./Producer.takeLast.d.ts" />

import * as Consumer from "../../../utils/__internal__/Consumer.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import { Producer_genPure } from "./Producer.gen.js";
const Producer_takeLast = ((options) => DeferredSource.takeLast(Producer_genPure, (_, n) => Consumer.takeLast(n), options));
export default Producer_takeLast;
