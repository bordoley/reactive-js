/// <reference types="node" />
import { Factory, Function1, Function2, Function3, Function4, Function5, Function6 } from './functions';
import { Option } from './option';
import { ObservableLike } from './observable';

declare const async: <T>(computation: Factory<T>) => ObservableLike<T>;
declare function __memo<TA, T>(fn: Function1<TA, T>, a: TA): T;
declare function __memo<TA, TB, T>(fn: Function2<TA, TB, T>, a: TA, b: TB): T;
declare function __memo<TA, TB, TC, T>(fn: Function3<TA, TB, TC, T>, a: TA, b: TB, c: TC): T;
declare function __memo<TA, TB, TC, TD, T>(fn: Function4<TA, TB, TC, TD, T>, a: TA, b: TB, c: TC, d: TD): T;
declare function __memo<TA, TB, TC, TD, TE, T>(fn: Function5<TA, TB, TC, TD, TE, T>, a: TA, b: TB, c: TC, d: TD, e: TE): T;
declare function __memo<TA, TB, TC, TD, TE, TF, T>(fn: Function6<TA, TB, TC, TD, TE, TF, T>, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): T;
declare const __await: <T>(observable: ObservableLike<T>) => Option<T>;

export { __await, __memo, async };
