import { Mixin } from "../../__internal__/mixins.js";
import { DisposableContainerLike_add, DisposableLike, DisposableLike_dispose } from "../../utils.js";
type TPrototype = Pick<DisposableLike, typeof DisposableLike_dispose | typeof DisposableContainerLike_add>;
declare const DisposableMixin: Mixin<DisposableLike, TPrototype>;
export default DisposableMixin;
