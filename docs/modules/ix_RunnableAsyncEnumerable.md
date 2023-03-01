[Reactive-JS](../README.md) / ix/RunnableAsyncEnumerable

# Module: ix/RunnableAsyncEnumerable

## Table of contents

### Constructor Functions

- [fromEnumerable](ix_RunnableAsyncEnumerable.md#fromenumerable)
- [fromEnumerableObservable](ix_RunnableAsyncEnumerable.md#fromenumerableobservable)
- [fromIterable](ix_RunnableAsyncEnumerable.md#fromiterable)
- [fromReadonlyArray](ix_RunnableAsyncEnumerable.md#fromreadonlyarray)
- [fromSequence](ix_RunnableAsyncEnumerable.md#fromsequence)
- [generate](ix_RunnableAsyncEnumerable.md#generate)

### Converter Functions

- [toReadonlyArray](ix_RunnableAsyncEnumerable.md#toreadonlyarray)

### Operator Functions

- [keep](ix_RunnableAsyncEnumerable.md#keep)
- [map](ix_RunnableAsyncEnumerable.md#map)
- [scan](ix_RunnableAsyncEnumerable.md#scan)
- [takeWhile](ix_RunnableAsyncEnumerable.md#takewhile)

## Constructor Functions

### fromEnumerable

▸ **fromEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`RunnableAsyncEnumerableLike`](../interfaces/ix.RunnableAsyncEnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`RunnableAsyncEnumerableLike`](../interfaces/ix.RunnableAsyncEnumerableLike.md)<`T`\>\>

___

### fromEnumerableObservable

▸ **fromEnumerableObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`RunnableAsyncEnumerableLike`](../interfaces/ix.RunnableAsyncEnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`RunnableAsyncEnumerableLike`](../interfaces/ix.RunnableAsyncEnumerableLike.md)<`T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`RunnableAsyncEnumerableLike`](../interfaces/ix.RunnableAsyncEnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`RunnableAsyncEnumerableLike`](../interfaces/ix.RunnableAsyncEnumerableLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`RunnableAsyncEnumerableLike`](../interfaces/ix.RunnableAsyncEnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | { `count?`: `number` ; `delay?`: `number` ; `delayStart?`: `boolean` ; `start?`: `number`  } & { `count?`: `number` ; `start?`: `number`  } |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`RunnableAsyncEnumerableLike`](../interfaces/ix.RunnableAsyncEnumerableLike.md)<`T`\>\>

___

### fromSequence

▸ **fromSequence**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`RunnableAsyncEnumerableLike`](../interfaces/ix.RunnableAsyncEnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`RunnableAsyncEnumerableLike`](../interfaces/ix.RunnableAsyncEnumerableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`RunnableAsyncEnumerableLike`](../interfaces/ix.RunnableAsyncEnumerableLike.md)<`T`\>

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
| `options?` | `undefined` | - |

#### Returns

[`RunnableAsyncEnumerableLike`](../interfaces/ix.RunnableAsyncEnumerableLike.md)<`T`\>

___

## Converter Functions

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`RunnableAsyncEnumerableLike`](../interfaces/ix.RunnableAsyncEnumerableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

Converts the ContainerLike to a `ReadonlyArrayLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableAsyncEnumerableLike`](../interfaces/ix.RunnableAsyncEnumerableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

___

## Operator Functions

### keep

▸ **keep**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableAsyncEnumerableLike`](../interfaces/ix.RunnableAsyncEnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableAsyncEnumerableLike`](../interfaces/ix.RunnableAsyncEnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableAsyncEnumerableLike`](../interfaces/ix.RunnableAsyncEnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableAsyncEnumerableLike`](../interfaces/ix.RunnableAsyncEnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableAsyncEnumerableLike`](../interfaces/ix.RunnableAsyncEnumerableLike.md)<`unknown`\>, `T`, `TAcc`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableAsyncEnumerableLike`](../interfaces/ix.RunnableAsyncEnumerableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableAsyncEnumerableLike`](../interfaces/ix.RunnableAsyncEnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableAsyncEnumerableLike`](../interfaces/ix.RunnableAsyncEnumerableLike.md)<`unknown`\>, `T`, `T`\>
