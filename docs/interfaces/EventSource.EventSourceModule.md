[Reactive-JS](../README.md) / [EventSource](../modules/EventSource.md) / EventSourceModule

# Interface: EventSourceModule

[EventSource](../modules/EventSource.md).EventSourceModule

## Hierarchy

- [`ContainerTypeClass`](types.ContainerTypeClass.md)<[`Type`](../modules/EventSource.md#type)\>

- [`MulticastableTypeClass`](types.MulticastableTypeClass.md)<[`Type`](../modules/EventSource.md#type)\>

  ↳ **`EventSourceModule`**

## Table of contents

### Constructor Methods

- [create](EventSource.EventSourceModule.md#create)
- [createPublisher](EventSource.EventSourceModule.md#createpublisher)
- [createRefCountedPublisher](EventSource.EventSourceModule.md#createrefcountedpublisher)

### Other Methods

- [merge](EventSource.EventSourceModule.md#merge)
- [mergeMany](EventSource.EventSourceModule.md#mergemany)

## Constructor Methods

### create

▸ **create**<`T`\>(`setup`): [`EventSourceLike`](types.EventSourceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `setup` | [`SideEffect1`](../modules/functions.md#sideeffect1)<[`EventListenerLike`](types.EventListenerLike.md)<`T`\>\> |

#### Returns

[`EventSourceLike`](types.EventSourceLike.md)<`T`\>

___

### createPublisher

▸ **createPublisher**<`T`\>(): [`EventPublisherLike`](types.EventPublisherLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EventPublisherLike`](types.EventPublisherLike.md)<`T`\>

___

### createRefCountedPublisher

▸ **createRefCountedPublisher**<`T`\>(): [`EventPublisherLike`](types.EventPublisherLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EventPublisherLike`](types.EventPublisherLike.md)<`T`\>

___

## Other Methods

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`EventSourceLike`](types.EventSourceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EventSourceLike`](types.EventSourceLike.md)<`T`\> |
| `snd` | [`EventSourceLike`](types.EventSourceLike.md)<`T`\> |
| `...tail` | readonly [`EventSourceLike`](types.EventSourceLike.md)<`T`\>[] |

#### Returns

[`EventSourceLike`](types.EventSourceLike.md)<`T`\>

___

### mergeMany

▸ **mergeMany**<`T`\>(`eventSources`): [`EventSourceLike`](types.EventSourceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventSources` | readonly [`EventSourceLike`](types.EventSourceLike.md)<`T`\>[] |

#### Returns

[`EventSourceLike`](types.EventSourceLike.md)<`T`\>
