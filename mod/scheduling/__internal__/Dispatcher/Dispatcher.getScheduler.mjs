/// <reference types="./Dispatcher.getScheduler.d.ts" />
import { DispatcherLike_scheduler } from '../../../scheduling.mjs';

const Dispatcher_getScheduler = (dispatcher) => dispatcher[DispatcherLike_scheduler];

export { Dispatcher_getScheduler as default };
