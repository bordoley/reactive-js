import * as Observable from "@reactive-js/core/rx/Observable";
import { pipe } from "@reactive-js/core/functions";
import * as Scheduler from "@reactive-js/core/scheduling/Scheduler";
import { DisposableLike_dispose } from "@reactive-js/core/util";
import { SchedulerLike_schedule } from "@reactive-js/core/scheduling";

const scheduler = Scheduler.createHostScheduler();

const subscription = pipe(
  Observable.generate(
    x => x + 1,
    () => 0,
    { delay: 1 },
  ),
  Observable.throttle(2000),
  Observable.map(x => `${x}`),
  Observable.forEach(x => console.log(x)),
  Observable.subscribe(scheduler),
);

scheduler[SchedulerLike_schedule](
  () => {
    subscription[DisposableLike_dispose]();
  },
  { delay: 20000 },
);


import relay from "relay-runtime";
import { fetchQuery } from "@reactive-js/core/integrations/relay";

const {
  Environment,
  Network,
  RecordSource,
  Store,
  graphql,
} = relay

const network = Network.create((operation, variables) => {
  return fetch("https://swapi-graphql.netlify.app/.netlify/functions/index", {
    method: "POST",
    headers: {
      // Add authentication and other headers here
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables,
    }),
  }).then(response => {
    return response.json();
  });
});
const store = new Store(new RecordSource());

const environment = new Environment({
  network,
  store,
});

pipe(
  fetchQuery(
    environment,
    graphql`
      query Query {
        allFilms {
          films {
            title
            director
            releaseDate
            speciesConnection {
              species {
                name
                classification
                homeworld {
                  name
                }
              }
            }
          }
        }
      }
    `,
    {},
  ),
  Observable.forEach(console.log),
  Observable.subscribe(Scheduler.createHostScheduler()),
);
