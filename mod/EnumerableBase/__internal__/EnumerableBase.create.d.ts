import { Factory } from "../../functions.js";
import { EnumerableBaseLike, EnumerableLike, EnumerableWithSideEffectsLike, EnumeratorLike, ObservableLike_isPure } from "../../types.js";
interface EnumerableBaseCreate {
    create<T>(enumerate: Factory<EnumeratorLike<T>>, config: {
        [ObservableLike_isPure]: true;
    }): EnumerableLike<T>;
    create<T>(enumerate: Factory<EnumeratorLike<T>>, config: {
        [ObservableLike_isPure]: false;
    }): EnumerableWithSideEffectsLike<T>;
    create<T>(enumerate: Factory<EnumeratorLike<T>>, config: {
        [ObservableLike_isPure]: boolean;
    }): EnumerableBaseLike<T>;
}
declare const EnumerableBase_create: EnumerableBaseCreate["create"];
export default EnumerableBase_create;
