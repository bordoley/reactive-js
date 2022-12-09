/// <reference types="./SchedulerLike.requestYield.d.ts" />
import { SchedulerLike_requestYield } from '../../../scheduling.mjs';

const requestYield = (scheduler) => scheduler[SchedulerLike_requestYield]();

export { requestYield };
