import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestService } from './test.service';

describe('TestService', () => {
  let testService: TestService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TestService],
    });
    testService = TestBed.inject(TestService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('test with toObservable', () => {
    testService.result.subscribe();
    const req = controller
      .expectOne({
        url: 'fake?test=test',
        method: 'GET',
      })
      .flush({});
  });

  it('test with toObservable', () => {
    testService.resultRxjsInterop.subscribe();
    const req = controller
      .expectOne({
        url: 'fake?test=test',
        method: 'GET',
      })
      .flush({});
  });
});
