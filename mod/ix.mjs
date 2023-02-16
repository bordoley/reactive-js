/// <reference types="./ix.d.ts" />
import './containers.mjs';

/** @ignore */
const SourceLike_move = Symbol("SourceLike_move");
/** @ignore */
const EnumeratorLike_current = Symbol("EnumeratorLike_current");
/** @ignore */
const EnumeratorLike_hasCurrent = Symbol("EnumeratorLike_hasCurrent");
/** @ignore */
const InteractiveContainerLike_interact = Symbol("InteractiveContainerLike_interact");
/**  @ignore */
const AsyncEnumerableLike_isEnumerable = Symbol("AsyncEnumerableLike_isEnumerable");
/**  @ignore */
const AsyncEnumerableLike_isRunnable = Symbol("AsyncEnumerableLike_isRunnable");

export { AsyncEnumerableLike_isEnumerable, AsyncEnumerableLike_isRunnable, EnumeratorLike_current, EnumeratorLike_hasCurrent, InteractiveContainerLike_interact, SourceLike_move };
