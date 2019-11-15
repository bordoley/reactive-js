# @reactive-js/rx-observables

## Usage

## API

### Static Functions

*`concat<T>(head: ObservableLike<T>,...tail: Array<ObservableLike<T>>): ObservableLike<T>`*

*`empty<T>(): ObservableLike<T>`*

*`fromArray<T>(values: ReadonlyArray<T>, delay?: number): ObservableLike<T>`*

*`fromDelayedValues = <T>(value: [number, T], ...values: Array<[number, T]>): ObservableLike<T> `*

*`fromPromiseFactory<T>(factory: () => Promise<T>, delay?: number): ObservableLike<T>`*

*`generate<T>(generator: (acc: T) => T, initialValue: T, delay?: number): ObservableLike<T>`*

*`merge<T>(head: ObservableLike<T>, ...tail: Array<ObservableLike<T>>): ObservableLike<T>`*

*`never<T>(): ObservableLike<T>`*

*`ofValue<T>(value: T, delay?: number): ObservableLike<T>`*

*`repeat<T>(observable: ObservableLike<T>, predicate?: () => boolean): ObservableLike<T>`*

*`retry<T>(observable: ObservableLike<T>, predicate?: (error: Error) => boolean): ObservableLike<T>`*

*`throws<T>(error: Error, delay?: number): ObservableLike<T>`*

*`use<T>(factory: () => ObservableResourceLike<T>): ObservableLike<T>`*
