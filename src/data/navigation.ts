import { MenuItem, NavItem } from '@/types';

export const mainMenu: MenuItem[] = [
  {
    label: 'Thiết kế nội thất',
    href: '/thiet-ke-noi-that',
    submenu: [
      {
        title: 'Phong cách',
        items: [
          { label: 'Hiện đại', href: '/thiet-ke-noi-that/hien-dai' },
          { label: 'Tân cổ điển', href: '/thiet-ke-noi-that/tan-co-dien' },
          { label: 'Minimalist', href: '/thiet-ke-noi-that/minimalist' },
          { label: 'Scandinavian', href: '/thiet-ke-noi-that/scandinavian' },
        ],
      },
      {
        title: 'Không gian',
        items: [
          { label: 'Phòng khách', href: '/thiet-ke-noi-that/phong-khach' },
          { label: 'Phòng ngủ', href: '/thiet-ke-noi-that/phong-ngu' },
          { label: 'Phòng bếp', href: '/thiet-ke-noi-that/phong-bep' },
          { label: 'Phòng làm việc', href: '/thiet-ke-noi-that/phong-lam-viec' },
        ],
      },
      {
        title: 'Loại hình',
        items: [
          { label: 'Căn hộ', href: '/thiet-ke-noi-that/can-ho' },
          { label: 'Nhà phố', href: '/thiet-ke-noi-that/nha-pho' },
          { label: 'Biệt thự', href: '/thiet-ke-noi-that/biet-thu' },
          { label: 'Văn phòng', href: '/thiet-ke-noi-that/van-phong' },
        ],
      },
    ],
  },
  {
    label: 'Thi công nội thất',
    href: '/thi-cong-noi-that',
  },
  {
    label: 'Kiến trúc',
    href: '/kien-truc',
  },
  {
    label: 'Dịch vụ/Công trình',
    href: '/dich-vu',
    submenu: [
      {
        title: 'Dịch vụ',
        items: [
          { label: 'Thiết kế kiến trúc', href: '/dich-vu/thiet-ke-kien-truc' },
          { label: 'Thiết kế nhà ở', href: '/dich-vu/thiet-ke-nha-o' },
          { label: 'Thiết kế cảnh quan', href: '/dich-vu/thiet-ke-canh-quan' },
          { label: 'Tư vấn thiết kế', href: '/dich-vu/tu-van-thiet-ke' },
          { label: 'Giám sát thi công', href: '/dich-vu/giam-sat-thi-cong' },
        ],
      },
      {
        title: 'Công trình',
        items: [
          { label: 'Xây dựng nội thất', href: '/cong-trinh/xay-dung-noi-that' },
          { label: 'Xây dựng ngoại thất', href: '/cong-trinh/xay-dung-ngoai-that' },
          { label: 'Xây dựng trọn gói', href: '/cong-trinh/xay-dung-tron-goi' },
        ],
      },
    ],
  },
  {
    label: 'Tin tức',
    href: '/tin-tuc',
    submenu: [
      {
        title: 'Chủ đề',
        items: [
          { label: 'Xu hướng thiết kế', href: '/tin-tuc/xu-huong-thiet-ke' },
          { label: 'Kinh nghiệm', href: '/tin-tuc/kinh-nghiem' },
          { label: 'Dự án hoàn thành', href: '/tin-tuc/du-an-hoan-thanh' },
          { label: 'Khuyến mãi', href: '/tin-tuc/khuyen-mai' },
        ],
      },
    ],
  },
];

export const topBarLinks: NavItem[] = [
  { label: '0971.770.946', href: 'tel:0971770946' },
  { label: '0393.685.999', href: 'tel:0393685999' },
];
