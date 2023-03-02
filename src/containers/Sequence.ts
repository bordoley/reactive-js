import {
  Compute,
  Concat,
  ConcatAll,
  ConcatMap,
  ConcatWith,
  DistinctUntilChanged,
  EndWith,
  FromReadonlyArray,
  Generate,
  IgnoreElements,
  Keep,
  KeepType,
  Map,
  MapTo,
  Pairwise,
  Repeat,
  Scan,
  SequenceLike,
  SkipFirst,
  StartWith,
  TakeFirst,
  TakeLast,
  TakeWhile,
  ToIterable,
  ToReadonlyArray,
  Zip,
  ZipWith,
} from "../containers.js";
import { ToEnumerable, ToObservable, ToRunnable } from "../rx.js";
import { ToFlowable } from "../streaming.js";
import ReadonlyArray_toSequence from "./ReadonlyArray/__internal__/ReadonlyArray.toSequence.js";
import Sequence_compute from "./Sequence/__internal__/Sequence.compute.js";
import Sequence_concat from "./Sequence/__internal__/Sequence.concat.js";
import Sequence_concatAll from "./Sequence/__internal__/Sequence.concatAll.js";
import Sequence_concatMap from "./Sequence/__internal__/Sequence.concatMap.js";
import Sequence_concatWith from "./Sequence/__internal__/Sequence.concatWith.js";
import Sequence_distinctUntilChanged from "./Sequence/__internal__/Sequence.distinctUntilChanged.js";
import Sequence_endWith from "./Sequence/__internal__/Sequence.endWith.js";
import Sequence_generate from "./Sequence/__internal__/Sequence.generate.js";
import Sequence_ignoreElements from "./Sequence/__internal__/Sequence.ignoreElements.js";
import Sequence_keep from "./Sequence/__internal__/Sequence.keep.js";
import Sequence_keepType from "./Sequence/__internal__/Sequence.keepType.js";
import Sequence_map from "./Sequence/__internal__/Sequence.map.js";
import Sequence_mapTo from "./Sequence/__internal__/Sequence.mapTo.js";
import Sequence_pairwise from "./Sequence/__internal__/Sequence.pairwise.js";
import Sequence_repeat from "./Sequence/__internal__/Sequence.repeat.js";
import Sequence_scan from "./Sequence/__internal__/Sequence.scan.js";
import Sequence_skipFirst from "./Sequence/__internal__/Sequence.skipFirst.js";
import Sequence_startWith from "./Sequence/__internal__/Sequence.startWith.js";
import Sequence_takeFirst from "./Sequence/__internal__/Sequence.takeFirst.js";
import Sequence_takeLast from "./Sequence/__internal__/Sequence.takeLast.js";
import Sequence_takeWhile from "./Sequence/__internal__/Sequence.takeWhile.js";
import Sequence_toFlowable from "./Sequence/__internal__/Sequence.toFlowable.js";
import Sequence_toIterable from "./Sequence/__internal__/Sequence.toIterable.js";
import Sequence_toObservable from "./Sequence/__internal__/Sequence.toObservable.js";
import Sequence_toReadonlyArray from "./Sequence/__internal__/Sequence.toReadonlyArray.js";
import Sequence_zip from "./Sequence/__internal__/Sequence.zip.js";
import Sequence_zipWith from "./Sequence/__internal__/Sequence.zipWith.js";

export const compute: Compute<SequenceLike>["compute"] = Sequence_compute;

export const concat: Concat<SequenceLike>["concat"] = Sequence_concat;

export const concatAll: ConcatAll<SequenceLike>["concatAll"] =
  Sequence_concatAll;

export const concatMap: ConcatMap<SequenceLike>["concatMap"] =
  Sequence_concatMap;

export const concatWith: ConcatWith<SequenceLike>["concatWith"] =
  Sequence_concatWith;

export const distinctUntilChanged: DistinctUntilChanged<SequenceLike>["distinctUntilChanged"] =
  Sequence_distinctUntilChanged;

export const endWith: EndWith<SequenceLike>["endWith"] = Sequence_endWith;

export const fromReadonlyArray: FromReadonlyArray<SequenceLike>["fromReadonlyArray"] =
  ReadonlyArray_toSequence;

export const generate: Generate<SequenceLike>["generate"] = Sequence_generate;

export const ignoreElements: IgnoreElements<SequenceLike>["ignoreElements"] =
  Sequence_ignoreElements;

export const keep: Keep<SequenceLike>["keep"] = Sequence_keep;

export const keepType: KeepType<SequenceLike>["keepType"] = Sequence_keepType;

export const map: Map<SequenceLike>["map"] = Sequence_map;

export const mapTo: MapTo<SequenceLike>["mapTo"] = Sequence_mapTo;

export const pairwise: Pairwise<SequenceLike>["pairwise"] = Sequence_pairwise;

export const repeat: Repeat<SequenceLike>["repeat"] = Sequence_repeat;

export const scan: Scan<SequenceLike>["scan"] = Sequence_scan;

export const skipFirst: SkipFirst<SequenceLike>["skipFirst"] =
  Sequence_skipFirst;

export const startWith: StartWith<SequenceLike>["startWith"] =
  Sequence_startWith;

export const takeFirst: TakeFirst<SequenceLike>["takeFirst"] =
  Sequence_takeFirst;

export const takeLast: TakeLast<SequenceLike>["takeLast"] = Sequence_takeLast;

export const takeWhile: TakeWhile<SequenceLike>["takeWhile"] =
  Sequence_takeWhile;

export const toEnumerable: ToEnumerable<SequenceLike>["toEnumerable"] =
  Sequence_toObservable;

export const toFlowable: ToFlowable<
  SequenceLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toFlowable"] = Sequence_toFlowable;

export const toIterable: ToIterable<SequenceLike>["toIterable"] =
  Sequence_toIterable;

export const toObservable: ToObservable<
  SequenceLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toObservable"] = Sequence_toObservable;

export const toReadonlyArray: ToReadonlyArray<SequenceLike>["toReadonlyArray"] =
  Sequence_toReadonlyArray;

export const toRunnable: ToRunnable<
  SequenceLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toRunnable"] = Sequence_toObservable;

export const zip: Zip<SequenceLike>["zip"] = Sequence_zip;

export const zipWith: ZipWith<SequenceLike>["zipWith"] = Sequence_zipWith;
