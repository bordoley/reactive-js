/// <reference types="./ObservableLike.d.ts" />
const DefaultObservable = 0;
const RunnableObservable = 1;
const EnumerableObservable = 2;
const ObservableLike_observableType = Symbol("ObservableLike_observableType");
const getObservableType = (obs) => obs[ObservableLike_observableType];

export { DefaultObservable, EnumerableObservable, ObservableLike_observableType, RunnableObservable, getObservableType };
