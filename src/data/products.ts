import { Product, Room, FeaturedCollection, Story } from '@/types';

export const newProducts: Product[] = [
  {
    id: '1',
    name: 'Armchair Xoay Bolero Vải Nhiều Màu',
    image: 'https://placehold.co/400x400/e5e5e5/666?text=Armchair+Bolero',
    link: '/san-pham/armchair-xoay-bolero-vai-nhieu-mau',
  },
  {
    id: '2',
    name: 'Hoa Tinh Dầu Hydrangeas Mauve',
    image: 'https://placehold.co/400x400/e5e5e5/666?text=Hydrangeas',
    link: '/san-pham/hoa-tinh-dau-hydrangeas-mauve',
  },
  {
    id: '3',
    name: 'Hoa Tinh Dầu Summer Roses-Champagne',
    image: 'https://placehold.co/400x400/e5e5e5/666?text=Summer+Roses',
    link: '/san-pham/hoa-tinh-dau-summer-roses-champagne',
  },
  {
    id: '4',
    name: 'Hoa Tinh Dầu Burgundy Christmas Bouquet',
    image: 'https://placehold.co/400x400/e5e5e5/666?text=Christmas+Bouquet',
    link: '/san-pham/hoa-tinh-dau-burgundy-christmas-bouquet',
  },
  {
    id: '5',
    name: 'Hoa Tinh Dầu Pink Magnolias',
    image: 'https://placehold.co/400x400/e5e5e5/666?text=Pink+Magnolias',
    link: '/san-pham/hoa-tinh-dau-pink-magnolias',
  },
  {
    id: '6',
    name: 'Hoa Tinh Dầu Grand Summer Posy Blue',
    image: 'https://placehold.co/400x400/e5e5e5/666?text=Summer+Posy',
    link: '/san-pham/hoa-tinh-dau-grand-summer-posy-blue',
  },
  {
    id: '7',
    name: 'Hoa Tinh Dầu Herringbone Mixed Pink Roses',
    image: 'https://placehold.co/400x400/e5e5e5/666?text=Pink+Roses',
    link: '/san-pham/hoa-tinh-dau-herringbone-mixed-pink-roses',
  },
  {
    id: '8',
    name: 'Hoa Tinh Dầu Pink Hydrangeas',
    image: 'https://placehold.co/400x400/e5e5e5/666?text=Pink+Hydrangeas',
    link: '/san-pham/hoa-tinh-dau-pink-hydrangeas',
  },
];

export const rooms: Room[] = [
  {
    id: 'living-room',
    title: 'Phòng khách',
    image: 'https://placehold.co/600x400/8B7355/fff?text=Phong+Khach',
    href: '/phong-khach',
  },
  {
    id: 'dining-room',
    title: 'Phòng ăn',
    image: 'https://placehold.co/600x400/6B5D52/fff?text=Phong+An',
    href: '/phong-an',
  },
  {
    id: 'bedroom',
    title: 'Phòng ngủ',
    image: 'https://placehold.co/600x400/9C8B7A/fff?text=Phong+Ngu',
    href: '/phong-ngu',
  },
  {
    id: 'office',
    title: 'Phòng làm việc',
    image: 'https://placehold.co/600x400/7A6A5A/fff?text=Phong+Lam+Viec',
    href: '/phong-lam-viec',
  },
];

export const featuredCollections: FeaturedCollection[] = [
  {
    id: 'sofa-collection',
    title: 'Bộ sưu tập Sofa',
    subtitle: 'Thiết kế thanh lịch & thoải mái',
    image: '/sofa.png',
    href: '/bo-suu-tap/sofa',
    size: 'large',
  },
  {
    id: 'dining-collection',
    title: 'Phòng ăn hiện đại',
    subtitle: 'Không gian sum họp ấm cúng',
    image: '/dining-table.png',
    href: '/bo-suu-tap/phong-an',
    size: 'small',
  },
  {
    id: 'bedroom-collection',
    title: 'Phòng ngủ',
    subtitle: 'Giấc ngủ ngon với thiết kế tinh tế',
    image: '/bed.png',
    href: '/bo-suu-tap/phong-ngu',
    size: 'small',
  },
];

export const stories: Story[] = [
  {
    id: 'story-1',
    title: 'Xu hướng nội thất 2024: Sự trở lại của phong cách Minimalist',
    excerpt: 'Khám phá cách phong cách tối giản đang định hình lại không gian sống hiện đại với màu sắc trung tính và đường nét tinh tế.',
    image: 'https://placehold.co/500x400/e8dfd4/333?text=Minimalist+Trend',
    href: '/tin-tuc/xu-huong-noi-that-2024',
    category: 'Xu hướng',
  },
  {
    id: 'story-2',
    title: 'Cách chọn sofa phù hợp cho phòng khách nhỏ',
    excerpt: 'Hướng dẫn chi tiết giúp bạn lựa chọn sofa hoàn hảo cho không gian sống tinh tế và thoải mái.',
    image: 'https://placehold.co/500x400/ddd5c8/333?text=Sofa+Guide',
    href: '/tin-tuc/cach-chon-sofa',
    category: 'Hướng dẫn',
  },
  {
    id: 'story-3',
    title: 'Gặp gỡ nhà thiết kế: Câu chuyện đằng sau bộ sưu tập mới',
    excerpt: 'Trò chuyện cùng các nhà thiết kế về nguồn cảm hứng và quá trình sáng tạo bộ sưu tập mới nhất của 365home.com.vn.',
    image: 'https://placehold.co/500x400/d2cbbf/333?text=Designer+Story',
    href: '/tin-tuc/gap-go-nha-thiet-ke',
    category: 'Câu chuyện',
  },
];
