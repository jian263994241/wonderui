import * as React from 'react';
import ActivityIndicator from '../ActivityIndicator';
import Backdrop from '../Backdrop';
import Column from './PickerColumn';
import styled from '../styles/styled';
import usePicker from './usePicker';
import useThemeProps from '../styles/useThemeProps';
import { alpha } from '../styles/colorManipulator';
import {
  COMPONENT_NAME,
  pickerViewCssVars,
  usePickerViewCssVars
} from './PickerViewClasses';
import {
  composeClasses,
  css,
  generateUtilityClasses,
  unitToPx
} from '@wonder-ui/utils';
import { PickerViewProps } from './PickerViewTypes';
import { useCreation, useEventCallback } from '@wonder-ui/hooks';

export const pickerClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'drawser',
  'columns',
  'mask',
  'indicator',
  'cloumnRoot',
  'cloumnInner',
  'cloumnItem',
  'loading',
  'readOnly'
]);

const useClasses = (styleProps: PickerViewProps) => {
  const { classes, readOnly } = styleProps;
  const slots = {
    root: ['root', readOnly && 'readOnly'],
    columns: ['columns'],
    cloumn: ['cloumn'],
    content: ['content'],
    item: ['item'],
    mask: ['mask'],
    indicator: ['indicator'],
    loading: ['loading']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const PickerRoot = styled('div', { name: COMPONENT_NAME, slot: 'Root' })({
  position: 'relative',
  userSelect: 'none',
  backgroundColor: pickerViewCssVars.value('bgColor'),
  fontSize: pickerViewCssVars.value('fontSize')
});

const PickerColumns = styled('div', { name: COMPONENT_NAME, slot: 'Columns' })({
  display: 'flex',
  position: 'relative',
  height: pickerViewCssVars.value('height')
});

const PickerMask = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Mask'
})(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
  width: '100%',
  height: '100%',
  backgroundImage:
    theme.palette.mode == 'light'
      ? 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), linear-gradient(to top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6))'
      : 'transparent',
  backgroundPosition: 'top, bottom',
  backgroundRepeat: 'no-repeat',
  backgroundSize: `100% calc((${pickerViewCssVars.value(
    'height'
  )} - ${pickerViewCssVars.value('itemHeight')}) / 2)`,
  transform: 'translateZ(0)',
  pointerEvents: 'none'
}));

const PickerIndicator = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Indicator'
})({
  pointerEvents: 'none',
  boxSizing: 'border-box',
  position: 'absolute',
  left: 0,
  right: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 2,
  borderTop: `thin solid ${pickerViewCssVars.value('indicatorBorderColor')}`,
  borderBottom: `thin solid ${pickerViewCssVars.value('indicatorBorderColor')}`,
  height: pickerViewCssVars.value('itemHeight', '44px')
});

const PickerViewLoading = styled(Backdrop, {
  name: COMPONENT_NAME,
  slot: 'Loading'
})(({ theme }) => ({
  position: 'absolute',
  zIndex: 101,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: alpha(theme.palette.background.paper, 0.6)
}));

const PickerView = React.forwardRef<HTMLDivElement, PickerViewProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      actionRef,
      className,
      style,
      fieldNames,
      itemHeight: itemHeightProp = 44,
      columns,
      readOnly = false,
      loading = false,
      visibleItemCount = 6,
      onChange,
      defaultValue = [],
      value,
      picker: pickerProps
    } = props;

    const picker: ReturnType<typeof usePicker> =
      pickerProps || usePicker({ fieldNames, value, defaultValue, columns });

    React.useImperativeHandle(actionRef, () => picker, []);

    const styleProps = {
      ...props,
      readOnly,
      loading
    };

    const handleChange = useEventCallback((columnIndex: number, index: any) => {
      picker.setColumnIndex(columnIndex, index);
      onChange?.(picker.getValues(), picker);
    });

    const classes = useClasses(styleProps);

    usePickerViewCssVars();

    const styles = useCreation(() => {
      const itemHeight = unitToPx(itemHeightProp);
      const wrapHeight = itemHeight * +visibleItemCount;

      return { itemHeight, wrapHeight };
    }, [itemHeightProp, visibleItemCount]);

    return (
      <PickerRoot
        ref={ref}
        className={css(classes.root, className)}
        style={{
          ...style,
          ...pickerViewCssVars.style({
            itemHeight: styles.itemHeight,
            height: styles.wrapHeight
          })
        }}
      >
        <PickerViewLoading visible={loading} className={classes.loading}>
          <ActivityIndicator color="primary" iconSize="medium" />
        </PickerViewLoading>
        <PickerColumns className={classes.columns}>
          {picker.columns.length > 0 && (
            <React.Fragment>
              <PickerMask className={classes.mask} />
              <PickerIndicator className={classes.indicator} />
            </React.Fragment>
          )}

          {picker.columns.map((item, columnIndex) => {
            return (
              <Column
                key={columnIndex}
                fieldNames={picker.fieldNames}
                readOnly={readOnly}
                itemHeight={styles.itemHeight}
                options={item[picker.fieldNames.values]}
                defaultIndex={item.defaultIndex}
                index={picker.indexes[columnIndex]}
                visibleItemCount={visibleItemCount}
                onIndexChange={(index) => handleChange(columnIndex, index)}
                onRenderLabel={item.onRenderLabel}
                classes={{
                  root: css(classes.cloumn, item.className),
                  content: classes.content,
                  item: classes.item
                }}
              />
            );
          })}
        </PickerColumns>
      </PickerRoot>
    );
  }
);

export default PickerView;
