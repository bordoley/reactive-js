[Reactive-JS](../README.md) / [asyncEnumerable](../modules/asyncenumerable.md) / AsyncEnumerableLike

# Interface: AsyncEnumerableLike<T\>

## Type parameters

Name |
------ |
`T` |

## Hierarchy

* [*StreamableLike*](streamable.streamablelike.md)<*void*, T\>

  ↳ **AsyncEnumerableLike**

## Index

### Methods

* [stream](asyncenumerable.asyncenumerablelike.md#stream)

## Methods

### stream

▸ **stream**(`scheduler`: [*SchedulerLike*](scheduler.schedulerlike.md), `options?`: { `replay?`: *undefined* \| *number*  }): [*StreamLike*](observable.streamlike.md)<*void*, T\>

Inherited from: [StreamableLike](streamable.streamablelike.md)

#### Parameters:

Name | Type |
------ | ------ |
`scheduler` | [*SchedulerLike*](scheduler.schedulerlike.md) |
`options?` | { `replay?`: *undefined* \| *number*  } |

**Returns:** [*StreamLike*](observable.streamlike.md)<*void*, T\>
