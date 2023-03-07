[Reactive-JS](../README.md) / containers/ReadonlyArray

# Module: containers/ReadonlyArray

## Table of contents

### Constructor Functions

- [empty](containers_ReadonlyArray.md#empty)
- [fromEnumerable](containers_ReadonlyArray.md#fromenumerable)
- [fromIterable](containers_ReadonlyArray.md#fromiterable)
- [fromOptional](containers_ReadonlyArray.md#fromoptional)
- [fromReadonlyArray](containers_ReadonlyArray.md#fromreadonlyarray)
- [fromRunnable](containers_ReadonlyArray.md#fromrunnable)
- [fromSequence](containers_ReadonlyArray.md#fromsequence)

### Converter Functions

- [toAsyncEnumerable](containers_ReadonlyArray.md#toasyncenumerable)
- [toEnumerable](containers_ReadonlyArray.md#toenumerable)
- [toFlowable](containers_ReadonlyArray.md#toflowable)
- [toIterable](containers_ReadonlyArray.md#toiterable)
- [toObservable](containers_ReadonlyArray.md#toobservable)
- [toReadonlyArray](containers_ReadonlyArray.md#toreadonlyarray)
- [toRunnable](containers_ReadonlyArray.md#torunnable)
- [toSequence](containers_ReadonlyArray.md#tosequence)

### Operator Functions

- [forEach](containers_ReadonlyArray.md#foreach)
- [keep](containers_ReadonlyArray.md#keep)
- [keepType](containers_ReadonlyArray.md#keeptype)
- [map](containers_ReadonlyArray.md#map)

### Other Functions

- [every](containers_ReadonlyArray.md#every)
- [getLength](containers_ReadonlyArray.md#getlength)
- [isEmpty](containers_ReadonlyArray.md#isempty)
- [some](containers_ReadonlyArray.md#some)

## Constructor Functions

### empty

▸ **empty**<`T`\>(`options?`): [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>

Return an ContainerLike that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

___

### fromRunnable

▸ **fromRunnable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

___

### fromSequence

▸ **fromSequence**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

___

## Converter Functions

### toAsyncEnumerable

▸ **toAsyncEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/streaming.AsyncEnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.delay?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/streaming.AsyncEnumerableLike.md)<`T`\>\>

___

### toEnumerable

▸ **toEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count` | `number` |
| `options.start` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>\>

___

### toFlowable

▸ **toFlowable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

___

### toIterable

▸ **toIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>\>

Converts the ContainerLike to a `IterableLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

Converts the ContainerLike to a `ReadonlyArrayLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

___

### toRunnable

▸ **toRunnable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

___

### toSequence

▸ **toSequence**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>\>

Converts the ContainerLike to a `SequenceLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>\>

___

## Operator Functions

### forEach

▸ **forEach**<`T`\>(`effect`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`unknown`\>, `T`, `T`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`unknown`\>, `T`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`unknown`\>, `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](functions.md#typepredicate)<`TA`, `TB`\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`unknown`\>, `TA`, `TB`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`unknown`\>, `TA`, `TB`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`unknown`\>, `TA`, `TB`\>

___

## Other Functions

### every

▸ **every**<`T`\>(`predicate`, `options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, `boolean`\>

/**
Determines whether all the members of an Container satisfy the predicate.
The predicate function is invoked for each element in the Container until the
it returns false, or until the end of the Container.

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

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, `boolean`\>

___

### getLength

▸ **getLength**(`arr`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | readonly `unknown`[] |

#### Returns

`number`

___

### isEmpty

▸ **isEmpty**(`arr`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | readonly `unknown`[] |

#### Returns

`boolean`

___

### some

▸ **some**<`T`\>(`predicate`, `options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, `boolean`\>

Determines whether the specified predicate returns true for any
element of a Container. The predicate function is invoked for each element
in the Container until it returns true, or until the end of the Container.

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

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, `boolean`\>
