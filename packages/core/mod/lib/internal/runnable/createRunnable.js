class RunnableImpl {
    constructor(run) {
        this.run = run;
    }
}
export const createRunnable = (run) => new RunnableImpl(run);
