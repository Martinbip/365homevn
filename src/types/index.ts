export interface Product {
  id: string;
  name: string;
  price?: string;
  image: string;
  link: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Room {
  id: string;
  title: string;
  image: string;
  href: string;
}

export interface MenuItem {
  label: string;
  href: string;
  submenu?: {
    title: string;
    items: NavItem[];
  }[];
}

export interface FeaturedCollection {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  href: string;
  size?: 'large' | 'small';
}

export interface Story {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
  category?: string;
}
