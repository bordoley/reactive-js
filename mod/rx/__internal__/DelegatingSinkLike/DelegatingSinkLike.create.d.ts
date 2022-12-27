import { SinkLike } from "../../../rx.mjs";
declare const create: <T>(delegate: SinkLike<T>) => SinkLike<T>;
export { create as default };
