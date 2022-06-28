[Reactive-JS](../README.md) / enumerator

# Module: enumerator

## Table of contents

### Classes

- [AbstractDelegatingEnumerator](../classes/enumerator.AbstractDelegatingEnumerator.md)
- [AbstractEnumerator](../classes/enumerator.AbstractEnumerator.md)
- [Enumerator](../classes/enumerator.Enumerator.md)

### Functions

- [current](enumerator.md#current)
- [forEach](enumerator.md#foreach)
- [hasCurrent](enumerator.md#hascurrent)
- [move](enumerator.md#move)
- [reset](enumerator.md#reset)
- [zip](enumerator.md#zip)

## Functions

### current

▸ **current**<`T`\>(`enumerator`): `T`

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

___

### reset

▸ **reset**<`T`\>(`enumerator`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enumerator` | [`AbstractEnumerator`](../classes/enumerator.AbstractEnumerator.md)<`T`\> |

#### Returns

`void`

___

### zip

▸ **zip**<`T`\>(`enumerators`): [`Enumerator`](../classes/enumerator.Enumerator.md)<readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enumerators` | readonly [`Enumerator`](../classes/enumerator.Enumerator.md)<`T`\>[] |

#### Returns

[`Enumerator`](../classes/enumerator.Enumerator.md)<readonly `T`[]\>
