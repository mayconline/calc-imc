import { useRef, useState } from 'react';
import ViewShot from 'react-native-view-shot';
import Share from 'react-native-share';

export function useShareScreenshot() {
  const [loading, setLoading] = useState(false);
  const viewRef = useRef<ViewShot>(null);

  const handleCaptureScreenShot = async () => {
    try {
      const imageURI = await viewRef.current?.capture();
      return imageURI;
    } catch (error) {
      console.log(error);
    }
  };

  const handleShareScreenShot = async () => {
    setLoading(true);
    try {
      const imageURI = await handleCaptureScreenShot();
      Share.open({
        title: 'Compartilhar imagem',
        url: imageURI,
        type: 'image/jpeg',
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { ViewShot, viewRef, handleShareScreenShot, loading };
}
