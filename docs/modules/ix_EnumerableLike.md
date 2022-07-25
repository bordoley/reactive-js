[Reactive-JS](../README.md) / ix/EnumerableLike

# Module: ix/EnumerableLike

## Table of contents

### Variables

- [TContainerOf](ix_EnumerableLike.md#tcontainerof)
- [createT](ix_EnumerableLike.md#createt)
- [distinctUntilChangedT](ix_EnumerableLike.md#distinctuntilchangedt)
- [emptyT](ix_EnumerableLike.md#emptyt)
- [fromArrayT](ix_EnumerableLike.md#fromarrayt)
- [keepT](ix_EnumerableLike.md#keept)
- [mapT](ix_EnumerableLike.md#mapt)
- [pairwiseT](ix_EnumerableLike.md#pairwiset)
- [scanT](ix_EnumerableLike.md#scant)
- [skipFirstT](ix_EnumerableLike.md#skipfirstt)
- [takeFirstT](ix_EnumerableLike.md#takefirstt)
- [takeLastT](ix_EnumerableLike.md#takelastt)
- [takeWhileT](ix_EnumerableLike.md#takewhilet)
- [throwIfEmptyT](ix_EnumerableLike.md#throwifemptyt)
- [toArrayT](ix_EnumerableLike.md#toarrayt)
- [toEnumerableT](ix_EnumerableLike.md#toenumerablet)
- [toIterableT](ix_EnumerableLike.md#toiterablet)
- [zipT](ix_EnumerableLike.md#zipt)

### Functions

- [create](ix_EnumerableLike.md#create)
- [distinctUntilChanged](ix_EnumerableLike.md#distinctuntilchanged)
- [empty](ix_EnumerableLike.md#empty)
- [enumerate](ix_EnumerableLike.md#enumerate)
- [fromArray](ix_EnumerableLike.md#fromarray)
- [keep](ix_EnumerableLike.md#keep)
- [map](ix_EnumerableLike.md#map)
- [onNotify](ix_EnumerableLike.md#onnotify)
- [pairwise](ix_EnumerableLike.md#pairwise)
- [scan](ix_EnumerableLike.md#scan)
- [skipFirst](ix_EnumerableLike.md#skipfirst)
- [takeFirst](ix_EnumerableLike.md#takefirst)
- [takeLast](ix_EnumerableLike.md#takelast)
- [takeWhile](ix_EnumerableLike.md#takewhile)
- [throwIfEmpty](ix_EnumerableLike.md#throwifempty)
- [toEnumerable](ix_EnumerableLike.md#toenumerable)
- [toIterable](ix_EnumerableLike.md#toiterable)
- [toReadonlyArray](ix_EnumerableLike.md#toreadonlyarray)

## Variables

### TContainerOf

• `Const` **TContainerOf**: [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)

___

### createT

• `Const` **createT**: [`CreateInteractiveContainer`](../interfaces/ix.CreateInteractiveContainer.md)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)\>

___

### distinctUntilChangedT

• `Const` **distinctUntilChangedT**: [`DistinctUntilChanged`](containers.md#distinctuntilchanged)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)\>

___

### emptyT

• `Const` **emptyT**: [`Empty`](containers.md#empty)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)\>

___

### fromArrayT

• `Const` **fromArrayT**: [`FromArray`](containers.md#fromarray)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)\>

___

### keepT

• `Const` **keepT**: [`Keep`](containers.md#keep)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)\>

___

### mapT

• `Const` **mapT**: [`Map`](containers.md#map)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)\>

___

### pairwiseT

• `Const` **pairwiseT**: [`Pairwise`](containers.md#pairwise)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)\>

___

### scanT

• `Const` **scanT**: [`Scan`](containers.md#scan)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)\>

___

### skipFirstT

• `Const` **skipFirstT**: [`SkipFirst`](containers.md#skipfirst)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)\>

___

### takeFirstT

• `Const` **takeFirstT**: [`TakeFirst`](containers.md#takefirst)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)\>

___

### takeLastT

• `Const` **takeLastT**: [`TakeLast`](containers.md#takelast)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)\>

___

### takeWhileT

• `Const` **takeWhileT**: [`TakeWhile`](containers.md#takewhile)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)\>

___

### throwIfEmptyT

• `Const` **throwIfEmptyT**: [`ThrowIfEmpty`](containers.md#throwifempty)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)\>

___

### toArrayT

• `Const` **toArrayT**: [`ToReadonlyArray`](containers.md#toreadonlyarray)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)\>

___

### toEnumerableT

• `Const` **toEnumerableT**: [`ToEnumerable`](ix.md#toenumerable)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)\>

___

### toIterableT

• `Const` **toIterableT**: [`ToIterable`](containers.md#toiterable)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)\>

___

### zipT

• `Const` **zipT**: [`Zip`](containers.md#zip)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)\>

## Functions

### create

▸ **create**<`T`\>(`source`): [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | (`ctx`: `undefined` \| `void`) => [`EnumeratorLike`](../interfaces/ix.EnumeratorLike.md)<`T`\> |

#### Returns

[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](functions.md#equality)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### empty

▸ **empty**<`T`\>(`options?`): [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>

___

### enumerate

▸ **enumerate**<`T`\>(): (`enumerable`: [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>) => [`EnumeratorLike`](../interfaces/ix.EnumeratorLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`fn`

▸ (`enumerable`): [`EnumeratorLike`](../interfaces/ix.EnumeratorLike.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `enumerable` | [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\> |

##### Returns

[`EnumeratorLike`](../interfaces/ix.EnumeratorLike.md)<`T`\>

___

### fromArray

▸ **fromArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`FromArrayOptions`](containers.md#fromarrayoptions)\> |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### onNotify

▸ **onNotify**<`T`\>(`a`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, readonly [[`Option`](util.md#option)<`T`\>, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, readonly [[`Option`](util.md#option)<`T`\>, `T`]\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |
| `options?` | `Object` |
| `options.inclusive?` | `boolean` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<`unknown`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### toEnumerable

▸ **toEnumerable**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

___

### toIterable

▸ **toIterable**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, `Iterable`<`T`\>\>

Converts an EnumerableLike into a javascript Iterable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, `Iterable`<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>
