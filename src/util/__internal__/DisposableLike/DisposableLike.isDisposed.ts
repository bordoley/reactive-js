import { DisposableLike_isDisposed } from "../../../util";

const DisposableLike__isDisposed = (disposable: {
  [DisposableLike_isDisposed]: boolean;
}): boolean => disposable[DisposableLike_isDisposed];

export default DisposableLike__isDisposed;
