[Reactive-JS](../README.md) / [io](../modules/io.md) / IOSourceLike

# Interface: IOSourceLike<T\>

## Type parameters

Name |
------ |
`T` |

## Hierarchy

* [*FlowableLike*](flowable.flowablelike.md)<[*IOEvent*](../modules/io.md#ioevent)<T\>\>

  ↳ **IOSourceLike**

## Index

### Methods

* [stream](io.iosourcelike.md#stream)

## Methods

### stream

▸ **stream**(`scheduler`: [*SchedulerLike*](scheduler.schedulerlike.md), `options?`: { `replay?`: *undefined* \| *number*  }): [*StreamLike*](observable.streamlike.md)<[*FlowMode*](../enums/flowable.flowmode.md), [*IOEvent*](../modules/io.md#ioevent)<T\>\>

#### Parameters:

Name | Type |
------ | ------ |
`scheduler` | [*SchedulerLike*](scheduler.schedulerlike.md) |
`options?` | { `replay?`: *undefined* \| *number*  } |

**Returns:** [*StreamLike*](observable.streamlike.md)<[*FlowMode*](../enums/flowable.flowmode.md), [*IOEvent*](../modules/io.md#ioevent)<T\>\>

Inherited from: [FlowableLike](flowable.flowablelike.md)
