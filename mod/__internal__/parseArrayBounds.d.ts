declare const parseArrayBounds: (array: readonly unknown[], options?: {
    readonly start?: number;
    readonly count?: number;
}) => number[];
export default parseArrayBounds;
