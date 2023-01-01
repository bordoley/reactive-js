/// <reference types="./DispatcherLike.getScheduler.d.ts" />
import { DispatcherLike_scheduler } from '../../../scheduling.mjs';

const DispatcherLike__getScheduler = (dispatcher) => dispatcher[DispatcherLike_scheduler];

export { DispatcherLike__getScheduler as default };
