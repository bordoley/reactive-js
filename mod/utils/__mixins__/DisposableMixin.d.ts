import { Mixin } from "../../__internal__/mixins.js";
import { DisposableContainerLike_add, DisposableLike, DisposableLike_dispose } from "../../utils.js";
declare const DisposableMixin: Mixin<DisposableLike, unknown, Pick<DisposableLike, typeof DisposableLike_dispose | typeof DisposableContainerLike_add>>;
export default DisposableMixin;
