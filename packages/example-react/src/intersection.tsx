import React, { useState } from "react";
import ReactDOMClient from "react-dom/client";
import { intersectionWith } from "@reactive-js/core/integrations/web";
import { Optional, isTrue, none, pipeSome } from "@reactive-js/core/functions";
import { useObservable } from "@reactive-js/core/integrations/react";
import * as EventSource from "@reactive-js/core/util/EventSource";
import * as Observable from "@reactive-js/core/rx/Observable";

const IntersectionApp = () => {
  const [count, updateCount] = useState(10);
  const [endOfPageRef, setEndOfPage] = useState<Optional<HTMLDivElement>>();

  useObservable(
    () =>
      pipeSome(
        endOfPageRef,
        intersectionWith(),
        EventSource.pick("isIntersecting"),
        EventSource.keep(isTrue),
        EventSource.toObservable<boolean>(),
        Observable.forEach(_ => {
          updateCount(x => x + 10);
        }),
      ) ?? Observable.empty(),
    [endOfPageRef],
  );

  return (
    <div
      style={{
        height: "400px",
        overflowY: "scroll",
      }}
    >
      {Array(count)
        .fill(none)
        .map((_, i) => (
          <div
            key={i}
            style={{
              background: "#FFF",
              border: "1px solid #666",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >{`Item ${i}`}</div>
        ))}
      <div
        ref={setEndOfPage as React.Ref<HTMLDivElement>}
        style={{
          width: "1px",
          height: "1px",
        }}
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOMClient.createRoot(rootElement as any).render(<IntersectionApp />);
