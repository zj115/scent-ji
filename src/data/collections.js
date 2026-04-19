export const collections = [
  {
    id: 'bestseller',
    slug: 'best-sellers',
    name: 'Best Sellers',
    subtitle: '最受欢迎',
    description: 'Our most beloved pieces — chosen by those who know the value of a quiet, intentional life.',
    longDescription: 'These are the bracelets that have found their way into daily rituals across New Zealand and beyond. Each one chosen for its quality, its scent, and the way it feels on the wrist after a long day.',
    image: '/assets/collections/collection-bestseller.jpg',
    color: '#8B6E55',
  },
  {
    id: 'calm',
    slug: 'calm',
    name: 'Calm Series',
    subtitle: '宁静系列',
    description: 'Pieces designed to quiet the mind. Forest scents, cool stones, and the unhurried pace of still water.',
    longDescription: 'The Calm Series draws from the Chinese tradition of using scent as a tool for mental clarity. Each piece pairs a cooling crystal with a forest or floral blend that grounds and soothes.',
    image: '/assets/collections/collection-calm.jpg',
    color: '#6B8B7E',
  },
  {
    id: 'blessing',
    slug: 'blessing',
    name: 'Blessing Series',
    subtitle: '祈福系列',
    description: 'Rooted in the ritual of blessing — pieces given with intention and worn with meaning.',
    longDescription: 'The Blessing Series honours the ancient Chinese practice of offering aroma as prayer. Each bracelet carries a warm, sacred blend suited to new beginnings, gratitude, and life\'s meaningful moments.',
    image: '/assets/collections/collection-blessing.jpg',
    color: '#8B7355',
  },
  {
    id: 'gift',
    slug: 'gift',
    name: 'Gift Series',
    subtitle: '礼赠系列',
    description: 'Presented in handcrafted silk boxes. A gift that arrives beautifully and is kept for years.',
    longDescription: 'Every piece in the Gift Series comes in a handcrafted silk presentation box with a hand-written intention card. Designed to be given — at weddings, birthdays, farewells, and quiet moments of care.',
    image: '/assets/collections/collection-gift.jpg',
    color: '#8B6E6E',
  },
];

export const getCollectionBySlug = (slug) => {
  if (slug === 'best-sellers') return collections.find(c => c.id === 'bestseller');
  return collections.find(c => c.slug === slug);
};
