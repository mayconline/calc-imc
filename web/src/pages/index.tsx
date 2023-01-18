import Head from 'next/head';
import Image from 'next/image';

import { IMCForm } from '../components/IMCForm';
import { LinkOMS } from '../components/linkOMS';
import { ResultList } from '../components/resultList';

export default function Home() {
  return (
    <>
      <Head>
        <title>Calculadora de IMC</title>
        <meta name="description" content="Calculadora de IMC" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen p-4 flex flex-col bg-gray-900 text-gray-100">
        <header className="flex flex-col items-center gap-6 mb-6">
          <Image
            src="/logo.svg"
            width={300}
            height={83}
            alt="Logo da Égide Saúde"
            priority
          />
          <h1 className="font-bold text-2xl">Calculadora de IMC</h1>
        </header>
        <main className="flex flex-col items-center justify-center w-full gap-10">
          <LinkOMS />
          <IMCForm />
          <ResultList />
        </main>
      </div>
    </>
  );
}
