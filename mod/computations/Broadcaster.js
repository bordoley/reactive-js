/// <reference types="./Broadcaster.d.ts" />

import { BroadcasterLike_connect, } from "../computations.js";
import { returns } from "../functions.js";
import Observable_create from "./Observable/__private__/Observable.create.js";
export const toObservable = /*@__PURE__*/ (() => returns((broadcaster) => Observable_create(observer => {
    broadcaster[BroadcasterLike_connect](observer);
})))();
