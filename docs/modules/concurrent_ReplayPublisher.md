[Reactive-JS](../README.md) / concurrent/ReplayPublisher

# Module: concurrent/ReplayPublisher

## Table of contents

### Module Interfaces

- [ReplayPublisherrModule](../interfaces/concurrent_ReplayPublisher.ReplayPublisherrModule.md)

### Type Aliases

- [Signature](concurrent_ReplayPublisher.md#signature)

### Functions

- [create](concurrent_ReplayPublisher.md#create)
- [createRefCounted](concurrent_ReplayPublisher.md#createrefcounted)

## Type Aliases

### Signature

Ƭ **Signature**: [`ReplayPublisherrModule`](../interfaces/concurrent_ReplayPublisher.ReplayPublisherrModule.md)

## Functions

### create

▸ **create**<`T`\>(`options?`): [`ReplayPublisherLike`](../interfaces/concurrent.ReplayPublisherLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`ReplayPublisherLike`](../interfaces/concurrent.ReplayPublisherLike.md)<`T`\>

___

### createRefCounted

▸ **createRefCounted**<`T`\>(`options?`): [`ReplayPublisherLike`](../interfaces/concurrent.ReplayPublisherLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`ReplayPublisherLike`](../interfaces/concurrent.ReplayPublisherLike.md)<`T`\>
