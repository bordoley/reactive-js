type t('a);

[@bs.send] external complete: (t('a), ~error: Error.t=?, unit) => unit = "complete";
[@bs.send] external next: (t('a), 'a) => unit = "next";

[@bs.obj] external create: (~next: (. 'a) => unit, ~complete: (. option(Error.t)) =>  unit, unit) => t('a) = "";
