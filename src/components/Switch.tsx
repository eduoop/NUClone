import { colors } from '@/theme/colors';
import { Switch as NativeSwitch, useColorScheme } from 'react-native';


function Switch({
  ...props
}: React.ComponentPropsWithoutRef<typeof NativeSwitch>) {

  return (
    <NativeSwitch
    trackColor={{
      true: colors.purple[700],
      false: colors.gray[600],
    }}
      thumbColor={colors.white}
      {...props}
    />
  );
}

export { Switch };
