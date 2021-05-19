import { generateUtilityClass } from './generateUtilityClasses';
/**
 * composeClasses('MenuList', {root: ['root']}, { root: 'my-root'})
 */
export default function composeClasses<ClassKey extends string>(
  componentName: string,
  slots: Record<ClassKey, ReadonlyArray<string | false | undefined | null>>,
  classes?: Record<string, string>
): Record<ClassKey, string> {
  const output: Record<ClassKey, string> = {} as any;

  const getUtilityClass = (slot: string) =>
    generateUtilityClass(componentName, slot);

  Object.keys(slots).forEach(
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (slot: ClassKey) => {
      output[slot] = slots[slot]
        .reduce((acc, key) => {
          if (key) {
            if (classes && classes[key]) {
              acc.push(classes[key]);
            }
            acc.push(getUtilityClass(key));
          }
          return acc;
        }, [] as string[])
        .join(' ');
    }
  );

  return output;
}
