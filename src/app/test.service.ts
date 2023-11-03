import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TestService {
  private http = inject(HttpClient);
  private params = signal({ test: 'test' });

  result = this.http.get('fake', {
    params: new HttpParams({ fromObject: { test: 'test' } }),
  });

  resultRxjsInterop = toObservable(this.params).pipe(
    switchMap((params) =>
      this.http.get('fake', {
        params: new HttpParams({ fromObject: params }),
      })
    )
  );
}
