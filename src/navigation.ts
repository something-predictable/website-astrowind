import { SITE } from '#astrowind:config';
import { getAsset } from '@riddance/astrowind/utils/permalinks.ts';

export const headerData = {
  links: [],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="/favicon.svg" alt="logo" loading="lazy"></img>
    Copyright © 2025 ${SITE.name} · All rights reserved.
  `,
};
