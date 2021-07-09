import * as React from 'react';
import { useSafeState } from './useSafeState';

export function useReactive<T extends object>(state: T): T {
  const [, setState] = useSafeState({});

  const update = () => setState({});

  const handler = {
    set: (obj: any, prop: string | symbol, value: any) => {
      if (obj[prop] != value) {
        obj[prop] = value;
        setTimeout(update, 0);
      }

      return true;
    }
  };

  const proxyTargetRef = React.useRef(new Proxy(state, handler));

  return proxyTargetRef.current;
}
