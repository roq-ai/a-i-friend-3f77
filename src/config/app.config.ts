interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['App Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['App Owner', 'App Administrator', 'App Developer', 'Support Staff'],
  tenantName: 'Organization',
  applicationName: 'A.I. Friend',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Interact with the Organization by providing feedback',
    'Contribute to the improvement of the A.I. Friend',
    'Read about the Organization offering the A.I. Friend',
    'Understand who is behind the application',
  ],
  ownerAbilities: [
    'Manage Organizations',
    'Invite App Administrators, App Developers, and Support Staff to an Organization',
    'Remove App Administrators, App Developers, and Support Staff from an Organization',
    'Update Organization details based on feedback',
  ],
};
