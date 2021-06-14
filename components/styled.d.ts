// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    borderWidth: string;

    colors: {
      main: string;
      primary: string;
      secondary: string;
      danger: string;
    };
  }
}
