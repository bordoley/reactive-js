/// <reference types="./Dispatcher.dispatchTo.d.ts" />

import { DispatcherLike_dispatch } from "../../../scheduling.js";
const Dispatcher_dispatchTo = (dispatcher) => v => dispatcher[DispatcherLike_dispatch](v);
export default Dispatcher_dispatchTo;
