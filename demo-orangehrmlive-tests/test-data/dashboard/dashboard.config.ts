export type LeftNavMenuItem =
  | 'admin'
  | 'pim'
  | 'leave'
  | 'time'
  | 'recruitment'
  | 'myInfo'
  | 'performance'
  | 'dashboard'
  | 'directory'
  | 'maintenance'
  | 'claim'
  | 'buzz';

export const requiredLeftNavMenuItems: LeftNavMenuItem[] = [
  'admin',
  'pim',
  'leave',
  'time',
  'recruitment',
  'myInfo',
  'performance',
  'dashboard',
  'directory',
  'maintenance',
];

/** Menu items that may be omitted depending on user role or tenant configuration. */
export const optionalLeftNavMenuItems: LeftNavMenuItem[] = ['claim', 'buzz'];

export type DashboardWidget =
  | 'timeAtWork'
  | 'myActions'
  | 'quickLaunch'
  | 'buzz'
  | 'employeesOnLeave'
  | 'subUnitDistribution'
  | 'locationDistribution';

export const requiredDashboardWidgets: DashboardWidget[] = [
  'timeAtWork',
  'myActions',
  'quickLaunch',
  'employeesOnLeave',
];

/** Dashboard widgets that may be omitted depending on user role or tenant configuration. */
export const optionalDashboardWidgets: DashboardWidget[] = [
  'buzz',
  'subUnitDistribution',
  'locationDistribution',
];
