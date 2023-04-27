/// <reference types="./EventPublisher.create.d.ts" />

import { alwaysTrue, identity } from "../../../functions.js";
import EventPublisher_createWithPredicateAndSelector from "./EventPublisher.createWithPredicateAndSelector.js";
const EventPublisher_create = () => EventPublisher_createWithPredicateAndSelector(alwaysTrue, identity);
export default EventPublisher_create;
