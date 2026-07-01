export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Brands', href: '/brands' },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Automate', href: '/products/automate' },
      { label: 'Connect', href: '/products/connect' },
      { label: 'Mark, Assemble and Install', href: '/products/mark-assemble-and-install' },
      { label: 'Supply, Charge and Protect', href: '/products/supply-charge-and-protect' },
      { label: 'Switch, Measure and Monitor', href: '/products/switch-measure-and-monitor' },
    ],
  },
  { label: 'Solutions', href: '/solutions' },
  { label: 'eWaste', href: '/ewaste' },
  { label: 'Contact Us', href: '/contact' },
]

export const footerQuickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Brands', href: '/brands' },
  { label: 'eWaste', href: '/ewaste' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact us', href: '/contact' },
  { label: 'Culture', href: '/culture' },
  { label: 'Products', href: '/products' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Product Line Card', href: '/product-line-card' },
  { label: "Do's & Don'ts", href: '/dos-donts' },
]
