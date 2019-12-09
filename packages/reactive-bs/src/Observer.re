type t('a);

[@bs.send] external complete: (t('a)) => unit = "complete";
[@bs.send] external completeWithError: (t('a), Error.t) => unit = "complete";
[@bs.send] external next: (t('a), 'a) => unit = "next";