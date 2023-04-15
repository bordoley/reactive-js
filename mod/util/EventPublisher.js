/// <reference types="./EventPublisher.d.ts" />

import EventPublisher_create from "./EventPublisher/__internal__/EventPublisher.create.js";
import EventPublisher_createRefCounted from "./EventPublisher/__internal__/EventPublisher.createRefCounted.js";
import EventPublisher_disposed from "./EventPublisher/__internal__/EventPublisher.disposed.js";
export const create = EventPublisher_create;
export const createRefCounted = EventPublisher_createRefCounted;
export const disposed = EventPublisher_disposed;
