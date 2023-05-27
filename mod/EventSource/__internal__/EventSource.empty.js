/// <reference types="./EventSource.empty.d.ts" />

import { invoke, pipe } from "../../functions.js";
import { DisposableLike_dispose } from "../../types.js";
import EventSource_create from "./EventSource.create.js";
const empty = /*@__PURE__*/ pipe(DisposableLike_dispose, invoke, EventSource_create);
const EventSource_empty = () => empty;
export default EventSource_empty;
