/**
 *
 * @format
 * @flow
 *
 */

type NavigationSubpath = {
  screen: string;
  params?: Record<string, unknown>;
};
export type PropsType = {
  navigation: {
    goBack: (path?: string) => void;
    navigate: (path: string, subpath?: NavigationSubpath) => void;
  };
  route?: Record<string, unknown>;
};
