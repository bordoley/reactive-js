/// <reference types="./Dispatcher.dispatch.d.ts" />

import { DispatcherLike_dispatch } from "../../../scheduling.js";
const Dispatcher_dispatch = (v) => dispatcher => {
    dispatcher[DispatcherLike_dispatch](v);
    return dispatcher;
};
export default Dispatcher_dispatch;
