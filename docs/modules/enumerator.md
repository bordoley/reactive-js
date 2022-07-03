[Reactive-JS](../README.md) / enumerator

# Module: enumerator

## Table of contents

### Classes

- [Enumerator](../classes/enumerator.Enumerator.md)

### Functions

- [forEach](enumerator.md#foreach)
- [getCurrent](enumerator.md#getcurrent)
- [hasCurrent](enumerator.md#hascurrent)
- [move](enumerator.md#move)

## Functions

### forEach

▸ **forEach**<`T`, `TEnumerator`\>(`f`): [`Function1`](functions.md#function1)<`TEnumerator`, `TEnumerator`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TEnumerator` | extends [`Enumerator`](../classes/enumerator.Enumerator.md)<`T`, `TEnumerator`\> = [`Enumerator`](../classes/enumerator.Enumerator.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEnumerator`, `TEnumerator`\>

___

### getCurrent

▸ **getCurrent**<`T`\>(`enumerator`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enumerator` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`T`\> |

#### Returns

`T`

___

### hasCurrent

▸ **hasCurrent**<`T`\>(`enumerator`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enumerator` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`T`\> |

#### Returns

`boolean`

___

### move

▸ **move**<`T`\>(`enumerator`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enumerator` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`T`\> |

#### Returns

`boolean`
