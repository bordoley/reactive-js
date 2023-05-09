[Reactive-JS](../README.md) / ReadonlyArray

# Module: ReadonlyArray

## Table of contents

### Constructor Functions

- [empty](ReadonlyArray.md#empty)
- [fromEnumerable](ReadonlyArray.md#fromenumerable)
- [fromIterable](ReadonlyArray.md#fromiterable)
- [fromOptional](ReadonlyArray.md#fromoptional)
- [fromReadonlyArray](ReadonlyArray.md#fromreadonlyarray)
- [fromRunnable](ReadonlyArray.md#fromrunnable)

### Operator Functions

- [forEach](ReadonlyArray.md#foreach)
- [forEachWithKey](ReadonlyArray.md#foreachwithkey)
- [identity](ReadonlyArray.md#identity)
- [keep](ReadonlyArray.md#keep)
- [keepType](ReadonlyArray.md#keeptype)
- [keepWithKey](ReadonlyArray.md#keepwithkey)
- [map](ReadonlyArray.md#map)
- [mapWithKey](ReadonlyArray.md#mapwithkey)

### Other Functions

- [getLength](ReadonlyArray.md#getlength)
- [isEmpty](ReadonlyArray.md#isempty)

### Transform Functions

- [entries](ReadonlyArray.md#entries)
- [enumerate](ReadonlyArray.md#enumerate)
- [everySatisfy](ReadonlyArray.md#everysatisfy)
- [first](ReadonlyArray.md#first)
- [flow](ReadonlyArray.md#flow)
- [last](ReadonlyArray.md#last)
- [someSatisfy](ReadonlyArray.md#somesatisfy)
- [toEnumerable](ReadonlyArray.md#toenumerable)
- [toIterable](ReadonlyArray.md#toiterable)
- [toObservable](ReadonlyArray.md#toobservable)
- [toReadonlyArray](ReadonlyArray.md#toreadonlyarray)
- [toRunnable](ReadonlyArray.md#torunnable)

## Constructor Functions

### empty

▸ **empty**<`T`, `TKey`\>(): readonly `T`[]

Return an Container that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Returns

readonly `T`[]

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, readonly `T`[]\>

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, readonly `T`[]\>

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, readonly `T`[]\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`, `TKey`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], readonly `T`[]\>

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

[`Function1`](functions.md#function1)<readonly `T`[], readonly `T`[]\>

___

### fromRunnable

▸ **fromRunnable**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, readonly `T`[]\>

___

## Operator Functions

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`): [`Operator`](containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](../interfaces/containers.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

Returns a Containers.Operator that applies the side effect function to each
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

#### Returns

[`Operator`](containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](../interfaces/containers.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

___

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`Operator`](containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](../interfaces/containers.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

Returns a KeyedContainers.Operator that applies the side effect function to each
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

#### Returns

[`Operator`](containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](../interfaces/containers.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

___

### identity

▸ **identity**<`T`, `TKey`\>(): [`Operator`](containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](../interfaces/containers.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Returns

[`Operator`](containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](../interfaces/containers.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`Operator`](containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](../interfaces/containers.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

Returns a Containers.Operator that only emits items produced by the
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

#### Returns

[`Operator`](containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](../interfaces/containers.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`): [`Operator`](containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](../interfaces/containers.ReadonlyArrayContainer-1.md), `TKey`, `TA`, `TB`\>

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

#### Returns

[`Operator`](containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](../interfaces/containers.ReadonlyArrayContainer-1.md), `TKey`, `TA`, `TB`\>

___

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`): [`Operator`](containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](../interfaces/containers.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

Returns a Containers.Operator that only emits items produced by the
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

#### Returns

[`Operator`](containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](../interfaces/containers.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`Operator`](containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](../interfaces/containers.ReadonlyArrayContainer-1.md), `TKey`, `TA`, `TB`\>

Returns a Containers.Operator that applies the `selector` function to each
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

#### Returns

[`Operator`](containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](../interfaces/containers.ReadonlyArrayContainer-1.md), `TKey`, `TA`, `TB`\>

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`selector`): [`Operator`](containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](../interfaces/containers.ReadonlyArrayContainer-1.md), `TKey`, `TA`, `TB`\>

Returns a Containers.Operator that applies the `selector` function to each
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

#### Returns

[`Operator`](containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](../interfaces/containers.ReadonlyArrayContainer-1.md), `TKey`, `TA`, `TB`\>

___

## Other Functions

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

## Transform Functions

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

___

### enumerate

▸ **enumerate**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<readonly `T`[], `boolean`\>

Determines whether all the members of an Container satisfy the predicate.
The predicate function is invoked for each element in the Container until the
it returns false, or until the end of the Containers.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], `boolean`\>

___

### first

▸ **first**<`T`\>(): [`Function1`](functions.md#function1)<readonly `T`[], [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`Optional`](functions.md#optional)<`T`\>\>

___

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`PauseableObservableLike`](../interfaces/types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.count?` | `number` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`PauseableObservableLike`](../interfaces/types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

___

### last

▸ **last**<`T`\>(): [`Function1`](functions.md#function1)<readonly `T`[], [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`Optional`](functions.md#optional)<`T`\>\>

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<readonly `T`[], `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], `boolean`\>

___

### toEnumerable

▸ **toEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

___

### toIterable

▸ **toIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], `Iterable`<`T`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], `Iterable`<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<readonly `T`[], readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], readonly `T`[]\>

___

### toRunnable

▸ **toRunnable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>
