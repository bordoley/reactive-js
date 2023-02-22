/// <reference types="./Dispatcher.d.ts" />

import { DispatcherLike_dispatch, DispatcherLike_scheduler, } from "../scheduling.js";
import Dispatcher_dispatch from "./Dispatcher/__internal__/Dispatcher.dispatch.js";
import Dispatcher_dispatchTo from "./Dispatcher/__internal__/Dispatcher.dispatchTo.js";
import Dispatcher_getScheduler from "./Dispatcher/__internal__/Dispatcher.getScheduler.js";
export const dispatch = Dispatcher_dispatch;
export const dispatchTo = Dispatcher_dispatchTo;
export const getScheduler = Dispatcher_getScheduler;
