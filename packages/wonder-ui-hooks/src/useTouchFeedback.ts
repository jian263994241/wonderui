import * as React from 'react';
import addEventListener from 'dom-helpers/addEventListener';
import removeEventListener from 'dom-helpers/removeEventListener';
import addClass from 'dom-helpers/addClass';
import removeClass from 'dom-helpers/removeClass';

export interface TouchFeedbackOptions {
  disabled?: boolean;
  activeClassName?: string;
}

export function useTouchFeedback<T extends HTMLElement>(
  options: TouchFeedbackOptions = {}
) {
  const { disabled, activeClassName = 'active' } = options;

  const nodeRef = React.useRef<T>(null);

  const events = <const>[
    'touchstart',
    'touchmove',
    'touchend',
    'touchcancel',
    'mousedown',
    'mouseup',
    'mouseleave'
  ];

  React.useEffect(() => {
    const node = nodeRef.current;

    if (node && !disabled) {
      const activeTrue = () => {
        addClass(node, activeClassName);
      };

      const activeFalse = () => {
        removeClass(node, activeClassName);
      };
      events.forEach((eventName: typeof events[number]) => {
        if (eventName === 'touchstart' || eventName === 'mousedown') {
          addEventListener(node, eventName, activeTrue);
        } else {
          addEventListener(node, eventName, activeFalse);
        }
      });

      return () => {
        events.forEach((eventName: typeof events[number]) => {
          if (eventName === 'touchstart' || eventName === 'mousedown') {
            removeEventListener(node, eventName, activeTrue);
          } else {
            removeEventListener(node, eventName, activeFalse);
          }
        });
      };
    }
  }, [nodeRef, disabled]);

  return nodeRef;
}
