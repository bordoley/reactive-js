[Reactive-JS](../README.md) / [streamable](../modules/streamable.md) / StreamableLike

# Interface: StreamableLike<TReq, T\>

## Type parameters

Name |
------ |
`TReq` |
`T` |

## Hierarchy

* **StreamableLike**

  ↳ [*AsyncEnumerableLike*](asyncenumerable.asyncenumerablelike.md)

  ↳ [*FlowableLike*](flowable.flowablelike.md)

  ↳ [*IOSinkLike*](io.iosinklike.md)

  ↳ [*StateStoreLike*](statestore.statestorelike.md)

## Index

### Methods

* [stream](streamable.streamablelike.md#stream)

## Methods

### stream

▸ **stream**(`scheduler`: [*SchedulerLike*](scheduler.schedulerlike.md), `options?`: { `replay?`: *undefined* \| *number*  }): [*StreamLike*](observable.streamlike.md)<TReq, T\>

#### Parameters:

Name | Type |
------ | ------ |
`scheduler` | [*SchedulerLike*](scheduler.schedulerlike.md) |
`options?` | { `replay?`: *undefined* \| *number*  } |

**Returns:** [*StreamLike*](observable.streamlike.md)<TReq, T\>
