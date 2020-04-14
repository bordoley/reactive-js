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
export const fetchIsPolyfill = (fetch as any).polyfill !== undefined;
