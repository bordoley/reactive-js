[Reactive-JS](../README.md) / ix/AsyncEnumerable

# Module: ix/AsyncEnumerable

## Table of contents

### Constructor Functions

- [fromAsyncIterable](ix_AsyncEnumerable.md#fromasynciterable)
- [fromEnumerable](ix_AsyncEnumerable.md#fromenumerable)
- [fromEnumerableObservable](ix_AsyncEnumerable.md#fromenumerableobservable)
- [fromIterable](ix_AsyncEnumerable.md#fromiterable)
- [fromReadonlyArray](ix_AsyncEnumerable.md#fromreadonlyarray)
- [fromSequence](ix_AsyncEnumerable.md#fromsequence)
- [generate](ix_AsyncEnumerable.md#generate)

### Converter Functions

- [toObservable](ix_AsyncEnumerable.md#toobservable)

### Operator Functions

- [keep](ix_AsyncEnumerable.md#keep)
- [map](ix_AsyncEnumerable.md#map)
- [scan](ix_AsyncEnumerable.md#scan)
- [scanAsync](ix_AsyncEnumerable.md#scanasync)
- [takeWhile](ix_AsyncEnumerable.md#takewhile)

### Other Functions

- [isEnumerable](ix_AsyncEnumerable.md#isenumerable)
- [isRunnable](ix_AsyncEnumerable.md#isrunnable)

## Constructor Functions

### fromAsyncIterable

▸ **fromAsyncIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>\>

___

### fromEnumerableObservable

▸ **fromEnumerableObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | { `count?`: `number` ; `delay?`: `number` ; `delayStart?`: `boolean` ; `start?`: `number`  } & { `count?`: `number` ; `start?`: `number`  } |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>\>

___

### fromSequence

▸ **fromSequence**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>

Generates a ContainerLike from a generator function
that is applied to an accumulator value between emitted items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)<`T`\> | the generator function. |
| `initialValue` | [`Factory`](functions.md#factory)<`T`\> | Factory function used to generate the initial accumulator. |
| `options?` | `Object` | - |
| `options.delay` | `number` | - |

#### Returns

[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>

___

## Converter Functions

### toObservable

▸ **toObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

## Operator Functions

### keep

▸ **keep**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`unknown`\>, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

Returns a ContainerOperator that applies the `mapper` function to each
value emitted by the source.

**`Typeparam`**

TA - The inner type of the source container

**`Typeparam`**

TB - The inner type of the mapped container

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |
| `options?` | `undefined` | - |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`unknown`\>, `T`, `TAcc`\>

Returns a ContainerLike that applies an accumulator function over the source,
and emits each intermediate result.

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scanner` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> | The accumulator function called on each source value. |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> | The initial accumulation value. |
| `options?` | `undefined` | - |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### scanAsync

▸ **scanAsync**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](containers.md#containeroperator)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`unknown`\>, `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`AsyncReducer`](rx.md#asyncreducer)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`unknown`\>, `T`, `T`\>

Returns a ContainerLike which emits values emitted by the source as long
as each value satisfies the given predicate, and then completes as soon as
this predicate is not satisfied.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> | The predicate function. |
| `options?` | `Object` | - |
| `options.inclusive?` | `boolean` | - |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

## Other Functions

### isEnumerable

▸ **isEnumerable**(`v`): v is EnumerableAsyncEnumerableLike<unknown\>

A type guard function that performs a runtime check
guaranteeing `v` is of type `TB`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`unknown`\> |

#### Returns

v is EnumerableAsyncEnumerableLike<unknown\>

`true` if v is an instance of type `TB`, otherwise false.

___

### isRunnable

▸ **isRunnable**(`v`): v is RunnableAsyncEnumerableLike<unknown\>

A type guard function that performs a runtime check
guaranteeing `v` is of type `TB`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`unknown`\> |

#### Returns

v is RunnableAsyncEnumerableLike<unknown\>

`true` if v is an instance of type `TB`, otherwise false.
