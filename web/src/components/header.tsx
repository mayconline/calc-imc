import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="flex items-center justify-end">
      <Link
        className="cursor-pointer"
        href="https://play.google.com/store/apps/details?id=com.app.imccalc&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
      >
        <Image
          src="https://play.google.com/intl/en_us/badges/static/images/badges/pt-br_badge_web_generic.png"
          width={169}
          height={65}
          alt="Disponível no Google Play"
          priority
        />
      </Link>
    </header>
  );
}
