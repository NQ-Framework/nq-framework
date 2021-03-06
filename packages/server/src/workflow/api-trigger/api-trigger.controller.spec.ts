import { Test, TestingModule } from '@nestjs/testing';
import { LoggerService } from '../../core/logger.service';
import { WorkflowExecutionService } from '../workflow-execution/workflow-execution.service';
import { WorkflowRepositoryService } from '../workflow-repository.service';
import { ApiTriggerController } from './api-trigger.controller';

describe('ApiTriggerController', () => {
  let controller: ApiTriggerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiTriggerController],
      providers: [
        { provide: LoggerService, useValue: { setContext: jest.fn() } },
        { provide: WorkflowRepositoryService, useValue: {} },
        { provide: WorkflowExecutionService, useValue: {} },
      ],
    }).compile();

    controller = module.get<ApiTriggerController>(ApiTriggerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
