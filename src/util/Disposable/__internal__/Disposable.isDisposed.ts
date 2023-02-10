import { DisposableLike_isDisposed } from "../../../util";

const Disposable_isDisposed = (disposable: {
  [DisposableLike_isDisposed]: boolean;
}): boolean => disposable[DisposableLike_isDisposed];

export default Disposable_isDisposed;
