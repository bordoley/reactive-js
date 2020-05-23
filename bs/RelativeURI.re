type t = {
  pathname: string,
  search: string,
  hash: string,
};

[@bs.module "@reactive-js/core/react"] [@bs.val]
external decodeAndGetHash: t => string = "decodeAndGetHash";

[@bs.module "@reactive-js/core/react"] [@bs.val]
external encodeAndSetHash: (t, string) => t = "encodeAndSetHash";

[@bs.module "@reactive-js/core/react"] [@bs.val]
external fromHref: string => t = "fromHref";

[@bs.module "@reactive-js/core/react"] [@bs.val]
external toHref: t => string = "toHref";