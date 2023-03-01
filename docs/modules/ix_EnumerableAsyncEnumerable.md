[Reactive-JS](../README.md) / ix/EnumerableAsyncEnumerable

# Module: ix/EnumerableAsyncEnumerable

## Table of contents

### Constructor Functions

- [fromEnumerable](ix_EnumerableAsyncEnumerable.md#fromenumerable)
- [fromEnumerableObservable](ix_EnumerableAsyncEnumerable.md#fromenumerableobservable)
- [fromIterable](ix_EnumerableAsyncEnumerable.md#fromiterable)
- [fromReadonlyArray](ix_EnumerableAsyncEnumerable.md#fromreadonlyarray)
- [fromSequence](ix_EnumerableAsyncEnumerable.md#fromsequence)
- [generate](ix_EnumerableAsyncEnumerable.md#generate)

### Converter Functions

- [toReadonlyArray](ix_EnumerableAsyncEnumerable.md#toreadonlyarray)

### Operator Functions

- [keep](ix_EnumerableAsyncEnumerable.md#keep)
- [map](ix_EnumerableAsyncEnumerable.md#map)
- [scan](ix_EnumerableAsyncEnumerable.md#scan)
- [takeWhile](ix_EnumerableAsyncEnumerable.md#takewhile)

## Constructor Functions

### fromEnumerable

▸ **fromEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`EnumerableAsyncEnumerableLike`](../interfaces/ix.EnumerableAsyncEnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`EnumerableAsyncEnumerableLike`](../interfaces/ix.EnumerableAsyncEnumerableLike.md)<`T`\>\>

___

### fromEnumerableObservable

▸ **fromEnumerableObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`EnumerableAsyncEnumerableLike`](../interfaces/ix.EnumerableAsyncEnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`EnumerableAsyncEnumerableLike`](../interfaces/ix.EnumerableAsyncEnumerableLike.md)<`T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`EnumerableAsyncEnumerableLike`](../interfaces/ix.EnumerableAsyncEnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`EnumerableAsyncEnumerableLike`](../interfaces/ix.EnumerableAsyncEnumerableLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableAsyncEnumerableLike`](../interfaces/ix.EnumerableAsyncEnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | { `count?`: `number` ; `start?`: `number`  } & { `count?`: `number` ; `start?`: `number`  } |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableAsyncEnumerableLike`](../interfaces/ix.EnumerableAsyncEnumerableLike.md)<`T`\>\>

___

### fromSequence

▸ **fromSequence**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`EnumerableAsyncEnumerableLike`](../interfaces/ix.EnumerableAsyncEnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`EnumerableAsyncEnumerableLike`](../interfaces/ix.EnumerableAsyncEnumerableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`EnumerableAsyncEnumerableLike`](../interfaces/ix.EnumerableAsyncEnumerableLike.md)<`T`\>

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

[`EnumerableAsyncEnumerableLike`](../interfaces/ix.EnumerableAsyncEnumerableLike.md)<`T`\>

___

## Converter Functions

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableAsyncEnumerableLike`](../interfaces/ix.EnumerableAsyncEnumerableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`EnumerableAsyncEnumerableLike`](../interfaces/ix.EnumerableAsyncEnumerableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

___

## Operator Functions

### keep

▸ **keep**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableAsyncEnumerableLike`](../interfaces/ix.EnumerableAsyncEnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableAsyncEnumerableLike`](../interfaces/ix.EnumerableAsyncEnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableAsyncEnumerableLike`](../interfaces/ix.EnumerableAsyncEnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableAsyncEnumerableLike`](../interfaces/ix.EnumerableAsyncEnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableAsyncEnumerableLike`](../interfaces/ix.EnumerableAsyncEnumerableLike.md)<`unknown`\>, `T`, `TAcc`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableAsyncEnumerableLike`](../interfaces/ix.EnumerableAsyncEnumerableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableAsyncEnumerableLike`](../interfaces/ix.EnumerableAsyncEnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableAsyncEnumerableLike`](../interfaces/ix.EnumerableAsyncEnumerableLike.md)<`unknown`\>, `T`, `T`\>
