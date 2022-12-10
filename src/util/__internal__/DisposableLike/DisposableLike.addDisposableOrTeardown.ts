import {
  DisposableLike,
  DisposableLike_add,
  DisposableOrTeardown,
} from "../../../util";

const addDisposableOrTeardown = (
  parent: DisposableLike,
  child: DisposableOrTeardown,
  ignoreChildErrors = false,
) => {
  parent[DisposableLike_add](child, ignoreChildErrors);
};

export default addDisposableOrTeardown;
