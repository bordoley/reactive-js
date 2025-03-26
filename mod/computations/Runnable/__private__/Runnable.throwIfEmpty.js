/// <reference types="./Runnable.throwIfEmpty.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as ThrowIfEmptySink from "../../__internal__/sinks/ThrowIfEmptySink.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_throwIfEmpty = (factory) => pipe((ThrowIfEmptySink.create), partial(factory), Runnable_lift());
export default Runnable_throwIfEmpty;
