/// <reference types="./Sequence.skipFirst.d.ts" />
import Sequence$seek from './Sequence.seek.mjs';

const Sequence$skipFirst = (options = {}) => (seq) => () => {
    const { count = 1 } = options;
    return Sequence$seek(count)(seq)();
};

export { Sequence$skipFirst as default };
