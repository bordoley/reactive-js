import { Function1, SideEffect1 } from "../functions.mjs";
import { SubjectLike } from "../rx.mjs";
declare const publish: <T>(v: T) => Function1<SubjectLike<T>, SubjectLike<T>>;
declare const publishTo: <T>(subject: SubjectLike<T>) => SideEffect1<T>;
export { publish, publishTo };
