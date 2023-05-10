[Reactive-JS](../README.md) / ReadonlyArray

# Module: ReadonlyArray

## Table of contents

### Interfaces

- [Signature](../interfaces/ReadonlyArray.Signature.md)
- [Type](../interfaces/ReadonlyArray.Type.md)

### Type Aliases

- [TKeyBase](ReadonlyArray.md#tkeybase)

### Constructor Functions

- [empty](ReadonlyArray.md#empty)
- [fromIterable](ReadonlyArray.md#fromiterable)
- [fromOptional](ReadonlyArray.md#fromoptional)
- [fromReadonlyArray](ReadonlyArray.md#fromreadonlyarray)

### Operator Functions

- [forEach](ReadonlyArray.md#foreach)
- [forEachWithKey](ReadonlyArray.md#foreachwithkey)
- [keep](ReadonlyArray.md#keep)
- [keepType](ReadonlyArray.md#keeptype)
- [keepWithKey](ReadonlyArray.md#keepwithkey)
- [map](ReadonlyArray.md#map)
- [mapWithKey](ReadonlyArray.md#mapwithkey)

### Transform Functions

- [entries](ReadonlyArray.md#entries)
- [enumerate](ReadonlyArray.md#enumerate)
- [everySatisfy](ReadonlyArray.md#everysatisfy)
- [first](ReadonlyArray.md#first)
- [last](ReadonlyArray.md#last)
- [reduce](ReadonlyArray.md#reduce)
- [reduceWithKey](ReadonlyArray.md#reducewithkey)
- [someSatisfy](ReadonlyArray.md#somesatisfy)
- [toIterable](ReadonlyArray.md#toiterable)
- [toReadonlyArray](ReadonlyArray.md#toreadonlyarray)
- [values](ReadonlyArray.md#values)

## Type Aliases

### TKeyBase

Ƭ **TKeyBase**: [`KeyOf`](types.md#keyof)<[`Type`](../interfaces/ReadonlyArray.Type.md)\>

## Constructor Functions

### empty

▸ **empty**<`T`\>(): readonly `T`[]

Return an Container that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

readonly `T`[]

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

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], readonly `T`[]\>

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

[`Function1`](functions.md#function1)<readonly `T`[], readonly `T`[]\>

___

## Operator Functions

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`): [`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](../interfaces/ReadonlyArray.Type.md), `TKey`, `T`, `T`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](../interfaces/ReadonlyArray.Type.md), `TKey`, `T`, `T`\>

___

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](../interfaces/ReadonlyArray.Type.md), `TKey`, `T`, `T`\>

Returns a KeyedContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect2`](functions.md#sideeffect2)<`T`, `TKey`\> |

#### Returns

[`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](../interfaces/ReadonlyArray.Type.md), `TKey`, `T`, `T`\>

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](../interfaces/ReadonlyArray.Type.md), `TKey`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](../interfaces/ReadonlyArray.Type.md), `TKey`, `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](../interfaces/ReadonlyArray.Type.md), `TKey`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](../interfaces/ReadonlyArray.Type.md), `TKey`, `TA`, `TB`\>

___

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](../interfaces/ReadonlyArray.Type.md), `TKey`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Function2`](functions.md#function2)<`T`, `TKey`, `boolean`\> |

#### Returns

[`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](../interfaces/ReadonlyArray.Type.md), `TKey`, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](../interfaces/ReadonlyArray.Type.md), `TKey`, `TA`, `TB`\>

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
| `TKey` | extends `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](../interfaces/ReadonlyArray.Type.md), `TKey`, `TA`, `TB`\>

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`selector`): [`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](../interfaces/ReadonlyArray.Type.md), `TKey`, `TA`, `TB`\>

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
| `TKey` | extends `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](../interfaces/ReadonlyArray.Type.md), `TKey`, `TA`, `TB`\>

___

## Transform Functions

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` |

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

### last

▸ **last**<`T`\>(): [`Function1`](functions.md#function1)<readonly `T`[], [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`Optional`](functions.md#optional)<`T`\>\>

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<readonly `T`[], `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], `TAcc`\>

___

### reduceWithKey

▸ **reduceWithKey**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<readonly `T`[], `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Function3`](functions.md#function3)<`TAcc`, `T`, `TKey`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], `TAcc`\>

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

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](functions.md#function1)<readonly `T`[], readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], readonly `T`[]\>

___

### values

▸ **values**<`T`\>(): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>
