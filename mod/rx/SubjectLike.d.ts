import { Function1, SideEffect1 } from '../util/functions.js';
import { MulticastObservableLike } from "./MulticastObservableLike.mjs";
declare const SubjectLike_publish: unique symbol;
interface SubjectLike<T = unknown> extends MulticastObservableLike<T> {
    [SubjectLike_publish](next: T): void;
}
declare const publish: <T>(v: T) => Function1<SubjectLike<T>, SubjectLike<T>>;
declare const publishTo: <T>(subject: SubjectLike<T>) => SideEffect1<T>;
declare const create: <T>(options?: {
    replay?: number;
}) => SubjectLike<T>;
export { SubjectLike, SubjectLike_publish, create, publish, publishTo };
