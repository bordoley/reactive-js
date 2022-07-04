[Reactive-JS](../README.md) / reactive

# Module: reactive

## Table of contents

### Interfaces

- [CreateReactiveContainer](../interfaces/reactive.CreateReactiveContainer.md)
- [ReactiveContainerLike](../interfaces/reactive.ReactiveContainerLike.md)

### Functions

- [sinkInto](reactive.md#sinkinto)
- [sourceFrom](reactive.md#sourcefrom)

## Functions

### sinkInto

▸ **sinkInto**<`C`, `T`, `TSink`\>(`sink`): [`Function1`](functions.md#function1)<`C`, `C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ReactiveContainerLike`](../interfaces/reactive.ReactiveContainerLike.md)<`C`\> |
| `T` | `T` |
| `TSink` | extends [`SinkLike`](../interfaces/sink.SinkLike.md)<`unknown`, `TSink`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | `TSink` |

#### Returns

[`Function1`](functions.md#function1)<`C`, `C`\>

___

### sourceFrom

▸ **sourceFrom**<`C`, `T`, `TSink`\>(`source`): [`Function1`](functions.md#function1)<`TSink`, `TSink`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ReactiveContainerLike`](../interfaces/reactive.ReactiveContainerLike.md)<`C`\> |
| `T` | `T` |
| `TSink` | extends [`SinkLike`](../interfaces/sink.SinkLike.md)<`unknown`, `TSink`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `C` |

#### Returns

[`Function1`](functions.md#function1)<`TSink`, `TSink`\>
