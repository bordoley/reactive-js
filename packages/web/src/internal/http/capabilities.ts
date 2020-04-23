import { isSome } from "@reactive-js/core/dist/js/option";

const global = self;

/** @ignore */
export const supportsArrayBuffer = "ArrayBuffer" in global;

/** @ignore */
export const supportsBlob =
  "FileReader" in global &&
  "Blob" in global &&
  (() => {
    try {
      new Blob();
      return true;
    } catch (e) {
      return false;
    }
  })();

/** @ignore */
export const fetchIsPolyfill = isSome((fetch as any).polyfill);
