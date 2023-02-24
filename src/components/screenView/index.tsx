import {PropsWithChildren} from 'react';
import {SafeAreaView, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

const ScreenView = ({children}: PropsWithChildren) => (
  <KeyboardAwareScrollView
    resetScrollToCoords={{x: 0, y: 0}}
    showsVerticalScrollIndicator={false}
    scrollEnabled={true}>
    <SafeAreaView>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  </KeyboardAwareScrollView>
);

export default ScreenView;
