export interface DatagridHeader {
  title: string;
  name: string;
  size: number;
  left: boolean;
  toggle: boolean;
  toggleType: string;
  toggleTargets: Array<string>;
  visible: boolean;
  noBorder: boolean;
}
