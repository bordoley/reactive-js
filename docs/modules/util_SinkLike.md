[Reactive-JS](../README.md) / util/SinkLike

# Module: util/SinkLike

## Table of contents

### Functions

- [notify](util_SinkLike.md#notify)
- [notifySink](util_SinkLike.md#notifysink)

## Functions

### notify

▸ **notify**<`TSink`, `T`\>(`v`): [`Function1`](functions.md#function1)<`TSink`, `TSink`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSink` | extends [`SinkLike`](../interfaces/util.SinkLike.md)<`T`, `TSink`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

#### Returns

[`Function1`](functions.md#function1)<`TSink`, `TSink`\>

___

### notifySink

▸ **notifySink**<`TSink`, `T`\>(`sink`): [`SideEffect1`](functions.md#sideeffect1)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSink` | extends [`SinkLike`](../interfaces/util.SinkLike.md)<`T`, `TSink`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | `TSink` |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<`T`\>
