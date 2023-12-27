declare const parseArrayBounds: (array: readonly unknown[], options?: {
    readonly start?: number;
    readonly count?: number;
}) => {
    start: number;
    count: number;
};
export default parseArrayBounds;
