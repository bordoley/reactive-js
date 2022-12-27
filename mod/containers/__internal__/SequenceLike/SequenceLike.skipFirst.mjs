/// <reference types="./SequenceLike.skipFirst.d.ts" />
import seek from './SequenceLike.seek.mjs';

const skipFirst = (options = {}) => (seq) => () => {
    const { count = 1 } = options;
    return seek(count)(seq)();
};

export { skipFirst as default };
