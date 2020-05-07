import { isSome } from "../../../../core/lib/option.ts";

const global = self;

export const supportsArrayBuffer = "ArrayBuffer" in global;

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

export const fetchIsPolyfill = isSome((fetch as any).polyfill);
