[Reactive-JS](../README.md) / keyed-containers/ReadonlyArray

# Module: keyed-containers/ReadonlyArray

## Table of contents

### Constructor Functions

- [empty](keyed_containers_ReadonlyArray.md#empty)
- [fromEnumerable](keyed_containers_ReadonlyArray.md#fromenumerable)
- [fromIterable](keyed_containers_ReadonlyArray.md#fromiterable)
- [fromOptional](keyed_containers_ReadonlyArray.md#fromoptional)
- [fromReadonlyArray](keyed_containers_ReadonlyArray.md#fromreadonlyarray)
- [fromRunnable](keyed_containers_ReadonlyArray.md#fromrunnable)

### Operator Functions

- [forEach](keyed_containers_ReadonlyArray.md#foreach)
- [forEachWithKey](keyed_containers_ReadonlyArray.md#foreachwithkey)
- [identity](keyed_containers_ReadonlyArray.md#identity)
- [keep](keyed_containers_ReadonlyArray.md#keep)
- [keepType](keyed_containers_ReadonlyArray.md#keeptype)
- [keepWithKey](keyed_containers_ReadonlyArray.md#keepwithkey)
- [map](keyed_containers_ReadonlyArray.md#map)
- [mapWithKey](keyed_containers_ReadonlyArray.md#mapwithkey)

### Other Functions

- [every](keyed_containers_ReadonlyArray.md#every)
- [getLength](keyed_containers_ReadonlyArray.md#getlength)
- [isEmpty](keyed_containers_ReadonlyArray.md#isempty)
- [some](keyed_containers_ReadonlyArray.md#some)

### Transform Functions

- [entries](keyed_containers_ReadonlyArray.md#entries)
- [enumerate](keyed_containers_ReadonlyArray.md#enumerate)
- [first](keyed_containers_ReadonlyArray.md#first)
- [last](keyed_containers_ReadonlyArray.md#last)
- [toAsyncEnumerable](keyed_containers_ReadonlyArray.md#toasyncenumerable)
- [toEnumerable](keyed_containers_ReadonlyArray.md#toenumerable)
- [toFlowable](keyed_containers_ReadonlyArray.md#toflowable)
- [toIterable](keyed_containers_ReadonlyArray.md#toiterable)
- [toObservable](keyed_containers_ReadonlyArray.md#toobservable)
- [toReadonlyArray](keyed_containers_ReadonlyArray.md#toreadonlyarray)
- [toRunnable](keyed_containers_ReadonlyArray.md#torunnable)

## Constructor Functions

### empty

▸ **empty**<`T`, `TKey`\>(`options?`): [`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>

Return an ContainerLike that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`, `TKey`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>\>

___

### fromRunnable

▸ **fromRunnable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>\>

___

## Operator Functions

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`, `options?`): [`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `T`, `T`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |
| `options?` | `undefined` |

#### Returns

[`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `T`, `T`\>

___

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`, `options?`): [`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `T`, `T`\>

Returns a KeyedContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect2`](functions.md#sideeffect2)<`T`, `TKey`\> |
| `options?` | `undefined` |

#### Returns

[`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `T`, `T`\>

___

### identity

▸ **identity**<`T`, `TKey`\>(): [`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Returns

[`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `T`, `T`\>

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`, `options?`): [`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |
| `options?` | `undefined` |

#### Returns

[`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`, `options?`): [`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](functions.md#typepredicate)<`TA`, `TB`\> |
| `options?` | `undefined` |

#### Returns

[`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `TA`, `TB`\>

___

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`, `options?`): [`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Function2`](functions.md#function2)<`T`, `TKey`, `boolean`\> |
| `options?` | `undefined` |

#### Returns

[`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`, `options?`): [`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `TA`, `TB`\>

Returns a ContainerOperator that applies the `selector` function to each
value emitted by the source.

**`Typeparam`**

TA - The inner type of the source container

**`Typeparam`**

TB - The inner type of the mapped container

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |
| `options?` | `undefined` | - |

#### Returns

[`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `TA`, `TB`\>

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`selector`, `options?`): [`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `TA`, `TB`\>

Returns a ContainerOperator that applies the `selector` function to each
value emitted by the source.

**`Typeparam`**

TA - The inner type of the source container

**`Typeparam`**

TB - The inner type of the mapped container

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |
| `options?` | `undefined` | - |

#### Returns

[`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `TA`, `TB`\>

___

## Other Functions

### every

▸ **every**<`T`\>(`predicate`, `options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>, `boolean`\>

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

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>, `boolean`\>

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

▸ **some**<`T`\>(`predicate`, `options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>, `boolean`\>

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

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>, `boolean`\>

___

## Transform Functions

### entries

▸ **entries**<`T`, `TKey`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>, [`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>, [`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<[`TKey`, `T`]\>\>

___

### enumerate

▸ **enumerate**<`T`\>(): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>, [`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>, [`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`T`\>\>

___

### first

▸ **first**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

___

### last

▸ **last**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

___

### toAsyncEnumerable

▸ **toAsyncEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/streaming.AsyncEnumerableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/streaming.AsyncEnumerableLike.md)<`T`\>\>

___

### toEnumerable

▸ **toEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>, [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>, [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>\>

___

### toFlowable

▸ **toFlowable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

___

### toIterable

▸ **toIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>, [`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>, [`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`, `TKey`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>\>

Converts the ContainerLike to a `ReadonlyArrayLike`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>\>

___

### toRunnable

▸ **toRunnable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyed_containers.ReadonlyArrayLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>
