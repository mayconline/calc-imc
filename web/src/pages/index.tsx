import Head from 'next/head';
import { Header } from '../components/header';
import { Hero } from '../components/hero';
import { LinkOMS } from '../components/linkOMS';
import { IMCForm } from '../components/IMCForm';
import { ResultList } from '../components/resultList';
import { Footer } from '../components/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Calculadora de IMC</title>
        <meta name="theme-color" content="#111827" />
        <meta name="description" content="IMC Calc - Calculadora de IMC" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="manifest.json" />
      </Head>
      <div className="min-h-screen p-4 flex flex-col bg-gray-900 text-gray-100">
        <Header />

        <main className="flex flex-col items-center justify-center w-full gap-6">
          <Hero />
          <LinkOMS />
          <IMCForm />
          <ResultList />
        </main>

        <Footer />
      </div>
    </>
  );
}
