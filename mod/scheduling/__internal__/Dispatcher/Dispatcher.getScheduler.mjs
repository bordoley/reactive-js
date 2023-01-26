/// <reference types="./Dispatcher.getScheduler.d.ts" />
import { DispatcherLike_scheduler } from '../../../scheduling.mjs';

const Dispatcher$getScheduler = (dispatcher) => dispatcher[DispatcherLike_scheduler];

export { Dispatcher$getScheduler as default };
