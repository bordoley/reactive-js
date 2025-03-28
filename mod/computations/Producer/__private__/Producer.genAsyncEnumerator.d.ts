import { ProducerWithSideEffectsLike, PureProducerLike } from "../../../computations.js";
import { Factory } from "../../../functions.js";
import { AsyncEnumeratorLike } from "../../../utils.js";
export declare const Producer_genAsyncEnumerator: <T>(factory: Factory<AsyncEnumeratorLike<T>>) => ProducerWithSideEffectsLike<T>;
export declare const Producer_genPureAsyncEnumerator: <T>(factory: Factory<AsyncEnumeratorLike<T>>) => PureProducerLike<T>;
