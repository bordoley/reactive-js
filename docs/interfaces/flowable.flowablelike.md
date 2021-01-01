[Reactive-JS](../README.md) / [flowable](../modules/flowable.md) / FlowableLike

# Interface: FlowableLike<T\>

## Type parameters

Name |
------ |
`T` |

## Hierarchy

* [*StreamableLike*](streamable.streamablelike.md)<[*FlowMode*](../enums/flowable.flowmode.md), T\>

  ↳ **FlowableLike**

  ↳↳ [*IOSourceLike*](io.iosourcelike.md)

## Index

### Methods

* [stream](flowable.flowablelike.md#stream)

## Methods

### stream

▸ **stream**(`scheduler`: [*SchedulerLike*](scheduler.schedulerlike.md), `options?`: { `replay?`: *undefined* \| *number*  }): [*StreamLike*](observable.streamlike.md)<[*FlowMode*](../enums/flowable.flowmode.md), T\>

#### Parameters:

Name | Type |
------ | ------ |
`scheduler` | [*SchedulerLike*](scheduler.schedulerlike.md) |
`options?` | { `replay?`: *undefined* \| *number*  } |

**Returns:** [*StreamLike*](observable.streamlike.md)<[*FlowMode*](../enums/flowable.flowmode.md), T\>

Inherited from: [StreamableLike](streamable.streamablelike.md)
