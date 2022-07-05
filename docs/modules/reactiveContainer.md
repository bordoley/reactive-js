[Reactive-JS](../README.md) / reactiveContainer

# Module: reactiveContainer

## Table of contents

### Interfaces

- [CreateReactiveContainer](../interfaces/reactiveContainer.CreateReactiveContainer.md)
- [ReactiveContainerLike](../interfaces/reactiveContainer.ReactiveContainerLike.md)

### Functions

- [sinkInto](reactiveContainer.md#sinkinto)
- [sourceFrom](reactiveContainer.md#sourcefrom)

## Functions

### sinkInto

▸ **sinkInto**<`C`, `T`, `TSink`\>(`sink`): [`Function1`](functions.md#function1)<`C`, `C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ReactiveContainerLike`](../interfaces/reactiveContainer.ReactiveContainerLike.md)<`C`\> |
| `T` | `T` |
| `TSink` | extends [`ReactiveSinkLike`](../interfaces/reactiveSink.ReactiveSinkLike.md)<`unknown`, `TSink`\> |

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
| `C` | extends [`ReactiveContainerLike`](../interfaces/reactiveContainer.ReactiveContainerLike.md)<`C`\> |
| `T` | `T` |
| `TSink` | extends [`ReactiveSinkLike`](../interfaces/reactiveSink.ReactiveSinkLike.md)<`unknown`, `TSink`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `C` |

#### Returns

[`Function1`](functions.md#function1)<`TSink`, `TSink`\>
