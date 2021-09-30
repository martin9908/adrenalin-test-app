/**
 *
 * @format
 * @flow
 *
 */

export type PropsType = {
  selected: string;
  setSelected: (selected: string) => void;
  rightButtonHandler?: () => void;
  navigateToDetails: () => void;
};
