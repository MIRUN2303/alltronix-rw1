export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  features?: string[];
  applications?: string[];
  brands?: string[];
  specifications?: { label: string; value: string }[];
  slug: string;
}

export type ProductCategory = 'automate' | 'connect' | 'mark-assemble-install' | 'supply-charge-protect' | 'switch-measure-monitor';

export interface Brand {
  id: string;
  name: string;
  description: string;
  logo?: string;
  website?: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  slug: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
  challenges?: string[];
  solutions?: string[];
  slug: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  description: string;
  date?: string;
  image?: string;
}
