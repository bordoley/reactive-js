import { Function1 } from "../../../functions.mjs";
import { SubjectLike } from "../../../rx.mjs";
declare const publish: <T>(v: T) => Function1<SubjectLike<T>, SubjectLike<T>>;
export { publish as default };
