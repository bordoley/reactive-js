import { brotliDecompress, gunzip, inflate, brotliCompress, gzip, deflate, } from "../../../node.js";
export const createContentEncodingDecompressTransforms = (options = {}) => ({
    ["br"]: brotliDecompress(options),
    ["deflate"]: deflate(options),
    ["gzip"]: gunzip(options),
});
export const createContentEncodingCompressTransforms = (options = {}) => ({
    ["br"]: brotliCompress(options),
    ["deflate"]: inflate(options),
    ["gzip"]: gzip(options),
});
