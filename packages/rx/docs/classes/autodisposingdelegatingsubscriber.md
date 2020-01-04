[@reactive-js/rx](../README.md) › [AutoDisposingDelegatingSubscriber](autodisposingdelegatingsubscriber.md)

# Class: AutoDisposingDelegatingSubscriber <**TA, TB**>

## Type parameters

▪ **TA**

▪ **TB**

## Hierarchy

  ↳ [DelegatingSubscriber](delegatingsubscriber.md)‹TA, TB›

  ↳ **AutoDisposingDelegatingSubscriber**

## Implements

* [SubscriberLike](../interfaces/subscriberlike.md)‹TA›

## Index

### Constructors

* [constructor](autodisposingdelegatingsubscriber.md#constructor)

### Properties

* [delegate](autodisposingdelegatingsubscriber.md#delegate)

## Constructors

###  constructor

\+ **new AutoDisposingDelegatingSubscriber**(`delegate`: [SubscriberLike](../interfaces/subscriberlike.md)‹TB›): *[AutoDisposingDelegatingSubscriber](autodisposingdelegatingsubscriber.md)*

*Overrides [DelegatingSubscriber](delegatingsubscriber.md).[constructor](delegatingsubscriber.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`delegate` | [SubscriberLike](../interfaces/subscriberlike.md)‹TB› |

**Returns:** *[AutoDisposingDelegatingSubscriber](autodisposingdelegatingsubscriber.md)*

## Properties

###  delegate

• **delegate**: *[SubscriberLike](../interfaces/subscriberlike.md)‹TB›*

*Overrides [DelegatingSubscriber](delegatingsubscriber.md).[delegate](delegatingsubscriber.md#delegate)*
