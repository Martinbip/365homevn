import { MenuItem, NavItem } from '@/types';

export const mainMenu: MenuItem[] = [
  {
    label: 'Sản phẩm',
    href: '/san-pham',
    submenu: [
      {
        title: 'Sofa',
        items: [
          { label: 'Sofa góc', href: '/danh-muc/sofa-goc' },
          { label: 'Ghế thư giãn', href: '/danh-muc/ghe-thu-gian' },
          { label: 'Armchair', href: '/danh-muc/armchair' },
          { label: 'Ghế dài & đôn', href: '/danh-muc/ghe-dai-don' },
          { label: 'Bàn bên', href: '/danh-muc/ban-ben' },
          { label: 'Bàn nước', href: '/danh-muc/ban-nuoc' },
          { label: 'Bàn Console', href: '/danh-muc/ban-console' },
          { label: 'Tủ tivi', href: '/danh-muc/tu-tivi' },
          { label: 'Kệ trưng bày', href: '/danh-muc/ke-trung-bay' },
          { label: 'Tủ giày', href: '/danh-muc/tu-giay' },
        ],
      },
      {
        title: 'Bàn ăn',
        items: [
          { label: 'Bàn ăn', href: '/danh-muc/ban-an' },
          { label: 'Ghế ăn', href: '/danh-muc/ghe-an' },
          { label: 'Ghế Bar', href: '/danh-muc/ghe-bar' },
          { label: 'Tủ ly', href: '/danh-muc/tu-ly' },
          { label: 'Xe đẩy', href: '/danh-muc/xe-day' },
          { label: 'Tủ bếp', href: '/danh-muc/tu-bep' },
          { label: 'Thiết bị bếp', href: '/danh-muc/thiet-bi-bep' },
        ],
      },
      {
        title: 'Giường ngủ',
        items: [
          { label: 'Bàn đầu giường', href: '/danh-muc/ban-dau-giuong' },
          { label: 'Bàn trang điểm', href: '/danh-muc/ban-trang-diem' },
          { label: 'Tủ áo', href: '/danh-muc/tu-ao' },
          { label: 'Tủ âm tường', href: '/danh-muc/tu-am-tuong' },
          { label: 'Tủ hộc kéo', href: '/danh-muc/tu-hoc-keo' },
          { label: 'Nệm', href: '/danh-muc/nem' },
        ],
      },
      {
        title: 'Bàn làm việc',
        items: [
          { label: 'Ghế làm việc', href: '/danh-muc/ghe-lam-viec' },
          { label: 'Kệ sách', href: '/danh-muc/ke-sach' },
          { label: 'Bàn ngoài trời', href: '/danh-muc/ban-ngoai-troi' },
          { label: 'Ghế ngoài trời', href: '/danh-muc/ghe-ngoai-troi' },
        ],
      },
      {
        title: 'Đèn trang trí',
        items: [
          { label: 'Thảm trang trí', href: '/danh-muc/tham-trang-tri' },
          { label: 'Michael Aram', href: '/danh-muc/michael-aram' },
          { label: 'Đồ trang trí noel', href: '/danh-muc/do-trang-tri-noel' },
          { label: 'Bình trang trí', href: '/danh-muc/binh-trang-tri' },
          { label: 'Tranh', href: '/danh-muc/tranh' },
          { label: 'Gương', href: '/danh-muc/guong' },
          { label: 'Hoa và cây', href: '/danh-muc/hoa-va-cay' },
          { label: 'Đồng hồ', href: '/danh-muc/dong-ho' },
          { label: 'Khung hình', href: '/danh-muc/khung-hinh' },
          { label: 'Tượng trang trí', href: '/danh-muc/tuong-trang-tri' },
          { label: 'Gối và thú bông', href: '/danh-muc/goi-va-thu-bong' },
          { label: 'Nến & chân nến', href: '/danh-muc/nen-chan-nen' },
        ],
      },
      {
        title: 'Dụng cụ bếp',
        items: [
          { label: 'Dụng cụ trang trí khác', href: '/danh-muc/dung-cu-trang-tri-khac' },
          { label: 'Tinh dầu', href: '/danh-muc/tinh-dau' },
        ],
      },
    ],
  },
  {
    label: 'Phòng',
    href: '/phong',
    submenu: [
      {
        title: 'Không gian',
        items: [
          { label: 'Phòng khách', href: '/phong/phong-khach' },
          { label: 'Phòng ăn', href: '/phong/phong-an' },
          { label: 'Phòng ngủ', href: '/phong/phong-ngu' },
          { label: 'Phòng làm việc', href: '/phong/phong-lam-viec' },
        ],
      },
    ],
  },
  {
    label: 'Bộ sưu tập',
    href: '/bo-suu-tap',
  },
  {
    label: 'Thiết kế nội thất',
    href: '/thiet-ke-noi-that',
  },
  {
    label: 'Góc cảm hứng',
    href: '/goc-cam-hung',
  },
];

export const topBarLinks: NavItem[] = [
  { label: '0903 884 358', href: 'tel:0903884358' },
  { label: 'Giới thiệu', href: '/gioi-thieu' },
  { label: 'Khuyến mãi', href: '/khuyen-mai' },
  { label: 'Giảm giá đặc biệt', href: '/danh-muc/giam-gia-dac-biet' },
];
