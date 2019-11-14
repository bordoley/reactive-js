# @reactive-js/rx-observables

## Usage

## API

### Static Functions

*`concat<T>(head: ObservableLike<T>,...tail: Array<ObservableLike<T>>): ObservableLike<T>`*

*`empty<T>(): ObservableLike<T>`*

*`fromPromiseFactory<T>(factory: () => Promise<T>): ObservableLike<T>`*

*`generate<T>(generator: (acc: T) => T, initialValue: T, delay: number | void): ObservableLike<T>`*

*`merge<T>(head: ObservableLike<T>, ...tail: Array<ObservableLike<T>>): ObservableLike<T>`*

*`never<T>(): ObservableLike<T>`*

*`ofArray<T>(values: ReadonlyArray<T>, delay: number | void): ObservableLike<T>`*

*`ofDelayedValues = <T>(...values: Array<[number, T]>): ObservableLike<T>`*

*`ofValue<T>(value: T, delay: number | void): ObservableLike<T>`*

*`repeat<T>(observable: ObservableLike<T>, predicate: () => boolean = alwaysTrue): ObservableLike<T>`*

*`retry<T>(observable: ObservableLike<T>, predicate: (error: Error) => boolean = alwaysTrue1): ObservableLike<T>`*

*`throws <T>(error: Error, delay: number | void): ObservableLike<T>`*

*`use<T>(factory: () => ObservableResourceLike<T>): ObservableLike<T>`*
