/// <reference types="./Producer.throwIfEmpty.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as ThrowIfEmptySink from "../../__internal__/sinks/ThrowIfEmptySink.js";
import Producer_lift from "./Producer.lift.js";
const Producer_throwIfEmpty = ((factory) => pipe(ThrowIfEmptySink.create, partial(factory), Producer_lift()));
export default Producer_throwIfEmpty;
