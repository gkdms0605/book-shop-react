import 'styled-components';
import type { Theme } from './src/style/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}