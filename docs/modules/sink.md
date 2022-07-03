[Reactive-JS](../README.md) / sink

# Module: sink

## Table of contents

### Interfaces

- [SinkLike](../interfaces/sink.SinkLike.md)

### Functions

- [assertState](sink.md#assertstate)
- [notify](sink.md#notify)
- [notifySink](sink.md#notifysink)

## Functions

### assertState

▸ **assertState**(`sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | [`SinkLike`](../interfaces/sink.SinkLike.md)<`unknown`\> |

#### Returns

`void`

___

### notify

▸ **notify**<`TSink`, `T`\>(`v`): [`Function1`](functions.md#function1)<`TSink`, `TSink`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSink` | extends [`SinkLike`](../interfaces/sink.SinkLike.md)<`T`, `TSink`\> |
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
| `TSink` | extends [`SinkLike`](../interfaces/sink.SinkLike.md)<`T`, `TSink`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | `TSink` |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<`T`\>
