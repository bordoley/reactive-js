[Reactive-JS](../README.md) / concurrent/Subject

# Module: concurrent/Subject

## Table of contents

### Module Interfaces

- [SubjectrModule](../interfaces/concurrent_Subject.SubjectrModule.md)

### Type Aliases

- [Signature](concurrent_Subject.md#signature)

### Functions

- [create](concurrent_Subject.md#create)
- [createRefCounted](concurrent_Subject.md#createrefcounted)

## Type Aliases

### Signature

Ƭ **Signature**: [`SubjectrModule`](../interfaces/concurrent_Subject.SubjectrModule.md)

## Functions

### create

▸ **create**<`T`\>(`options?`): [`SubjectLike`](../interfaces/concurrent.SubjectLike.md)<`T`\>

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

[`SubjectLike`](../interfaces/concurrent.SubjectLike.md)<`T`\>

___

### createRefCounted

▸ **createRefCounted**<`T`\>(`options?`): [`SubjectLike`](../interfaces/concurrent.SubjectLike.md)<`T`\>

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

[`SubjectLike`](../interfaces/concurrent.SubjectLike.md)<`T`\>
