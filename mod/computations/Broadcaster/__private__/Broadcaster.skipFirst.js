/// <reference types="./Broadcaster.skipFirst.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as SkipFirstSink from "../../__internal__/sinks/SkipFirstSink.js";
import Broadcaster_lift from "./Broadcaster.lift.js";
const Broadcaster_skipFirst = ((options) => pipe(SkipFirstSink.create, partial(options?.count), (Broadcaster_lift)));
export default Broadcaster_skipFirst;
