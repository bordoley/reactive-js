[Reactive-JS](../README.md) / keyedcontainers/ReadonlyArray

# Module: keyedcontainers/ReadonlyArray

## Table of contents

### Constructor Functions

- [empty](keyedcontainers_ReadonlyArray.md#empty)
- [fromEnumerable](keyedcontainers_ReadonlyArray.md#fromenumerable)
- [fromIterable](keyedcontainers_ReadonlyArray.md#fromiterable)
- [fromOptional](keyedcontainers_ReadonlyArray.md#fromoptional)
- [fromReadonlyArray](keyedcontainers_ReadonlyArray.md#fromreadonlyarray)
- [fromRunnable](keyedcontainers_ReadonlyArray.md#fromrunnable)

### Operator Functions

- [forEach](keyedcontainers_ReadonlyArray.md#foreach)
- [forEachWithKey](keyedcontainers_ReadonlyArray.md#foreachwithkey)
- [identity](keyedcontainers_ReadonlyArray.md#identity)
- [keep](keyedcontainers_ReadonlyArray.md#keep)
- [keepType](keyedcontainers_ReadonlyArray.md#keeptype)
- [keepWithKey](keyedcontainers_ReadonlyArray.md#keepwithkey)
- [map](keyedcontainers_ReadonlyArray.md#map)
- [mapWithKey](keyedcontainers_ReadonlyArray.md#mapwithkey)

### Other Functions

- [every](keyedcontainers_ReadonlyArray.md#every)
- [getLength](keyedcontainers_ReadonlyArray.md#getlength)
- [isEmpty](keyedcontainers_ReadonlyArray.md#isempty)
- [some](keyedcontainers_ReadonlyArray.md#some)

### Transform Functions

- [entries](keyedcontainers_ReadonlyArray.md#entries)
- [enumerate](keyedcontainers_ReadonlyArray.md#enumerate)
- [first](keyedcontainers_ReadonlyArray.md#first)
- [last](keyedcontainers_ReadonlyArray.md#last)
- [toAsyncEnumerable](keyedcontainers_ReadonlyArray.md#toasyncenumerable)
- [toEnumerable](keyedcontainers_ReadonlyArray.md#toenumerable)
- [toFlowable](keyedcontainers_ReadonlyArray.md#toflowable)
- [toIterable](keyedcontainers_ReadonlyArray.md#toiterable)
- [toObservable](keyedcontainers_ReadonlyArray.md#toobservable)
- [toReadonlyArray](keyedcontainers_ReadonlyArray.md#toreadonlyarray)
- [toRunnable](keyedcontainers_ReadonlyArray.md#torunnable)

## Constructor Functions

### empty

▸ **empty**<`T`, `TKey`\>(`options?`): [`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>

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

[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`, `TKey`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], [`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>\>

___

### fromRunnable

▸ **fromRunnable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>\>

___

## Operator Functions

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`, `options?`): [`KeyedContainerOperator`](keyedcontainers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `T`, `T`\>

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

[`KeyedContainerOperator`](keyedcontainers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `T`, `T`\>

___

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`, `options?`): [`KeyedContainerOperator`](keyedcontainers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `T`, `T`\>

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

[`KeyedContainerOperator`](keyedcontainers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `T`, `T`\>

___

### identity

▸ **identity**<`T`, `TKey`\>(): [`KeyedContainerOperator`](keyedcontainers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Returns

[`KeyedContainerOperator`](keyedcontainers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `T`, `T`\>

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`, `options?`): [`KeyedContainerOperator`](keyedcontainers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `T`, `T`\>

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

[`KeyedContainerOperator`](keyedcontainers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`, `options?`): [`KeyedContainerOperator`](keyedcontainers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `TA`, `TB`\>

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

[`KeyedContainerOperator`](keyedcontainers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `TA`, `TB`\>

___

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`, `options?`): [`KeyedContainerOperator`](keyedcontainers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `T`, `T`\>

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

[`KeyedContainerOperator`](keyedcontainers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`mapper`, `options?`): [`KeyedContainerOperator`](keyedcontainers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `TA`, `TB`\>

Returns a ContainerOperator that applies the `mapper` function to each
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
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |
| `options?` | `undefined` | - |

#### Returns

[`KeyedContainerOperator`](keyedcontainers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `TA`, `TB`\>

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`mapper`, `options?`): [`KeyedContainerOperator`](keyedcontainers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `TA`, `TB`\>

Returns a ContainerOperator that applies the `mapper` function to each
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
| `mapper` | [`Function2`](functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |
| `options?` | `undefined` | - |

#### Returns

[`KeyedContainerOperator`](keyedcontainers.md#keyedcontaineroperator)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`unknown`\>, `TKey`, `TA`, `TB`\>

___

## Other Functions

### every

▸ **every**<`T`\>(`predicate`, `options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>, `boolean`\>

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

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>, `boolean`\>

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

▸ **some**<`T`\>(`predicate`, `options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>, `boolean`\>

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

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>, `boolean`\>

___

## Transform Functions

### entries

▸ **entries**<`T`, `TKey`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>, [`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<[`TKey`, `T`]\>\>

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

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>, [`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<[`TKey`, `T`]\>\>

___

### enumerate

▸ **enumerate**<`T`\>(): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>, [`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>, [`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`T`\>\>

___

### first

▸ **first**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

___

### last

▸ **last**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

___

### toAsyncEnumerable

▸ **toAsyncEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/streaming.AsyncEnumerableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/streaming.AsyncEnumerableLike.md)<`T`\>\>

___

### toEnumerable

▸ **toEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>, [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>, [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>\>

___

### toFlowable

▸ **toFlowable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

___

### toIterable

▸ **toIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>, [`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>, [`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`, `TKey`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>\>

___

### toRunnable

▸ **toRunnable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/keyedcontainers.ReadonlyArrayLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>
