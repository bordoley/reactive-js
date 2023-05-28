[Reactive-JS](../README.md) / IndexedCollection

# Module: IndexedCollection

## Table of contents

### Container Interfaces

- [IndexedCollectionContainer](../interfaces/IndexedCollection.IndexedCollectionContainer.md)

### Module Interfaces

- [IndexedCollectionModule](../interfaces/IndexedCollection.IndexedCollectionModule.md)

### Type Aliases

- [Signature](IndexedCollection.md#signature)
- [TKeyBase](IndexedCollection.md#tkeybase)
- [Type](IndexedCollection.md#type)

### Constructor Functions

- [empty](IndexedCollection.md#empty)

### Operator Functions

- [forEach](IndexedCollection.md#foreach)
- [forEachWithKey](IndexedCollection.md#foreachwithkey)
- [map](IndexedCollection.md#map)
- [mapTo](IndexedCollection.md#mapto)

### Other Functions

- [flow](IndexedCollection.md#flow)

### Transform Functions

- [entries](IndexedCollection.md#entries)
- [enumerate](IndexedCollection.md#enumerate)
- [everySatisfy](IndexedCollection.md#everysatisfy)
- [first](IndexedCollection.md#first)
- [last](IndexedCollection.md#last)
- [noneSatisfy](IndexedCollection.md#nonesatisfy)
- [someSatisfy](IndexedCollection.md#somesatisfy)
- [toEventSource](IndexedCollection.md#toeventsource)
- [toIterable](IndexedCollection.md#toiterable)
- [toObservable](IndexedCollection.md#toobservable)
- [toReadonlyArray](IndexedCollection.md#toreadonlyarray)
- [values](IndexedCollection.md#values)

## Type Aliases

### Signature

Ƭ **Signature**: [`IndexedCollectionModule`](../interfaces/IndexedCollection.IndexedCollectionModule.md)

___

### TKeyBase

Ƭ **TKeyBase**: `number`

___

### Type

Ƭ **Type**: [`IndexedCollectionContainer`](../interfaces/IndexedCollection.IndexedCollectionContainer.md)

## Constructor Functions

### empty

▸ **empty**<`T`, `TKey`\>(): [`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>

Return an Container that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Returns

[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>

___

## Operator Functions

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`): [`ContainerOperator`](types.md#containeroperator)<[`IndexedCollectionContainer`](../interfaces/IndexedCollection.IndexedCollectionContainer.md), `T`, `T`, `TKey`\>

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

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`IndexedCollectionContainer`](../interfaces/IndexedCollection.IndexedCollectionContainer.md), `T`, `T`, `TKey`\>

___

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`ContainerOperator`](types.md#containeroperator)<[`IndexedCollectionContainer`](../interfaces/IndexedCollection.IndexedCollectionContainer.md), `T`, `T`, `TKey`\>

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
| `effect` | [`SideEffect2`](functions.md#sideeffect2)<`T`, `TKey`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`IndexedCollectionContainer`](../interfaces/IndexedCollection.IndexedCollectionContainer.md), `T`, `T`, `TKey`\>

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`IndexedCollectionContainer`](../interfaces/IndexedCollection.IndexedCollectionContainer.md), `TA`, `TB`, `TKey`\>

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

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`IndexedCollectionContainer`](../interfaces/IndexedCollection.IndexedCollectionContainer.md), `TA`, `TB`, `TKey`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ContainerOperator`](types.md#containeroperator)<[`IndexedCollectionContainer`](../interfaces/IndexedCollection.IndexedCollectionContainer.md), `TA`, `TB`, `number`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `TB` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`IndexedCollectionContainer`](../interfaces/IndexedCollection.IndexedCollectionContainer.md), `TA`, `TB`, `number`\>

___

## Other Functions

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

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
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

___

## Transform Functions

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Returns

[`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`TKey`, `T`]\>\>

___

### enumerate

▸ **enumerate**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, `boolean`\>

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

[`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, `boolean`\>

___

### first

▸ **first**<`T`\>(): [`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

___

### last

▸ **last**<`T`\>(): [`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, `boolean`\>

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, `boolean`\>

___

### toEventSource

▸ **toEventSource**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\>

___

### toIterable

▸ **toIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, `Iterable`<`T`\>\>

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

[`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, `Iterable`<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, readonly `T`[]\>

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

[`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, readonly `T`[]\>

___

### values

▸ **values**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Returns

[`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>
