/// <reference types="./ObserverLike.d.ts" />
const ObserverLike_dispatcher = Symbol("ObserverLike_dispatcher");
const ObserverLike_scheduler = Symbol("ObserverLike_scheduler");
const getScheduler = (observer) => observer[ObserverLike_scheduler];
const getDispatcher = (observer) => observer[ObserverLike_dispatcher];

export { ObserverLike_dispatcher, ObserverLike_scheduler, getDispatcher, getScheduler };
