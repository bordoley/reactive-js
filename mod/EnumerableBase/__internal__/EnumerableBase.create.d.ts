import { Factory } from "../../functions.js";
import { EnumerableBaseLike, EnumerableLike, EnumerableWithSideEffectsLike, EnumeratorLike, ObservableLike_isPure } from "../../types.js";
interface EnumerableBaseCreate {
    create<T>(enumerate: Factory<EnumeratorLike<T>>, config: Pick<EnumerableLike, typeof ObservableLike_isPure>): EnumerableLike<T>;
    create<T>(enumerate: Factory<EnumeratorLike<T>>, config: Pick<EnumerableWithSideEffectsLike, typeof ObservableLike_isPure>): EnumerableWithSideEffectsLike<T>;
    create<T>(enumerate: Factory<EnumeratorLike<T>>, config: Pick<EnumerableBaseLike, typeof ObservableLike_isPure>): EnumerableBaseLike<T>;
}
declare const EnumerableBase_create: EnumerableBaseCreate["create"];
export default EnumerableBase_create;
