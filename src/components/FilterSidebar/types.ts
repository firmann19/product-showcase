export interface FilterSidebarProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}
