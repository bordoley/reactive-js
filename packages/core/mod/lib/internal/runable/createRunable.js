class RunableImpl {
    constructor(run) {
        this.run = run;
    }
}
export const createRunable = (run) => new RunableImpl(run);
