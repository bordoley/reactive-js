[Reactive-JS](../README.md) / core/ReadonlyArray

# Module: core/ReadonlyArray

## Table of contents

### Constructor Functions

- [empty](core_ReadonlyArray.md#empty)
- [fromEnumerable](core_ReadonlyArray.md#fromenumerable)
- [fromIterable](core_ReadonlyArray.md#fromiterable)
- [fromOptional](core_ReadonlyArray.md#fromoptional)
- [fromReadonlyArray](core_ReadonlyArray.md#fromreadonlyarray)
- [fromRunnable](core_ReadonlyArray.md#fromrunnable)

### Operator Functions

- [forEach](core_ReadonlyArray.md#foreach)
- [forEachWithKey](core_ReadonlyArray.md#foreachwithkey)
- [identity](core_ReadonlyArray.md#identity)
- [keep](core_ReadonlyArray.md#keep)
- [keepType](core_ReadonlyArray.md#keeptype)
- [keepWithKey](core_ReadonlyArray.md#keepwithkey)
- [map](core_ReadonlyArray.md#map)
- [mapWithKey](core_ReadonlyArray.md#mapwithkey)

### Other Functions

- [getLength](core_ReadonlyArray.md#getlength)
- [isEmpty](core_ReadonlyArray.md#isempty)

### Transform Functions

- [entries](core_ReadonlyArray.md#entries)
- [enumerate](core_ReadonlyArray.md#enumerate)
- [everySatisfy](core_ReadonlyArray.md#everysatisfy)
- [first](core_ReadonlyArray.md#first)
- [flow](core_ReadonlyArray.md#flow)
- [last](core_ReadonlyArray.md#last)
- [someSatisfy](core_ReadonlyArray.md#somesatisfy)
- [toEnumerable](core_ReadonlyArray.md#toenumerable)
- [toIterable](core_ReadonlyArray.md#toiterable)
- [toObservable](core_ReadonlyArray.md#toobservable)
- [toReadonlyArray](core_ReadonlyArray.md#toreadonlyarray)
- [toRunnable](core_ReadonlyArray.md#torunnable)

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

▸ **fromEnumerable**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>, readonly `T`[]\>

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

▸ **fromRunnable**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>, readonly `T`[]\>

___

## Operator Functions

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`): [`Operator`](core.KeyedContainer.md#operator)<[`ReadonlyArrayContainer`](../interfaces/core.ReadonlyArrayContainer.md), `TKey`, `T`, `T`\>

Returns a Container.Operator that applies the side effect function to each
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

[`Operator`](core.KeyedContainer.md#operator)<[`ReadonlyArrayContainer`](../interfaces/core.ReadonlyArrayContainer.md), `TKey`, `T`, `T`\>

___

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`Operator`](core.KeyedContainer.md#operator)<[`ReadonlyArrayContainer`](../interfaces/core.ReadonlyArrayContainer.md), `TKey`, `T`, `T`\>

Returns a KeyedContainer.Operator that applies the side effect function to each
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

[`Operator`](core.KeyedContainer.md#operator)<[`ReadonlyArrayContainer`](../interfaces/core.ReadonlyArrayContainer.md), `TKey`, `T`, `T`\>

___

### identity

▸ **identity**<`T`, `TKey`\>(): [`Operator`](core.KeyedContainer.md#operator)<[`ReadonlyArrayContainer`](../interfaces/core.ReadonlyArrayContainer.md), `TKey`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Returns

[`Operator`](core.KeyedContainer.md#operator)<[`ReadonlyArrayContainer`](../interfaces/core.ReadonlyArrayContainer.md), `TKey`, `T`, `T`\>

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`Operator`](core.KeyedContainer.md#operator)<[`ReadonlyArrayContainer`](../interfaces/core.ReadonlyArrayContainer.md), `TKey`, `T`, `T`\>

Returns a Container.Operator that only emits items produced by the
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

[`Operator`](core.KeyedContainer.md#operator)<[`ReadonlyArrayContainer`](../interfaces/core.ReadonlyArrayContainer.md), `TKey`, `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`): [`Operator`](core.KeyedContainer.md#operator)<[`ReadonlyArrayContainer`](../interfaces/core.ReadonlyArrayContainer.md), `TKey`, `TA`, `TB`\>

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

[`Operator`](core.KeyedContainer.md#operator)<[`ReadonlyArrayContainer`](../interfaces/core.ReadonlyArrayContainer.md), `TKey`, `TA`, `TB`\>

___

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`): [`Operator`](core.KeyedContainer.md#operator)<[`ReadonlyArrayContainer`](../interfaces/core.ReadonlyArrayContainer.md), `TKey`, `T`, `T`\>

Returns a Container.Operator that only emits items produced by the
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

[`Operator`](core.KeyedContainer.md#operator)<[`ReadonlyArrayContainer`](../interfaces/core.ReadonlyArrayContainer.md), `TKey`, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`Operator`](core.KeyedContainer.md#operator)<[`ReadonlyArrayContainer`](../interfaces/core.ReadonlyArrayContainer.md), `TKey`, `TA`, `TB`\>

Returns a Container.Operator that applies the `selector` function to each
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

[`Operator`](core.KeyedContainer.md#operator)<[`ReadonlyArrayContainer`](../interfaces/core.ReadonlyArrayContainer.md), `TKey`, `TA`, `TB`\>

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`selector`): [`Operator`](core.KeyedContainer.md#operator)<[`ReadonlyArrayContainer`](../interfaces/core.ReadonlyArrayContainer.md), `TKey`, `TA`, `TB`\>

Returns a Container.Operator that applies the `selector` function to each
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

[`Operator`](core.KeyedContainer.md#operator)<[`ReadonlyArrayContainer`](../interfaces/core.ReadonlyArrayContainer.md), `TKey`, `TA`, `TB`\>

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

▸ **entries**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumeratorLike`](../interfaces/core.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumeratorLike`](../interfaces/core.EnumeratorLike.md)<[`TKey`, `T`]\>\>

___

### enumerate

▸ **enumerate**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumeratorLike`](../interfaces/core.EnumeratorLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumeratorLike`](../interfaces/core.EnumeratorLike.md)<`T`\>\>

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<readonly `T`[], `boolean`\>

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

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`PauseableObservableLike`](../interfaces/core.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/core.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/core.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.count?` | `number` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`PauseableObservableLike`](../interfaces/core.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/core.DisposableLike.md)\>

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

▸ **toEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/core.EnumerableLike.md)<`T`\>\>

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

▸ **toObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>\>

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

▸ **toRunnable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], [`RunnableLike`](../interfaces/core.RunnableLike.md)<`T`\>\>
