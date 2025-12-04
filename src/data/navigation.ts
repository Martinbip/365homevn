import { MenuItem, NavItem } from '@/types';

export const mainMenu: MenuItem[] = [
  {
    label: 'Sản phẩm',
    href: '/cua-hang',
    submenu: [
      {
        title: 'Phòng khách',
        items: [
          { label: 'Sofa', href: '/danh-muc/phong-khach/sofa' },
          { label: 'Sofa góc', href: '/danh-muc/phong-khach/sofa-goc' },
          { label: 'Ghế thư giãn', href: '/danh-muc/phong-khach/ghe-thu-gian' },
          { label: 'Armchair', href: '/danh-muc/phong-khach/armchair' },
          { label: 'Ghế dài & đôn', href: '/danh-muc/phong-khach/ghe-dai-don' },
          { label: 'Bàn bên', href: '/danh-muc/phong-khach/ban-ben' },
          { label: 'Bàn nước', href: '/danh-muc/phong-khach/ban-nuoc' },
          { label: 'Bàn Console', href: '/danh-muc/phong-khach/ban-console' },
          { label: 'Tủ tivi', href: '/danh-muc/phong-khach/tu-tivi' },
          { label: 'Kệ trưng bày', href: '/danh-muc/phong-khach/ke-phong-khach' },
          { label: 'Tủ giày', href: '/danh-muc/phong-khach/tu-giay' },
        ],
      },
      {
        title: 'Phòng ăn',
        items: [
          { label: 'Bàn ăn', href: '/danh-muc/phong-an/ban-an' },
          { label: 'Ghế ăn', href: '/danh-muc/phong-an/ghe-an' },
          { label: 'Ghế Bar', href: '/danh-muc/phong-an/ghe-bar' },
          { label: 'Tủ ly', href: '/danh-muc/phong-an/tu-ly' },
          { label: 'Xe đẩy', href: '/danh-muc/phong-an/xe-day' },
          { label: 'Tủ bếp', href: '/danh-muc/bep/tu-bep' },
          { label: 'Thiết bị bếp', href: '/danh-muc/bep/phu-kien-bep' },
        ],
      },
      {
        title: 'Phòng ngủ',
        items: [
          { label: 'Giường ngủ', href: '/danh-muc/phong-ngu/giuong' },
          { label: 'Bàn đầu giường', href: '/danh-muc/phong-ngu/ban-dau-giuong' },
          { label: 'Bàn trang điểm', href: '/danh-muc/phong-ngu/ban-trang-diem' },
          { label: 'Tủ áo', href: '/danh-muc/phong-ngu/tu-ao' },
          { label: 'Tủ âm tường', href: '/danh-muc/phong-ngu/tu-am-tuong' },
          { label: 'Tủ hộc kéo', href: '/danh-muc/phong-ngu/tu-hoc-keo' },
          { label: 'Nệm', href: '/danh-muc/phong-ngu/nem' },
        ],
      },
      {
        title: 'Phòng làm việc',
        items: [
          { label: 'Bàn làm việc', href: '/danh-muc/phong-lam-viec/ban-lam-viec' },
          { label: 'Ghế làm việc', href: '/danh-muc/phong-lam-viec/ghe-lam-viec' },
          { label: 'Kệ sách', href: '/danh-muc/phong-lam-viec/ke-sach' },
        ],
      },
    ],
  },
];

export const topBarLinks: NavItem[] = [
  { label: '0903 884 358', href: 'tel:0903884358' },
  { label: 'Giới thiệu', href: '/gioi-thieu' },
  { label: 'Khuyến mãi', href: '/khuyen-mai' },
  { label: 'Giảm giá đặc biệt', href: '/danh-muc/giam-gia-dac-biet' },
];
