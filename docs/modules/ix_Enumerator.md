[Reactive-JS](../README.md) / ix/Enumerator

# Module: ix/Enumerator

## Table of contents

### Functions

- [forEach](ix_Enumerator.md#foreach)
- [getCurrent](ix_Enumerator.md#getcurrent)
- [hasCurrent](ix_Enumerator.md#hascurrent)
- [move](ix_Enumerator.md#move)

## Functions

### forEach

▸ **forEach**<`T`, `TEnumerator`\>(`f`): [`Function1`](functions.md#function1)<`TEnumerator`, `TEnumerator`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TEnumerator` | extends [`EnumeratorLike`](../interfaces/ix.EnumeratorLike.md)<`T`, `TEnumerator`\> = [`EnumeratorLike`](../interfaces/ix.EnumeratorLike.md)<`T`\> |

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
| `enumerator` | `Object` |
| `enumerator.[EnumeratorLike_current]` | `T` |

#### Returns

`T`

___

### hasCurrent

▸ **hasCurrent**(`enumerator`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enumerator` | `Object` |
| `enumerator.[EnumeratorLike_hasCurrent]` | `boolean` |

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
| `enumerator` | `Object` |
| `enumerator.[EnumeratorLike_current]` | `T` |
| `enumerator.[EnumeratorLike_hasCurrent]` | `boolean` |
| `enumerator.[SourceLike_move]` | () => `void` |

#### Returns

`boolean`
