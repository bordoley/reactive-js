[Reactive-JS](../README.md) / util/Queueable

# Module: util/Queueable

## Table of contents

### Functions

- [count](util_Queueable.md#count)
- [push](util_Queueable.md#push)
- [pushTo](util_Queueable.md#pushto)

## Functions

### count

▸ **count**<`T`\>(`queue`): `number`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](../interfaces/util.QueueableLike.md)<`T`\> |

#### Returns

`number`

___

### push

▸ **push**<`T`, `TDispatcher`\>(`v`): [`Updater`](functions.md#updater)<`TDispatcher`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TDispatcher` | extends [`QueueableLike`](../interfaces/util.QueueableLike.md)<`T`, `TDispatcher`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

#### Returns

[`Updater`](functions.md#updater)<`TDispatcher`\>

___

### pushTo

▸ **pushTo**<`T`\>(`queue`): [`SideEffect1`](functions.md#sideeffect1)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](../interfaces/util.QueueableLike.md)<`T`\> |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<`T`\>
