import { Organization } from "../organization/organization";
import { ActionInstance } from "./actions/action-instance";
import { PropertyValue } from "./property/property-value";
import { Workflow } from "./workflow";

export interface WorkflowExecutionContext {
  id: string;
  isRunning: boolean;
  actions: { [key: string]: { properties: any; values: any } };
  input: any;
  triggerInput: PropertyValue[];
  triggerOutput: any;
  stack: ActionInstance[];
  startTime: Date;
  endTime?: Date;
  workflow: Workflow;
  organization: Organization;
  startedBy: string;
}
