/// <reference types="./observer.d.ts" />
const getScheduler = (observer) => observer.scheduler;
const getDispatcher = (observer) => observer.dispatcher;

export { getDispatcher, getScheduler };
