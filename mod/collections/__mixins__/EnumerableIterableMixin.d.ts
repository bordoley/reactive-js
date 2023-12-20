import { Mixin } from "../../__internal__/mixins.js";
import { EnumerableLike, EnumerableLike_enumerate } from "../../collections.js";
declare const EnumerableIterableMixin: <T>() => Mixin<Pick<EnumerableLike<T>, typeof EnumerableLike_enumerate>>;
export default EnumerableIterableMixin;
