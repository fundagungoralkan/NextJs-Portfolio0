import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Özel webpack konfigürasyonuna gerek yok!
};

export default withNextIntl(nextConfig);
