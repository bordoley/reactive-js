import { compose, returns } from "./functions.js";
import { withLatestFrom, compute, concatMap, fromIterator, } from "./observable.js";
import { lift } from "./streamable.js";
import { TextDecoder } from "util";
export const decode = (charset = "utf-8", options) => {
    const op = compose(withLatestFrom(compute(() => new TextDecoder(charset, options)), function* (ev, decoder) {
        switch (ev.type) {
            case 1: {
                const data = decoder.decode(ev.data, { stream: true });
                yield { type: 1, data };
                break;
            }
            case 2: {
                const data = decoder.decode();
                if (data.length > 0) {
                    yield { type: 1, data };
                }
                yield { type: 2 };
                break;
            }
        }
    }), concatMap(compose(returns, fromIterator)));
    return lift(op);
};
const encodingOp = withLatestFrom(compute(() => new TextEncoder()), (ev, textEncoder) => {
    switch (ev.type) {
        case 1: {
            const data = textEncoder.encode(ev.data);
            return { type: 1, data };
        }
        case 2: {
            return ev;
        }
    }
});
export const encode = lift(encodingOp);
