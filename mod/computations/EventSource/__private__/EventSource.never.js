/// <reference types="./EventSource.never.d.ts" />

import { ignore, returns } from "../../../functions.js";
import EventSource_create from "./EventSource.create.js";
const neverInstance = /*@__PURE__*/ EventSource_create(ignore);
const EventSource_never = /*@__PURE__*/ returns(neverInstance);
export default EventSource_never;
