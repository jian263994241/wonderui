import '@testing-library/jest-dom';
import * as React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { withStyles } from '../src';

type Props = {
  options: string;
  classes?: {
    root?: string;
  };
};

describe('withStyles', () => {
  it('default', () => {
    const Example = withStyles<any, Props, keyof Props['classes']>({
      root: {
        color: 'red'
      }
    })(function(props) {
      const { classes, options } = props;

      return <div className={classes.root}>Example</div>;
    });

    const renderer = ReactTestRenderer.create(<Example options="" />);

    console.log(renderer.toJSON());
  });
});
