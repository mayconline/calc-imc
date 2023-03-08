import Image from 'next/image';

export function Hero() {
  return (
    <figure className="flex flex-col items-center gap-6">
      <Image
        src="/logo.svg"
        width={300}
        height={83}
        alt="Logo da Égide Saúde"
        priority
      />
      <h1 className="font-bold text-2xl">Calculadora de IMC</h1>
    </figure>
  );
}
