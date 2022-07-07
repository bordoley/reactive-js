[Reactive-JS](../README.md) / reactiveSink

# Module: reactiveSink

## Table of contents

### Interfaces

- [ReactiveSinkLike](../interfaces/reactiveSink.ReactiveSinkLike.md)

### Functions

- [notify](reactiveSink.md#notify)
- [notifySink](reactiveSink.md#notifysink)

## Functions

### notify

▸ **notify**<`T`, `TSink`\>(`v`): [`Function1`](functions.md#function1)<`TSink`, `TSink`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TSink` | extends [`ReactiveSinkLike`](../interfaces/reactiveSink.ReactiveSinkLike.md)<`T`, `TSink`\> = [`ReactiveSinkLike`](../interfaces/reactiveSink.ReactiveSinkLike.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

#### Returns

[`Function1`](functions.md#function1)<`TSink`, `TSink`\>

___

### notifySink

▸ **notifySink**<`T`, `TSink`\>(`sink`): [`SideEffect1`](functions.md#sideeffect1)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TSink` | extends [`ReactiveSinkLike`](../interfaces/reactiveSink.ReactiveSinkLike.md)<`T`, `TSink`\> = [`ReactiveSinkLike`](../interfaces/reactiveSink.ReactiveSinkLike.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | `TSink` |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<`T`\>
