/// <reference types="./PausableSchedulerLike.d.ts" />
const PausableSchedulerLike_pause = Symbol("PausableSchedulerLike_pause");
const PausableSchedulerLike_resume = Symbol("PausableSchedulerLike_resume");
const pause = (scheduler) => scheduler[PausableSchedulerLike_pause]();
const resume = (scheduler) => scheduler[PausableSchedulerLike_resume]();

export { PausableSchedulerLike_pause, PausableSchedulerLike_resume, pause, resume };
