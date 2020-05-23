import { sinkDone } from "./interfaces.js";
class RunnableImpl {
    constructor(_run) {
        this._run = _run;
    }
    run(sink) {
        try {
            this._run(sink);
        }
        catch (e) {
            if (e !== sinkDone) {
                throw e;
            }
        }
    }
}
export const createRunnable = (run) => new RunnableImpl(run);
