import { AppAdministratorInterface } from 'interfaces/app-administrator';
import { AppDeveloperInterface } from 'interfaces/app-developer';
import { FeedbackInterface } from 'interfaces/feedback';
import { SupportStaffInterface } from 'interfaces/support-staff';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  app_administrator?: AppAdministratorInterface[];
  app_developer?: AppDeveloperInterface[];
  feedback?: FeedbackInterface[];
  support_staff?: SupportStaffInterface[];
  user?: UserInterface;
  _count?: {
    app_administrator?: number;
    app_developer?: number;
    feedback?: number;
    support_staff?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
