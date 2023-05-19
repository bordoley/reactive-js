import { Function1 } from "../../functions.js";
declare const AsyncIterable_repeatOrRetry: <T>(shouldRepeat: (count: number, error?: Error) => boolean) => Function1<AsyncIterable<T>, AsyncIterable<T>>;
export default AsyncIterable_repeatOrRetry;
