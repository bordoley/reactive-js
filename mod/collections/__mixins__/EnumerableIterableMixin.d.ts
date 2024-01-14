import { Mixin } from "../../__internal__/mixins.js";
import { EnumerableLike } from "../../collections.js";
declare const EnumerableIterableMixin: <T>() => Mixin<EnumerableLike<T>, Omit<EnumerableLike<T>, typeof Symbol.iterator>>;
export default EnumerableIterableMixin;
