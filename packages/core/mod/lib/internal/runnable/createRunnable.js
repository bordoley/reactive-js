import { sinkDone } from "./interfaces.js";
class RunnableImpl {
    constructor(runUnsafe) {
        this.runUnsafe = runUnsafe;
    }
    run(sink) {
        try {
            this.runUnsafe(sink);
        }
        catch (e) {
            if (e !== sinkDone) {
                throw e;
            }
        }
    }
}
export const createRunnable = (run) => new RunnableImpl(run);
