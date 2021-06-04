import useTheme from './useTheme';
import getThemeProps from './getThemeProps';
import { Theme } from './createTheme';
import React from 'react';

type UseThemePropsParams<P> = {
  props: P;
  name: string;
};

export function useThemeProps<P extends object>(
  params: UseThemePropsParams<P>
): P & { theme: Theme } {
  const { props: inputProps, name } = params;
  const props = { ...inputProps };

  const contextTheme = useTheme();

  const newProps = getThemeProps({ theme: contextTheme, name, props });

  const theme = newProps.theme || contextTheme;

  return {
    ...newProps,
    theme
  };
}

export default useThemeProps;
