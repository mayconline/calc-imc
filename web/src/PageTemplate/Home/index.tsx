import { IMCForm } from '@/PageTemplate/Home/IMCForm';
import { LinkOMS } from '@/PageTemplate/Home/LinkOMS';
import { Hero } from '@/PageTemplate/Home/Hero';
import { ResultList } from '@/PageTemplate/Home/ResultList';
import { IMCProvider } from '@/context/IMCContext';

const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full gap-6">
      <Hero />
      <LinkOMS />
      <IMCProvider>
        <IMCForm />
        <ResultList />
      </IMCProvider>
    </main>
  );
};

export default HomePage;
