const mapping: Record<string, string> = {
  'app-administrators': 'app_administrator',
  'app-developers': 'app_developer',
  feedbacks: 'feedback',
  organizations: 'organization',
  'support-staffs': 'support_staff',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
