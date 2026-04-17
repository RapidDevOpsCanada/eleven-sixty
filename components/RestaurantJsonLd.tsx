const BASE_URL = 'https://elevensixty.ca';

const commonHours = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Sunday'],
    opens: '11:30',
    closes: '21:00'
  },
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Friday', 'Saturday'],
    opens: '11:30',
    closes: '22:00'
  }
];

const data = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Restaurant',
      '@id': `${BASE_URL}/#london`,
      name: 'Eleven Sixty Bar & Grill — London',
      url: BASE_URL,
      image: `${BASE_URL}/opengraph-image`,
      telephone: '+1-519-681-2669',
      email: 'info@elevensixty.ca',
      priceRange: '$$',
      servesCuisine: ['American', 'Canadian', 'Bar & Grill'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1160 Wellington Road',
        addressLocality: 'London',
        addressRegion: 'ON',
        postalCode: 'N6E 1M3',
        addressCountry: 'CA'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 42.9415,
        longitude: -81.2289
      },
      openingHoursSpecification: commonHours,
      acceptsReservations: true,
      sameAs: [
        'https://www.facebook.com/elevensixtylondon',
        'https://twitter.com/sixty_eleven',
        'https://www.instagram.com/elevensixtybargrill/',
        'https://www.tripadvisor.ca/Restaurant_Review-g154995-d21053259-Reviews-Eleven_Sixty_Bar_Grill-London_Ontario.html'
      ]
    },
    {
      '@type': 'Restaurant',
      '@id': `${BASE_URL}/#st-thomas`,
      name: 'Eleven Sixty Bar & Grill — St Thomas',
      url: BASE_URL,
      image: `${BASE_URL}/opengraph-image`,
      telephone: '+1-519-631-8282',
      email: 'info@elevensixty.ca',
      priceRange: '$$',
      servesCuisine: ['American', 'Canadian', 'Bar & Grill'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1093 Talbot St',
        addressLocality: 'St Thomas',
        addressRegion: 'ON',
        postalCode: 'N5P 1G4',
        addressCountry: 'CA'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 42.776,
        longitude: -81.178
      },
      openingHoursSpecification: commonHours,
      acceptsReservations: true
    }
  ]
};

export default function RestaurantJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
