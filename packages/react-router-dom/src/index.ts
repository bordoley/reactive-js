import { create as createRouter, RouterProps } from "@reactive-js/react-router";
import {
  equals as relativeURIEquals,
  RelativeURI,
} from "@reactive-js/react-router-relative-uri";
import { create as stateContainerCreate } from "@reactive-js/state-container";
import { connect, pipe } from "@reactive-js/rx-observable";
import { keep, merge, onNext } from "@reactive-js/rx-observables";
import { scheduler } from "@reactive-js/react-scheduler";
import { fromEvent } from "@reactive-js/dom";

const getCurrentLocation = (): RelativeURI => {
  const path = window.location.pathname;
  const query = window.location.search;
  const fragment = window.location.hash;
  return { path, query, fragment };
};

export const create = (priority?: number): React.ComponentType<RouterProps> =>
  createRouter(() => {
    const stateContainer = stateContainerCreate(
      getCurrentLocation(),
      relativeURIEquals,
      scheduler,
      priority,
    );

    stateContainer.add(
      connect(
        merge(
          pipe(
            fromEvent(window, "popstate", _ => getCurrentLocation(), priority),
            onNext((state: RelativeURI) => stateContainer.dispatch(_ => state)),
          ),
          pipe(
            stateContainer,
            keep(
              location => !relativeURIEquals(location, getCurrentLocation()),
            ),
            onNext(({ path, query, fragment }: RelativeURI) => {
              const uri = path + query + fragment;
              window.history.pushState(undefined, "", uri);
            }),
          ),
        ),
        scheduler,
      ),
    );

    return stateContainer;
  });
