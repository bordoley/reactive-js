[Reactive-JS](../README.md) / ix/EnumeratorLike

# Module: ix/EnumeratorLike

## Table of contents

### Interfaces

- [EnumeratorLike](../interfaces/ix_EnumeratorLike.EnumeratorLike.md)

### Variables

- [EnumeratorLike\_current](ix_EnumeratorLike.md#enumeratorlike_current)
- [EnumeratorLike\_hasCurrent](ix_EnumeratorLike.md#enumeratorlike_hascurrent)

### Functions

- [forEach](ix_EnumeratorLike.md#foreach)
- [getCurrent](ix_EnumeratorLike.md#getcurrent)
- [hasCurrent](ix_EnumeratorLike.md#hascurrent)
- [move](ix_EnumeratorLike.md#move)

## Variables

### EnumeratorLike\_current

• `Const` **EnumeratorLike\_current**: unique `symbol`

___

### EnumeratorLike\_hasCurrent

• `Const` **EnumeratorLike\_hasCurrent**: unique `symbol`

## Functions

### forEach

▸ **forEach**<`T`, `TEnumerator`\>(`f`): [`Function1`](util_functions.md#function1)<`TEnumerator`, `TEnumerator`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TEnumerator` | extends [`EnumeratorLike`](../interfaces/ix_EnumeratorLike.EnumeratorLike.md)<`T`, `TEnumerator`\> = [`EnumeratorLike`](../interfaces/ix_EnumeratorLike.EnumeratorLike.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](util_functions.md#sideeffect1)<`T`\> |

#### Returns

[`Function1`](util_functions.md#function1)<`TEnumerator`, `TEnumerator`\>

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
| `enumerator.[InteractiveSourceLike_move]` | () => `void` |

#### Returns

`boolean`
