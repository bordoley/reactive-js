import { Factory, Function1, Equality, Predicate, Updater, Reducer } from './functions';
import { RunnableLike } from './runnable';

declare const enum SequenceType {
    Notify = 1,
    Done = 2
}
declare type SequenceResult<T> = {
    readonly type: SequenceType.Notify;
    readonly data: T;
    readonly next: Sequence<T>;
} | {
    readonly type: SequenceType.Done;
};
declare type Sequence<T> = Factory<SequenceResult<T>>;
declare type SequenceOperator<TA, TB> = Function1<Sequence<TA>, Sequence<TB>>;
declare const isDone: <T>(result: SequenceResult<T>) => result is {
    readonly type: SequenceType.Done;
};
declare const isNotify: <T>(result: SequenceResult<T>) => result is {
    readonly type: SequenceType.Notify;
    readonly data: T;
    readonly next: Factory<SequenceResult<T>>;
};
declare const notify: <T>(data: T, next: Factory<SequenceResult<T>>) => SequenceResult<T>;
declare const done: <T>() => SequenceResult<T>;
declare const empty: <T>() => Factory<SequenceResult<T>>;
declare const concatAll: <T>() => Function1<Factory<SequenceResult<Factory<SequenceResult<T>>>>, Factory<SequenceResult<T>>>;
declare const fromArray: <T>(options?: {
    readonly startIndex?: number;
    readonly endIndex?: number;
}) => Function1<readonly T[], Factory<SequenceResult<T>>>;
declare function concat<T>(fst: Sequence<T>, snd: Sequence<T>, ...tail: readonly Sequence<T>[]): Sequence<T>;
declare const concatWith: <T>(snd: Factory<SequenceResult<T>>) => Function1<Factory<SequenceResult<T>>, Factory<SequenceResult<T>>>;
declare const distinctUntilChanged: <T>(options?: {
    readonly equality?: Equality<T> | undefined;
}) => Function1<Factory<SequenceResult<T>>, Factory<SequenceResult<T>>>;
declare function endWith<T>(value: T, ...values: readonly T[]): SequenceOperator<T, T>;
declare const keep: <T>(predicate: Predicate<T>) => Function1<Factory<SequenceResult<T>>, Factory<SequenceResult<T>>>;
declare const map: <TA, TB>(mapper: Function1<TA, TB>) => Function1<Factory<SequenceResult<TA>>, Factory<SequenceResult<TB>>>;
declare const mapTo: <TA, TB>(v: TB) => Function1<Factory<SequenceResult<TA>>, Factory<SequenceResult<TB>>>;
declare const concatMap: <TA, TB>(mapper: Function1<TA, Factory<SequenceResult<TB>>>) => Function1<Factory<SequenceResult<TA>>, Factory<SequenceResult<TB>>>;
declare function startWith<T>(value: T, ...values: readonly T[]): SequenceOperator<T, T>;
declare const fromValue: <T>() => Function1<T, Factory<SequenceResult<T>>>;
declare const generate: <T>(generator: Updater<T>, initialValue: Factory<T>) => Factory<SequenceResult<T>>;
declare const seek: <T>(count: number) => Function1<Factory<SequenceResult<T>>, Factory<SequenceResult<T>>>;
declare const takeFirst: <T>(options?: {
    readonly count?: number;
}) => Function1<Factory<SequenceResult<T>>, Factory<SequenceResult<T>>>;
declare function repeat<T>(predicate: Predicate<number>): SequenceOperator<T, T>;
declare function repeat<T>(count: number): SequenceOperator<T, T>;
declare function repeat<T>(): SequenceOperator<T, T>;
declare const scan: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => Function1<Factory<SequenceResult<T>>, Factory<SequenceResult<TAcc>>>;
declare const skipFirst: <T>(options?: {
    readonly count?: number;
}) => Function1<Factory<SequenceResult<T>>, Factory<SequenceResult<T>>>;
declare const takeLast: <T>(options?: {
    readonly count?: number;
}) => Function1<Factory<SequenceResult<T>>, Factory<SequenceResult<T>>>;
declare const takeWhile: <T>(predicate: Predicate<T>, options?: {
    readonly inclusive?: boolean;
}) => Function1<Factory<SequenceResult<T>>, Factory<SequenceResult<T>>>;
declare const toRunnable: <T>() => Function1<Factory<SequenceResult<T>>, RunnableLike<T>>;

export { Sequence, SequenceOperator, SequenceResult, SequenceType, concat, concatAll, concatMap, concatWith, distinctUntilChanged, done, empty, endWith, fromArray, fromValue, generate, isDone, isNotify, keep, map, mapTo, notify, repeat, scan, seek, skipFirst, startWith, takeFirst, takeLast, takeWhile, toRunnable };
