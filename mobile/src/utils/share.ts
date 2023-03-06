import Share, { ShareOptions } from 'react-native-share';

export const handleShare = async (options: ShareOptions) => {
  return await Share.open(options);
};
