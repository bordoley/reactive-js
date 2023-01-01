import {
  DisposableLike,
  DisposableLike_add,
  DisposableOrTeardown,
} from "../../../util";

const DisposableLike__addDisposableOrTeardown = (
  parent: DisposableLike,
  child: DisposableOrTeardown,
  ignoreChildErrors = false,
) => {
  parent[DisposableLike_add](child, ignoreChildErrors);
};

export default DisposableLike__addDisposableOrTeardown;
