import { EnumerableBaseLike, EnumerableWithSideEffectsLike } from "../../types.js";
declare const EnumerableWithSideEffects_concatAll: <T>() => (enumerable: EnumerableBaseLike<EnumerableBaseLike<T>>) => EnumerableWithSideEffectsLike<T>;
export default EnumerableWithSideEffects_concatAll;
