[Reactive-JS](../README.md) / rx/Sink

# Module: rx/Sink

## Table of contents

### Functions

- [notify](rx_Sink.md#notify)
- [notifySink](rx_Sink.md#notifysink)
- [sourceFrom](rx_Sink.md#sourcefrom)

## Functions

### notify

▸ **notify**<`TSink`, `T`\>(`v`): [`Function1`](functions.md#function1)<`TSink`, `TSink`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSink` | extends [`SinkLike`](../interfaces/rx.SinkLike.md)<`T`, `TSink`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

#### Returns

[`Function1`](functions.md#function1)<`TSink`, `TSink`\>

___

### notifySink

▸ **notifySink**<`T`\>(`sink`): [`SideEffect1`](functions.md#sideeffect1)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | [`SinkLike`](../interfaces/rx.SinkLike.md)<`T`\> |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<`T`\>

___

### sourceFrom

▸ **sourceFrom**<`C`, `TSink`, `T`\>(`source`): [`Function1`](functions.md#function1)<`TSink`, `TSink`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ReactiveContainerLike`](../interfaces/rx.ReactiveContainerLike.md)<`TSink`, `C`\> |
| `TSink` | extends [`SinkLike`](../interfaces/rx.SinkLike.md)<`T`, `TSink`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `C` |

#### Returns

[`Function1`](functions.md#function1)<`TSink`, `TSink`\>
