/// <reference types="./SequenceLike.skipFirst.d.ts" />
import SequenceLike__seek from './SequenceLike.seek.mjs';

const SequenceLike__skipFirst = (options = {}) => (seq) => () => {
    const { count = 1 } = options;
    return SequenceLike__seek(count)(seq)();
};

export { SequenceLike__skipFirst as default };
