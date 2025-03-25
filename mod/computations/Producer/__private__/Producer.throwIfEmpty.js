/// <reference types="./Producer.throwIfEmpty.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as ThrowIfEmptyOperator from "../../__internal__/operators/ThrowIfEmptyOperator.js";
import Producer_lift from "./Producer.lift.js";
const Producer_throwIfEmpty = ((factory) => pipe(ThrowIfEmptyOperator.create, partial(factory), Producer_lift()));
export default Producer_throwIfEmpty;
