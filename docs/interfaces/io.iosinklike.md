[Reactive-JS](../README.md) / [io](../modules/io.md) / IOSinkLike

# Interface: IOSinkLike<T\>

## Type parameters

Name |
------ |
`T` |

## Hierarchy

* [*StreamableLike*](streamable.streamablelike.md)<[*IOEvent*](../modules/io.md#ioevent)<T\>, [*FlowMode*](../modules/flowable.md#flowmode)\>

  ↳ **IOSinkLike**

  ↳↳ [*IOSinkAccumulatorLike*](io.iosinkaccumulatorlike.md)

## Index

### Methods

* [stream](io.iosinklike.md#stream)

## Methods

### stream

▸ **stream**(`scheduler`: [*SchedulerLike*](scheduler.schedulerlike.md), `options?`: { `replay?`: *undefined* \| *number*  }): [*StreamLike*](observable.streamlike.md)<[*IOEvent*](../modules/io.md#ioevent)<T\>, [*FlowMode*](../modules/flowable.md#flowmode)\>

Inherited from: [StreamableLike](streamable.streamablelike.md)

#### Parameters:

Name | Type |
------ | ------ |
`scheduler` | [*SchedulerLike*](scheduler.schedulerlike.md) |
`options?` | { `replay?`: *undefined* \| *number*  } |

**Returns:** [*StreamLike*](observable.streamlike.md)<[*IOEvent*](../modules/io.md#ioevent)<T\>, [*FlowMode*](../modules/flowable.md#flowmode)\>
