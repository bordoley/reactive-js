[Reactive-JS](../README.md) / [Enumerable](../modules/Enumerable.md) / EnumerableModule

# Interface: EnumerableModule

[Enumerable](../modules/Enumerable.md).EnumerableModule

## Hierarchy

- [`GeneratorTypeClass`](types.GeneratorTypeClass.md)<[`Type`](../modules/Enumerable.md#type)\>

  ↳ **`EnumerableModule`**

## Table of contents

### Constructor Methods

- [concat](Enumerable.EnumerableModule.md#concat)
- [empty](Enumerable.EnumerableModule.md#empty)
- [fromEnumerable](Enumerable.EnumerableModule.md#fromenumerable)
- [fromEnumeratorFactory](Enumerable.EnumerableModule.md#fromenumeratorfactory)
- [fromFactory](Enumerable.EnumerableModule.md#fromfactory)
- [fromIterable](Enumerable.EnumerableModule.md#fromiterable)
- [fromOptional](Enumerable.EnumerableModule.md#fromoptional)
- [fromReadonlyArray](Enumerable.EnumerableModule.md#fromreadonlyarray)
- [fromValue](Enumerable.EnumerableModule.md#fromvalue)
- [zip](Enumerable.EnumerableModule.md#zip)

### Operator Methods

- [buffer](Enumerable.EnumerableModule.md#buffer)
- [concatAll](Enumerable.EnumerableModule.md#concatall)
- [concatMap](Enumerable.EnumerableModule.md#concatmap)
- [concatWith](Enumerable.EnumerableModule.md#concatwith)
- [distinctUntilChanged](Enumerable.EnumerableModule.md#distinctuntilchanged)
- [endWith](Enumerable.EnumerableModule.md#endwith)
- [flatMapIterable](Enumerable.EnumerableModule.md#flatmapiterable)
- [forEach](Enumerable.EnumerableModule.md#foreach)
- [ignoreElements](Enumerable.EnumerableModule.md#ignoreelements)
- [keep](Enumerable.EnumerableModule.md#keep)
- [keepType](Enumerable.EnumerableModule.md#keeptype)
- [map](Enumerable.EnumerableModule.md#map)
- [mapTo](Enumerable.EnumerableModule.md#mapto)
- [pairwise](Enumerable.EnumerableModule.md#pairwise)
- [pick](Enumerable.EnumerableModule.md#pick)
- [repeat](Enumerable.EnumerableModule.md#repeat)
- [scan](Enumerable.EnumerableModule.md#scan)
- [skipFirst](Enumerable.EnumerableModule.md#skipfirst)
- [startWith](Enumerable.EnumerableModule.md#startwith)
- [takeFirst](Enumerable.EnumerableModule.md#takefirst)
- [takeLast](Enumerable.EnumerableModule.md#takelast)
- [takeWhile](Enumerable.EnumerableModule.md#takewhile)
- [zipWith](Enumerable.EnumerableModule.md#zipwith)

### Other Methods

- [compute](Enumerable.EnumerableModule.md#compute)
- [flow](Enumerable.EnumerableModule.md#flow)
- [generate](Enumerable.EnumerableModule.md#generate)
- [throws](Enumerable.EnumerableModule.md#throws)
- [toEnumeratorFactory](Enumerable.EnumerableModule.md#toenumeratorfactory)
- [toObservable](Enumerable.EnumerableModule.md#toobservable)

### Transform Methods

- [contains](Enumerable.EnumerableModule.md#contains)
- [enumerate](Enumerable.EnumerableModule.md#enumerate)
- [everySatisfy](Enumerable.EnumerableModule.md#everysatisfy)
- [first](Enumerable.EnumerableModule.md#first)
- [last](Enumerable.EnumerableModule.md#last)
- [noneSatisfy](Enumerable.EnumerableModule.md#nonesatisfy)
- [reduce](Enumerable.EnumerableModule.md#reduce)
- [someSatisfy](Enumerable.EnumerableModule.md#somesatisfy)
- [toIterable](Enumerable.EnumerableModule.md#toiterable)
- [toReadonlyArray](Enumerable.EnumerableModule.md#toreadonlyarray)

## Constructor Methods

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`EnumerableLike`](types.EnumerableLike.md)<`T`\>

Returns a Container which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumerableLike`](types.EnumerableLike.md)<`T`\> |
| `snd` | [`EnumerableLike`](types.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<`T`\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[concat](types.GeneratorTypeClass.md#concat)

___

### empty

▸ **empty**<`T`\>(): [`EnumerableLike`](types.EnumerableLike.md)<`T`\>

Return an Container that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<`T`\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[empty](types.GeneratorTypeClass.md#empty)

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[fromEnumerable](types.GeneratorTypeClass.md#fromenumerable)

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[fromEnumeratorFactory](types.GeneratorTypeClass.md#fromenumeratorfactory)

___

### fromFactory

▸ **fromFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[fromFactory](types.GeneratorTypeClass.md#fromfactory)

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[fromIterable](types.GeneratorTypeClass.md#fromiterable)

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[fromOptional](types.GeneratorTypeClass.md#fromoptional)

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[fromReadonlyArray](types.GeneratorTypeClass.md#fromreadonlyarray)

___

### fromValue

▸ **fromValue**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`T`, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`T`, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[fromValue](types.GeneratorTypeClass.md#fromvalue)

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`]\>

Combines multiple sources to create a Container whose values are calculated from the values,
in order, of each of its input sources.

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`]\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[zip](types.GeneratorTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[zip](types.GeneratorTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[zip](types.GeneratorTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[zip](types.GeneratorTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[zip](types.GeneratorTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](types.EnumerableLike.md)<`TG`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[zip](types.GeneratorTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](types.EnumerableLike.md)<`TH`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[zip](types.GeneratorTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |
| `TI` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](types.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](types.EnumerableLike.md)<`TI`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[zip](types.GeneratorTypeClass.md#zip)

___

## Operator Methods

### buffer

▸ **buffer**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, readonly `T`[]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, readonly `T`[]\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[buffer](types.GeneratorTypeClass.md#buffer)

___

### concatAll

▸ **concatAll**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), [`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), [`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `T`\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[concatAll](types.GeneratorTypeClass.md#concatall)

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`EnumerableLike`](types.EnumerableLike.md)<`TB`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `TA`, `TB`\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[concatMap](types.GeneratorTypeClass.md#concatmap)

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EnumerableLike`](types.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `T`\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[concatWith](types.GeneratorTypeClass.md#concatwith)

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `T`\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[distinctUntilChanged](types.GeneratorTypeClass.md#distinctuntilchanged)

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `...values` | readonly `T`[] |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `T`\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[endWith](types.GeneratorTypeClass.md#endwith)

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `TA`, `TB`\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[flatMapIterable](types.GeneratorTypeClass.md#flatmapiterable)

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `T`\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[forEach](types.GeneratorTypeClass.md#foreach)

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `unknown`, `T`\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[ignoreElements](types.GeneratorTypeClass.md#ignoreelements)

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `T`\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[keep](types.GeneratorTypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `TA`, `TB`\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[keepType](types.GeneratorTypeClass.md#keeptype)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `TA`, `TB`\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[map](types.GeneratorTypeClass.md#map)

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `TA`, `TB`\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[mapTo](types.GeneratorTypeClass.md#mapto)

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, readonly [`T`, `T`]\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[pairwise](types.GeneratorTypeClass.md#pairwise)

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `T`[`TKey`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `T`[`TKey`]\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[pick](types.GeneratorTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[pick](types.GeneratorTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[pick](types.GeneratorTypeClass.md#pick)

___

### repeat

▸ **repeat**<`T`\>(`count`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `T`\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[repeat](types.GeneratorTypeClass.md#repeat)

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `TAcc`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `TAcc`\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[scan](types.GeneratorTypeClass.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `T`\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[skipFirst](types.GeneratorTypeClass.md#skipfirst)

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `...values` | readonly `T`[] |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `T`\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[startWith](types.GeneratorTypeClass.md#startwith)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `T`\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[takeFirst](types.GeneratorTypeClass.md#takefirst)

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `T`\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[takeLast](types.GeneratorTypeClass.md#takelast)

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `T`, `T`\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[takeWhile](types.GeneratorTypeClass.md#takewhile)

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`]\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[zipWith](types.GeneratorTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[zipWith](types.GeneratorTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[zipWith](types.GeneratorTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[zipWith](types.GeneratorTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[zipWith](types.GeneratorTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](types.EnumerableLike.md)<`TG`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[zipWith](types.GeneratorTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](types.EnumerableLike.md)<`TH`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[zipWith](types.GeneratorTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |
| `TI` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](types.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](types.EnumerableLike.md)<`TI`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumerableContainer`](Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[zipWith](types.GeneratorTypeClass.md#zipwith)

___

## Other Methods

### compute

▸ **compute**<`T`\>(`computation`, `options?`): [`EnumerableLike`](types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `computation` | [`Factory`](../modules/functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.mode?` | ``"batched"`` \| ``"combine-latest"`` |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<`T`\>

___

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[flow](types.GeneratorTypeClass.md#flow)

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`EnumerableLike`](types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<`T`\>

___

### throws

▸ **throws**<`T`\>(`options?`): [`EnumerableLike`](types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.raise?` | [`Factory`](../modules/functions.md#factory)<`unknown`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<`T`\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[throws](types.GeneratorTypeClass.md#throws)

___

### toEnumeratorFactory

▸ **toEnumeratorFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[toEnumeratorFactory](types.GeneratorTypeClass.md#toenumeratorfactory)

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[toObservable](types.GeneratorTypeClass.md#toobservable)

▸ **toObservable**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[toObservable](types.GeneratorTypeClass.md#toobservable)

___

## Transform Methods

### contains

▸ **contains**<`T`\>(`value`, `options?`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](../modules/functions.md#equality)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `boolean`\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[contains](types.GeneratorTypeClass.md#contains)

___

### enumerate

▸ **enumerate**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[enumerate](types.GeneratorTypeClass.md#enumerate)

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `boolean`\>

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
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `boolean`\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[everySatisfy](types.GeneratorTypeClass.md#everysatisfy)

___

### first

▸ **first**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[first](types.GeneratorTypeClass.md#first)

___

### last

▸ **last**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[last](types.GeneratorTypeClass.md#last)

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `boolean`\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[noneSatisfy](types.GeneratorTypeClass.md#nonesatisfy)

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `TAcc`\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[reduce](types.GeneratorTypeClass.md#reduce)

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `boolean`\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[someSatisfy](types.GeneratorTypeClass.md#somesatisfy)

___

### toIterable

▸ **toIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `Iterable`<`T`\>\>

Converts the Container to a `IterableLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `Iterable`<`T`\>\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[toIterable](types.GeneratorTypeClass.md#toiterable)

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, readonly `T`[]\>

#### Inherited from

[GeneratorTypeClass](types.GeneratorTypeClass.md).[toReadonlyArray](types.GeneratorTypeClass.md#toreadonlyarray)
