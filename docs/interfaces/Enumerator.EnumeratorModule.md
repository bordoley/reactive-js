[Reactive-JS](../README.md) / [Enumerator](../modules/Enumerator.md) / EnumeratorModule

# Interface: EnumeratorModule

[Enumerator](../modules/Enumerator.md).EnumeratorModule

## Hierarchy

- [`ConcreteContainerBaseTypeClass`](type_classes.ConcreteContainerBaseTypeClass.md)<[`Type`](../modules/Enumerator.md#type)\>

- [`BlockingContainerBaseTypeClass`](type_classes.BlockingContainerBaseTypeClass.md)<[`Type`](../modules/Enumerator.md#type)\>

- [`ContainerTypeClass`](type_classes.ContainerTypeClass.md)<[`Type`](../modules/Enumerator.md#type)\>

  ↳ **`EnumeratorModule`**

## Table of contents

### Constructor Methods

- [empty](Enumerator.EnumeratorModule.md#empty)
- [fromEnumeratorFactory](Enumerator.EnumeratorModule.md#fromenumeratorfactory)
- [fromFactory](Enumerator.EnumeratorModule.md#fromfactory)
- [fromIterable](Enumerator.EnumeratorModule.md#fromiterable)
- [fromOptional](Enumerator.EnumeratorModule.md#fromoptional)
- [fromReadonlyArray](Enumerator.EnumeratorModule.md#fromreadonlyarray)
- [fromValue](Enumerator.EnumeratorModule.md#fromvalue)

### Operator Methods

- [distinctUntilChanged](Enumerator.EnumeratorModule.md#distinctuntilchanged)
- [flatMapIterable](Enumerator.EnumeratorModule.md#flatmapiterable)
- [forEach](Enumerator.EnumeratorModule.md#foreach)
- [keep](Enumerator.EnumeratorModule.md#keep)
- [keepType](Enumerator.EnumeratorModule.md#keeptype)
- [map](Enumerator.EnumeratorModule.md#map)
- [mapTo](Enumerator.EnumeratorModule.md#mapto)
- [pairwise](Enumerator.EnumeratorModule.md#pairwise)
- [pick](Enumerator.EnumeratorModule.md#pick)
- [scan](Enumerator.EnumeratorModule.md#scan)
- [skipFirst](Enumerator.EnumeratorModule.md#skipfirst)
- [takeFirst](Enumerator.EnumeratorModule.md#takefirst)
- [takeLast](Enumerator.EnumeratorModule.md#takelast)
- [takeWhile](Enumerator.EnumeratorModule.md#takewhile)

### Other Methods

- [toObservable](Enumerator.EnumeratorModule.md#toobservable)

### Transform Methods

- [toReadonlyArray](Enumerator.EnumeratorModule.md#toreadonlyarray)

## Constructor Methods

### empty

▸ **empty**<`T`\>(): [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>

Return an Container that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>

#### Inherited from

[ConcreteContainerBaseTypeClass](type_classes.ConcreteContainerBaseTypeClass.md).[empty](type_classes.ConcreteContainerBaseTypeClass.md#empty)

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[ConcreteContainerBaseTypeClass](type_classes.ConcreteContainerBaseTypeClass.md).[fromEnumeratorFactory](type_classes.ConcreteContainerBaseTypeClass.md#fromenumeratorfactory)

___

### fromFactory

▸ **fromFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[ConcreteContainerBaseTypeClass](type_classes.ConcreteContainerBaseTypeClass.md).[fromFactory](type_classes.ConcreteContainerBaseTypeClass.md#fromfactory)

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[ConcreteContainerBaseTypeClass](type_classes.ConcreteContainerBaseTypeClass.md).[fromIterable](type_classes.ConcreteContainerBaseTypeClass.md#fromiterable)

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[ConcreteContainerBaseTypeClass](type_classes.ConcreteContainerBaseTypeClass.md).[fromOptional](type_classes.ConcreteContainerBaseTypeClass.md#fromoptional)

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[ConcreteContainerBaseTypeClass](type_classes.ConcreteContainerBaseTypeClass.md).[fromReadonlyArray](type_classes.ConcreteContainerBaseTypeClass.md#fromreadonlyarray)

___

### fromValue

▸ **fromValue**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`T`, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`T`, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[ConcreteContainerBaseTypeClass](type_classes.ConcreteContainerBaseTypeClass.md).[fromValue](type_classes.ConcreteContainerBaseTypeClass.md#fromvalue)

___

## Operator Methods

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `T`, `T`\>

Returns a ContainerOperator that emits all items emitted by the source that
are distinct by comparison from the previous item.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](../modules/functions.md#equality)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[distinctUntilChanged](type_classes.ContainerTypeClass.md#distinctuntilchanged)

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[flatMapIterable](type_classes.ContainerTypeClass.md#flatmapiterable)

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `T`, `T`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[forEach](type_classes.ContainerTypeClass.md#foreach)

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[keep](type_classes.ContainerTypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](../modules/functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[keepType](type_classes.ContainerTypeClass.md#keeptype)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `TA`, `TB`\>

Returns a ContainerOperator that applies the `selector` function to each
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
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[map](type_classes.ContainerTypeClass.md#map)

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[mapTo](type_classes.ContainerTypeClass.md#mapto)

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `T`, readonly [`T`, `T`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[pairwise](type_classes.ContainerTypeClass.md#pairwise)

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `T`, `T`[`TKey`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `TKey` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `T`, `T`[`TKey`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[pick](type_classes.ContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKeyA` | extends `string` \| `number` \| `symbol` |
| `TKeyB` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyA` | `TKeyA` |
| `keyB` | `TKeyB` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[pick](type_classes.ContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKeyA` | extends `string` \| `number` \| `symbol` |
| `TKeyB` | extends `string` \| `number` \| `symbol` |
| `TKeyC` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyA` | `TKeyA` |
| `keyB` | `TKeyB` |
| `keyC` | `TKeyC` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[pick](type_classes.ContainerTypeClass.md#pick)

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `T`, `TAcc`\>

Returns a Container that applies an accumulator function over the source,
and emits each intermediate result.

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scanner` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> | The accumulator function called on each source value. |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> | The initial accumulation value. |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `T`, `TAcc`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[scan](type_classes.ContainerTypeClass.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `T`, `T`\>

Returns a Container that skips the first count items emitted by the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[skipFirst](type_classes.ContainerTypeClass.md#skipfirst)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `T`, `T`\>

Returns a Container that only emits the first `count` values emitted by the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[takeFirst](type_classes.ContainerTypeClass.md#takefirst)

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `T`, `T`\>

Returns a Container that only emits the last `count` items emitted by the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[takeLast](type_classes.ContainerTypeClass.md#takelast)

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `T`, `T`\>

Returns a Container which emits values emitted by the source as long
as each value satisfies the given predicate, and then completes as soon as
this predicate is not satisfied.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> | The predicate function. |
| `options?` | `Object` | - |
| `options.inclusive?` | `boolean` | - |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](types.EnumeratorContainer.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[takeWhile](type_classes.ContainerTypeClass.md#takewhile)

___

## Other Methods

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

▸ **toObservable**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

___

## Transform Methods

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, readonly `T`[]\>

#### Inherited from

[BlockingContainerBaseTypeClass](type_classes.BlockingContainerBaseTypeClass.md).[toReadonlyArray](type_classes.BlockingContainerBaseTypeClass.md#toreadonlyarray)
