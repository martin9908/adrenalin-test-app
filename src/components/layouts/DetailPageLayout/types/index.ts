/**
 *
 * @format
 * @flow
 *
 */

type IconType = {
  id: string;
  name: string;
  size: number;
  color: string;
};

type ImageType = {
  id: string;
  source: (location: string) => void;
};

export type DataType = {
  title: string;
  subtitle: string;
  content: string;
  iconData: Array<IconType>;
  imageData: Array<ImageType>;
};

export type PropsType = {
  onPressBack: (route: string) => void;
  data: DataType;
};
