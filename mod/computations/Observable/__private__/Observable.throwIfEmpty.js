/// <reference types="./Observable.throwIfEmpty.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as ThrowIfEmptySink from "../../__internal__/sinks/ThrowIfEmptySink.js";
import Observable_lift from "./Observable.lift.js";
const Observable_throwIfEmpty = ((factory) => pipe(ThrowIfEmptySink.create, partial(factory), Observable_lift()));
export default Observable_throwIfEmpty;
