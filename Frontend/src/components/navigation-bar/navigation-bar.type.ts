export interface NavigationItem {
  id: number;
  label: string;
  link: string;
  icon?: string;
  active?: boolean;
  external?: boolean;
  children?: NavigationItem[];
}
