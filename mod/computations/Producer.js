/// <reference types="./Producer.d.ts" />

import { ComputationTypeLike_baseOfT, } from "../computations.js";
import { identity, identityLazy, returns } from "../functions.js";
import Broadcaster_toProducer from "./Broadcaster/__private__/Broadcaster.toProducer.js";
import Observable_toProducer from "./Observable/__private__/Observable.toProducer.js";
import Producer_broadcast from "./Producer/__private__/Producer.broadcast.js";
import Producer_buffer from "./Producer/__private__/Producer.buffer.js";
import Producer_catchError from "./Producer/__private__/Producer.catchError.js";
import Producer_concat from "./Producer/__private__/Producer.concat.js";
import Producer_create from "./Producer/__private__/Producer.create.js";
import Producer_decodeWithCharset from "./Producer/__private__/Producer.decodeWithCharset.js";
import Producer_distinctUntilChanged from "./Producer/__private__/Producer.distinctUntilChanged.js";
import Producer_encodeUtf8 from "./Producer/__private__/Producer.encodeUtf8.js";
import Producer_forEach from "./Producer/__private__/Producer.forEach.js";
import Producer_forkMerge from "./Producer/__private__/Producer.forkMerge.js";
import { Producer_gen, Producer_genPure, } from "./Producer/__private__/Producer.gen.js";
import { Producer_genAsync, Producer_genPureAsync, } from "./Producer/__private__/Producer.genAsync.js";
import Producer_keep from "./Producer/__private__/Producer.keep.js";
import { Producer_combineLatest, Producer_zipLatest, } from "./Producer/__private__/Producer.latest.js";
import Producer_map from "./Producer/__private__/Producer.map.js";
import Producer_merge from "./Producer/__private__/Producer.merge.js";
import { Producer_concatAll, Producer_mergeAll, } from "./Producer/__private__/Producer.mergeAll.js";
import Producer_pairwise from "./Producer/__private__/Producer.pairwise.js";
import Producer_repeat from "./Producer/__private__/Producer.repeat.js";
import Producer_retry from "./Producer/__private__/Producer.retry.js";
import Producer_scan from "./Producer/__private__/Producer.scan.js";
import Producer_scanDistinct from "./Producer/__private__/Producer.scanDistinct.js";
import Producer_scanMany from "./Producer/__private__/Producer.scanMany.js";
import Producer_skipFirst from "./Producer/__private__/Producer.skipFirst.js";
import Producer_switchAll from "./Producer/__private__/Producer.switchAll.js";
import Producer_takeFirst from "./Producer/__private__/Producer.takeFirst.js";
import Producer_takeLast from "./Producer/__private__/Producer.takeLast.js";
import Producer_takeUntil from "./Producer/__private__/Producer.takeUntil.js";
import Producer_takeWhile from "./Producer/__private__/Producer.takeWhile.js";
import Producer_throwIfEmpty from "./Producer/__private__/Producer.throwIfEmpty.js";
import Producer_withBackpressure from "./Producer/__private__/Producer.withBackpressure.js";
import Producer_withEffect from "./Producer/__private__/Producer.withEffect.js";
import Producer_withLatestFrom from "./Producer/__private__/Producer.withLatestFrom.js";
export const buffer = Producer_buffer;
export const broadcast = Producer_broadcast;
export const catchError = Producer_catchError;
export const combineLatest = Producer_combineLatest;
export const concat = Producer_concat;
export const concatAll = Producer_concatAll;
export const create = Producer_create;
export const decodeWithCharset = Producer_decodeWithCharset;
export const distinctUntilChanged = Producer_distinctUntilChanged;
export const encodeUtf8 = Producer_encodeUtf8;
export const forkMerge = Producer_forkMerge;
export const fromBroadcaster = Broadcaster_toProducer;
export const fromObservable = Observable_toProducer;
export const fromProducer = identityLazy;
export const forEach = Producer_forEach;
export const gen = Producer_gen;
export const genAsync = Producer_genAsync;
export const genPure = Producer_genPure;
export const genPureAsync = Producer_genPureAsync;
export const keep = Producer_keep;
export const map = Producer_map;
export const merge = Producer_merge;
export const mergeAll = Producer_mergeAll;
export const pairwise = Producer_pairwise;
export const repeat = Producer_repeat;
export const retry = Producer_retry;
export const scan = Producer_scan;
export const scanDistinct = Producer_scanDistinct;
export const scanMany = Producer_scanMany;
export const skipFirst = Producer_skipFirst;
export const switchAll = Producer_switchAll;
export const takeFirst = Producer_takeFirst;
export const takeLast = Producer_takeLast;
export const takeUntil = Producer_takeUntil;
export const takeWhile = Producer_takeWhile;
export const throwIfEmpty = Producer_throwIfEmpty;
export const toProducer = /*@__PURE__*/ returns(identity);
export const withBackpressure = Producer_withBackpressure;
export const withEffect = Producer_withEffect;
export const withLatestFrom = Producer_withLatestFrom;
export const zipLatest = Producer_zipLatest;
