import { Factory } from "../../functions.js";
import { EnumerableBaseLike, EnumerableLike, EnumerableWithSideEffectsLike, EnumeratorLike } from "../../types.js";
interface EnumerableBaseCreate {
    create<T>(enumerate: Factory<EnumeratorLike<T>>, isPure: true): EnumerableLike<T>;
    create<T>(enumerate: Factory<EnumeratorLike<T>>, isPure: false): EnumerableWithSideEffectsLike<T>;
    create<T>(enumerate: Factory<EnumeratorLike<T>>, isPure: boolean): EnumerableBaseLike<T>;
}
declare const EnumerableBase_create: EnumerableBaseCreate["create"];
export default EnumerableBase_create;
