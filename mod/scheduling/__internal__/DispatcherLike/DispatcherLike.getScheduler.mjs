/// <reference types="./DispatcherLike.getScheduler.d.ts" />
import { DispatcherLike_scheduler } from '../../../scheduling.mjs';

const getScheduler = (dispatcher) => dispatcher[DispatcherLike_scheduler];

export { getScheduler as default };
