import { Enumerate, EnumeratorLike, EverySatisfy, First, FromIterable, FromOptional, Last, SomeSatisfy, ToIterable } from "../containers.js";
import { Empty, Entries, ForEach, ForEachWithKey, FromReadonlyArray, Identity, Keep, KeepType, KeepWithKey, Map, MapWithKey, ReadonlyArrayLike, ToReadonlyArray } from "../keyed-containers.js";
import { FromEnumerable, FromRunnable, ToEnumerable, ToObservable, ToRunnable } from "../rx.js";
import { EnumerateAsync, ToFlowable } from "../streaming.js";
export declare const empty: Empty<ReadonlyArrayLike>["empty"];
export declare const entries: Entries<ReadonlyArrayLike>["entries"];
export declare const enumerate: Enumerate<ReadonlyArrayLike, EnumeratorLike, {
    readonly start?: number;
    readonly count?: number;
}>["enumerate"];
export declare const enumerateAsync: EnumerateAsync<ReadonlyArrayLike, {
    readonly delay?: number;
    readonly start?: number;
    readonly count?: number;
}>["enumerateAsync"];
export declare const everySatisfy: EverySatisfy<ReadonlyArrayLike>["everySatisfy"];
export declare const first: First<ReadonlyArrayLike>["first"];
export declare const forEach: ForEach<ReadonlyArrayLike>["forEach"];
export declare const forEachWithKey: ForEachWithKey<ReadonlyArrayLike>["forEachWithKey"];
export declare const fromEnumerable: FromEnumerable<ReadonlyArrayLike>["fromEnumerable"];
export declare const fromIterable: FromIterable<ReadonlyArrayLike>["fromIterable"];
export declare const fromOptional: FromOptional<ReadonlyArrayLike>["fromOptional"];
export declare const fromReadonlyArray: FromReadonlyArray<ReadonlyArrayLike>["fromReadonlyArray"];
export declare const fromRunnable: FromRunnable<ReadonlyArrayLike>["fromRunnable"];
export declare const getLength: (arr: readonly unknown[]) => number;
export declare const identity: Identity<ReadonlyArrayLike>["identity"];
export declare const isEmpty: (arr: readonly unknown[]) => boolean;
export declare const keep: Keep<ReadonlyArrayLike>["keep"];
export declare const keepType: KeepType<ReadonlyArrayLike>["keepType"];
export declare const keepWithKey: KeepWithKey<ReadonlyArrayLike>["keepWithKey"];
export declare const last: Last<ReadonlyArrayLike>["last"];
export declare const map: Map<ReadonlyArrayLike>["map"];
export declare const mapWithKey: MapWithKey<ReadonlyArrayLike>["mapWithKey"];
export declare const someSatisfy: SomeSatisfy<ReadonlyArrayLike>["someSatisfy"];
export declare const toEnumerable: ToEnumerable<ReadonlyArrayLike, {
    readonly start: number;
    readonly count: number;
}>["toEnumerable"];
export declare const toFlowable: ToFlowable<ReadonlyArrayLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toFlowable"];
export declare const toIterable: ToIterable<ReadonlyArrayLike, {
    readonly count?: number;
    readonly start?: number;
}>["toIterable"];
export declare const toObservable: ToObservable<ReadonlyArrayLike, {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
}>["toObservable"];
export declare const toReadonlyArray: ToReadonlyArray<ReadonlyArrayLike, {
    readonly start?: number;
    readonly count?: number;
}>["toReadonlyArray"];
export declare const toRunnable: ToRunnable<ReadonlyArrayLike, {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
}>["toRunnable"];
