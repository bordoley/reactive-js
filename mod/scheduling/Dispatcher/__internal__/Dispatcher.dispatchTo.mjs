/// <reference types="./Dispatcher.dispatchTo.d.ts" />
import { DispatcherLike_dispatch } from '../../../scheduling.mjs';

const Dispatcher_dispatchTo = (dispatcher) => v => dispatcher[DispatcherLike_dispatch](v);

export { Dispatcher_dispatchTo as default };
