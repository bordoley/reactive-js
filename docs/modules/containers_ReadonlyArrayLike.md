[Reactive-JS](../README.md) / containers/ReadonlyArrayLike

# Module: containers/ReadonlyArrayLike

## Table of contents

### Interfaces

- [ReadonlyArrayLike](../interfaces/containers_ReadonlyArrayLike.ReadonlyArrayLike.md)

### Variables

- [keepT](containers_ReadonlyArrayLike.md#keept)
- [mapT](containers_ReadonlyArrayLike.md#mapt)

### Functions

- [empty](containers_ReadonlyArrayLike.md#empty)
- [every](containers_ReadonlyArrayLike.md#every)
- [forEach](containers_ReadonlyArrayLike.md#foreach)
- [keep](containers_ReadonlyArrayLike.md#keep)
- [map](containers_ReadonlyArrayLike.md#map)

## Variables

### keepT

• `Const` **keepT**: [`Keep`](containers_ContainerLike.md#keep)<[`ReadonlyArrayLike`](../interfaces/containers_ReadonlyArrayLike.ReadonlyArrayLike.md)\>

___

### mapT

• `Const` **mapT**: [`Map`](containers_ContainerLike.md#map)<[`ReadonlyArrayLike`](../interfaces/containers_ReadonlyArrayLike.ReadonlyArrayLike.md)\>

## Functions

### empty

▸ **empty**<`T`\>(): [`ReadonlyArrayLike`](../interfaces/containers_ReadonlyArrayLike.ReadonlyArrayLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ReadonlyArrayLike`](../interfaces/containers_ReadonlyArrayLike.ReadonlyArrayLike.md)<`T`\>

___

### every

▸ **every**<`T`\>(`predicate`): [`Function1`](util_functions.md#function1)<readonly `T`[], `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](util_functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](util_functions.md#function1)<readonly `T`[], `boolean`\>

___

### forEach

▸ **forEach**<`T`\>(`f`): [`Function1`](util_functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers_ReadonlyArrayLike.ReadonlyArrayLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers_ReadonlyArrayLike.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](util_functions.md#sideeffect1)<`T`\> |

#### Returns

[`Function1`](util_functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers_ReadonlyArrayLike.ReadonlyArrayLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers_ReadonlyArrayLike.ReadonlyArrayLike.md)<`T`\>\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers_ReadonlyArrayLike.ReadonlyArrayLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](util_functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers_ReadonlyArrayLike.ReadonlyArrayLike.md)<`unknown`\>, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers_ReadonlyArrayLike.ReadonlyArrayLike.md)<`unknown`\>, `TA`, `TB`\>

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

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers_ReadonlyArrayLike.ReadonlyArrayLike.md)<`unknown`\>, `TA`, `TB`\>
