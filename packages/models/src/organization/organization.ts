import { DataSource } from "../data-fetching/data-source";
import { OrganizationMember } from "./organization-member";
import { ServiceAccount } from "./service-account";

export interface Organization {
  name: string;
  email: string;
  address1: string;
  address2: string;
  country: string;
  members: OrganizationMember[];
  memberIds: string[];
  dataSources: DataSource[];
  serviceAccounts: ServiceAccount[];
}
