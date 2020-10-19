import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from './tasks.service';

describe('TasksProvider', () => {
  let provider: TaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskService],
    }).compile();

    provider = module.get<TaskService>(TaskService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
