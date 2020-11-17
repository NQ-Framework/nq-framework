import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { FirebaseAuthMiddleware } from './firebase';
import { OrganizationMiddleware } from './organization/middleware/organization.middleware';
import configuration from './config/configuration';
import { ConfiugrationModule } from './config/configuration.module';
import { WorkOrderModule } from './business/work-order/work-order.module';
import { CoreModule } from './core/core.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { DbConnectionModule } from './db-connection/db-connection.module';
import { Organization } from './organization/organization.module';
import { ScheduledJobsModule } from './scheduled-jobs/scheduled-jobs.module';
import { ScheduleModule } from '@nestjs/schedule';
import { JobHandlerModule } from './job-handler/job-handler.module';
import { TriggeredJobsModule } from './triggered-jobs/triggered-jobs.module';
import { GuardsModule } from './guards/guards.module';
import { ActionsModule } from './actions/actions.module';
import { WorkflowModule } from './workflow/workflow.module';

const configImport = ConfigModule.forRoot({
  envFilePath: '.development.env',
  isGlobal: true,
  load: [configuration],
});

@Module({
  imports: [
    configImport,
    ConfiugrationModule,
    WorkOrderModule,
    CoreModule,
    AnalyticsModule,
    DbConnectionModule,
    Organization,
    ScheduledJobsModule,
    ScheduleModule.forRoot(),
    JobHandlerModule,
    TriggeredJobsModule,
    GuardsModule,
    ActionsModule,
    WorkflowModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  async configure(consumer: MiddlewareConsumer) {
    return new Promise((resolve) => {
      resolve(
        consumer
          .apply(FirebaseAuthMiddleware)
          .exclude('v1/api')
          .forRoutes('*')
          .apply(OrganizationMiddleware)
          .forRoutes('*'),
      );
    });
  }
}