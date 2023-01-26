/// <reference types="./Dispatcher.dispatch.d.ts" />
import { DispatcherLike_dispatch } from '../../../scheduling.mjs';

const Dispatcher_dispatch = (v) => dispatcher => {
    dispatcher[DispatcherLike_dispatch](v);
    return dispatcher;
};

export { Dispatcher_dispatch as default };
