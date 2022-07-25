/// <reference types="./keep.test.d.ts" />
import { describe as createDescribe, test as createTest, expectArrayEquals, expectToThrowError } from '../../__internal__/testing.mjs';
import { pipeLazy, pipe } from '../../functions.mjs';

const keep = (m) => createDescribe("keep", createTest("keeps only values greater than 5", pipeLazy([4, 8, 10, 7], m.fromArray(), m.keep(x => x > 5), m.toReadonlyArray(), expectArrayEquals([8, 10, 7]))), createTest("when predicate throws", () => {
    const err = new Error();
    const predicate = (_a) => {
        throw err;
    };
    pipe(pipeLazy([1, 1], m.fromArray(), m.keep(predicate), m.toReadonlyArray()), expectToThrowError(err));
}));

export { keep };
