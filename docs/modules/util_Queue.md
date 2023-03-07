[Reactive-JS](../README.md) / util/Queue

# Module: util/Queue

## Table of contents

### Functions

- [push](util_Queue.md#push)
- [pushTo](util_Queue.md#pushto)

## Functions

### push

▸ **push**<`T`, `TDispatcher`\>(`v`): [`Updater`](functions.md#updater)<`TDispatcher`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TDispatcher` | extends [`QueueLike`](../interfaces/util.QueueLike.md)<`T`, `TDispatcher`\> |

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
| `queue` | [`QueueLike`](../interfaces/util.QueueLike.md)<`T`\> |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<`T`\>
