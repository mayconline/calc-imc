import { Linking } from 'react-native';

export const getTerms = () =>
  Linking.openURL(
    'https://res.cloudinary.com/apinodeteste/image/upload/v1677277470/IMCCalc/TermsOfUseAndPrivacyPolicies_vvzuhr.pdf',
  );

export const getEmail = () =>
  Linking.openURL('mailto:suporteimccalc@gmail.com');
