import { create } from './create';
import { observe, Observable, ObservableLike } from '@rx-min/rx-core';
import { DisposableLike } from '@rx-min/rx-disposables';

export interface ObservableResource<T> extends ObservableLike<T>, DisposableLike{}

export const use = <T>(factory: () => ObservableResource<T>) => create(
  subscriber => {
    const resource = factory();

    subscriber.add(
      Observable.connect(
        Observable.lift(
          resource,
          observe(subscriber),
        ),
      ),
    ).add(resource);
  },
);