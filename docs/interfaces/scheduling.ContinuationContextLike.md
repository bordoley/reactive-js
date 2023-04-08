[Reactive-JS](../README.md) / [scheduling](../modules/scheduling.md) / ContinuationContextLike

# Interface: ContinuationContextLike

[scheduling](../modules/scheduling.md).ContinuationContextLike

A context object passed by a scheduler to a continuation
when it is run, which can be used by the continuation to
yield control back to the scheduler.

## Table of contents

### Methods

- [[\_\_\_ContinuationContextLike\_yield]](scheduling.ContinuationContextLike.md#[___continuationcontextlike_yield])

## Methods

### [\_\_\_ContinuationContextLike\_yield]

▸ **[___ContinuationContextLike_yield]**(`delay?`): `void`

Yields control back to the scheduler.

If no delay is specified, a scheduler may either allow
the continuation to continue to execute, or it will throw
an internal exception that must not be caught by the continuation
which the scheduler will use to reschedule the continuation for
a future time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `delay?` | `number` | The amount of delay in ms the scheduler should delay before resuming execution of the continuation. |

#### Returns

`void`
