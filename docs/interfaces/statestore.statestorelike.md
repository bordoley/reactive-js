[Reactive-JS](../README.md) / [stateStore](../modules/statestore.md) / StateStoreLike

# Interface: StateStoreLike<T\>

## Type parameters

Name |
------ |
`T` |

## Hierarchy

* [*StreamableLike*](streamable.streamablelike.md)<[*Updater*](../modules/functions.md#updater)<T\>, T\>

  ↳ **StateStoreLike**

## Index

### Methods

* [stream](statestore.statestorelike.md#stream)

## Methods

### stream

▸ **stream**(`scheduler`: [*SchedulerLike*](scheduler.schedulerlike.md), `options?`: { `replay?`: *undefined* \| *number*  }): [*StreamLike*](observable.streamlike.md)<[*Updater*](../modules/functions.md#updater)<T\>, T\>

#### Parameters:

Name | Type |
------ | ------ |
`scheduler` | [*SchedulerLike*](scheduler.schedulerlike.md) |
`options?` | { `replay?`: *undefined* \| *number*  } |

**Returns:** [*StreamLike*](observable.streamlike.md)<[*Updater*](../modules/functions.md#updater)<T\>, T\>

Inherited from: [StreamableLike](streamable.streamablelike.md)
