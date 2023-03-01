import { SequenceLike } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { EnumerableLike } from "../../../ix.js";
import { RunnableLike } from "../../../rx.js";
interface SequenceToObservable {
    <T>(): Function1<SequenceLike<T>, EnumerableLike<T>>;
    <T>(options: unknown): Function1<SequenceLike<T>, RunnableLike<T>>;
    <T>(options: {
        delay: number;
        delayStart?: boolean;
    }): Function1<SequenceLike<T>, RunnableLike<T>>;
}
declare const Sequence_toObservable: SequenceToObservable;
export default Sequence_toObservable;
