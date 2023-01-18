import Link from 'next/link';

export function LinkOMS() {
  return (
    <Link
      href={
        'https://www.who.int/europe/news-room/fact-sheets/item/a-healthy-lifestyle---who-recommendations'
      }
      rel="noopener noreferrer"
      target="_blank"
    >
      <span className="text-sm font-normal italic underline">
        fonte: OMS ( Organização Mundial da Saúde )
      </span>
    </Link>
  );
}
