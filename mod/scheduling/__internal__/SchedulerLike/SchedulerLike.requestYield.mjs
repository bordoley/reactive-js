/// <reference types="./SchedulerLike.requestYield.d.ts" />
import { SchedulerLike_requestYield } from '../../../scheduling.mjs';

const SchedulerLike__requestYield = (scheduler) => scheduler[SchedulerLike_requestYield]();

export { SchedulerLike__requestYield as default };
