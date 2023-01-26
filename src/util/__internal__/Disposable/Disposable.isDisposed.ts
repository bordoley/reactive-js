import { DisposableLike_isDisposed } from "../../../util";

const Disposable$isDisposed = (disposable: {
  [DisposableLike_isDisposed]: boolean;
}): boolean => disposable[DisposableLike_isDisposed];

export default Disposable$isDisposed;
