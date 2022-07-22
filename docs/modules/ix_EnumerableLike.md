[Reactive-JS](../README.md) / ix/EnumerableLike

# Module: ix/EnumerableLike

## Table of contents

### Interfaces

- [EnumerableLike](../interfaces/ix_EnumerableLike.EnumerableLike.md)
- [FromEnumerable](../interfaces/ix_EnumerableLike.FromEnumerable.md)
- [ToEnumerable](../interfaces/ix_EnumerableLike.ToEnumerable.md)

### Variables

- [TContainerOf](ix_EnumerableLike.md#tcontainerof)
- [fromArrayT](ix_EnumerableLike.md#fromarrayt)
- [fromEnumerableT](ix_EnumerableLike.md#fromenumerablet)
- [keepT](ix_EnumerableLike.md#keept)
- [mapT](ix_EnumerableLike.md#mapt)
- [pairwiseT](ix_EnumerableLike.md#pairwiset)
- [scanT](ix_EnumerableLike.md#scant)
- [skipFirstT](ix_EnumerableLike.md#skipfirstt)
- [takeFirstT](ix_EnumerableLike.md#takefirstt)
- [takeWhileT](ix_EnumerableLike.md#takewhilet)
- [throwIfEmptyT](ix_EnumerableLike.md#throwifemptyt)
- [toEnumerableT](ix_EnumerableLike.md#toenumerablet)

### Functions

- [distinctUntilChanged](ix_EnumerableLike.md#distinctuntilchanged)
- [fromArray](ix_EnumerableLike.md#fromarray)
- [fromEnumerable](ix_EnumerableLike.md#fromenumerable)
- [keep](ix_EnumerableLike.md#keep)
- [map](ix_EnumerableLike.md#map)
- [onNotify](ix_EnumerableLike.md#onnotify)
- [pairwise](ix_EnumerableLike.md#pairwise)
- [scan](ix_EnumerableLike.md#scan)
- [skipFirst](ix_EnumerableLike.md#skipfirst)
- [takeFirst](ix_EnumerableLike.md#takefirst)
- [takeWhile](ix_EnumerableLike.md#takewhile)
- [throwIfEmpty](ix_EnumerableLike.md#throwifempty)
- [toEnumerable](ix_EnumerableLike.md#toenumerable)

## Variables

### TContainerOf

• `Const` **TContainerOf**: [`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)

___

### fromArrayT

• `Const` **fromArrayT**: [`FromArray`](containers_ContainerLike.md#fromarray)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)\>

___

### fromEnumerableT

• `Const` **fromEnumerableT**: [`FromEnumerable`](../interfaces/ix_EnumerableLike.FromEnumerable.md)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)\>

___

### keepT

• `Const` **keepT**: [`Keep`](containers_ContainerLike.md#keep)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)\>

___

### mapT

• `Const` **mapT**: [`Map`](containers_ContainerLike.md#map)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)\>

___

### pairwiseT

• `Const` **pairwiseT**: [`Pairwise`](containers_ContainerLike.md#pairwise)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)\>

___

### scanT

• `Const` **scanT**: [`Scan`](containers_ContainerLike.md#scan)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)\>

___

### skipFirstT

• `Const` **skipFirstT**: [`SkipFirst`](containers_ContainerLike.md#skipfirst)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)\>

___

### takeFirstT

• `Const` **takeFirstT**: [`TakeFirst`](containers_ContainerLike.md#takefirst)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)\>

___

### takeWhileT

• `Const` **takeWhileT**: [`TakeWhile`](containers_ContainerLike.md#takewhile)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`unknown`\>\>

___

### throwIfEmptyT

• `Const` **throwIfEmptyT**: [`ThrowIfEmpty`](containers_StatefulContainerLike.md#throwifempty)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)\>

___

### toEnumerableT

• `Const` **toEnumerableT**: [`ToEnumerable`](../interfaces/ix_EnumerableLike.ToEnumerable.md)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)\>

## Functions

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](util_functions.md#equality)<`T`\> |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### fromArray

▸ **fromArray**<`T`\>(`options?`): [`Function1`](util_functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`FromArrayOptions`](containers_ContainerLike.md#fromarrayoptions)\> |

#### Returns

[`Function1`](util_functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`T`\>\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Identity`](util_functions.md#identity)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Identity`](util_functions.md#identity)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`T`\>\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](util_functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](util_functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### onNotify

▸ **onNotify**<`T`\>(`a`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SideEffect1`](util_functions.md#sideeffect1)<`T`\> |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`unknown`\>, `T`, readonly [[`Option`](util_Option.md#option)<`T`\>, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`unknown`\>, `T`, readonly [[`Option`](util_Option.md#option)<`T`\>, `T`]\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`unknown`\>, `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Reducer`](util_functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](util_functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](util_functions.md#predicate)<`T`\> |
| `options?` | `Object` |
| `options.inclusive?` | `boolean` |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](util_functions.md#factory)<`unknown`\> |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### toEnumerable

▸ **toEnumerable**<`T`\>(): [`Identity`](util_functions.md#identity)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Identity`](util_functions.md#identity)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`T`\>\>
