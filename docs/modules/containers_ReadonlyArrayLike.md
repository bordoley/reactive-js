[Reactive-JS](../README.md) / containers/ReadonlyArrayLike

# Module: containers/ReadonlyArrayLike

## Table of contents

### Variables

- [emptyT](containers_ReadonlyArrayLike.md#emptyt)
- [keepT](containers_ReadonlyArrayLike.md#keept)
- [mapT](containers_ReadonlyArrayLike.md#mapt)
- [toReadonlyArrayT](containers_ReadonlyArrayLike.md#toreadonlyarrayt)

### Functions

- [empty](containers_ReadonlyArrayLike.md#empty)
- [every](containers_ReadonlyArrayLike.md#every)
- [forEach](containers_ReadonlyArrayLike.md#foreach)
- [keep](containers_ReadonlyArrayLike.md#keep)
- [map](containers_ReadonlyArrayLike.md#map)
- [toReadonlyArray](containers_ReadonlyArrayLike.md#toreadonlyarray)

## Variables

### emptyT

• `Const` **emptyT**: [`Empty`](containers.md#empty)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)\>

___

### keepT

• `Const` **keepT**: [`Keep`](containers.md#keep)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)\>

___

### mapT

• `Const` **mapT**: [`Map`](containers.md#map)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)\>

___

### toReadonlyArrayT

• `Const` **toReadonlyArrayT**: [`ToReadonlyArray`](containers.md#toreadonlyarray)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)\>

## Functions

### empty

▸ **empty**<`T`\>(): readonly `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

readonly `T`[]

___

### every

▸ **every**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<readonly `T`[], `boolean`\>

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

### forEach

▸ **forEach**<`T`\>(`f`): [`Function1`](functions.md#function1)<readonly `T`[], readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], readonly `T`[]\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`unknown`\>, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`): [`ContainerOperator`](containers.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`unknown`\>, `TA`, `TB`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`unknown`\>, `TA`, `TB`\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>
