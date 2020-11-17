import { Module } from '@nestjs/common';
import { CoreModule } from '../core/core.module';
import { ActionsModule } from '../actions/actions.module';
import { WorkflowService } from './workflow.service';
import { WorkflowExecutionService } from './workflow-execution/workflow-execution.service';

@Module({
  imports: [ActionsModule, CoreModule],
  providers: [WorkflowService, WorkflowExecutionService],
  exports: [WorkflowService, WorkflowExecutionService],
})
export class WorkflowModule { }