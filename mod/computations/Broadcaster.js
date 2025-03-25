/// <reference types="./Broadcaster.d.ts" />

import { Computation_baseOfT, Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, } from "../computations.js";
import Broadcaster_addEventHandler from "./Broadcaster/__private__/Broadcaster.addEventHandler.js";
import Broadcaster_create from "./Broadcaster/__private__/Broadcaster.create.js";
import Broadcaster_gen from "./Broadcaster/__private__/Broadcaster.gen.js";
import Broadcaster_map from "./Broadcaster/__private__/Broadcaster.map.js";
import Broadcaster_merge from "./Broadcaster/__private__/Broadcaster.merge.js";
import Broadcaster_toProducer from "./Broadcaster/__private__/Broadcaster.toProducer.js";
import Broadcaster_toReadonlyArrayAsync from "./Broadcaster/__private__/Broadcaster.toReadonlyArrayAsync.js";
export const addEventHandler = Broadcaster_addEventHandler;
export const create = Broadcaster_create;
export const gen = Broadcaster_gen;
export const genPure = Broadcaster_gen;
export const map = Broadcaster_map;
export const merge = Broadcaster_merge;
export const toProducer = Broadcaster_toProducer;
export const toReadonlyArrayAsync = Broadcaster_toReadonlyArrayAsync;
