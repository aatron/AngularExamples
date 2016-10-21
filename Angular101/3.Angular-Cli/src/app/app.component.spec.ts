/* tslint:disable:no-unused-variable */

import { DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MovieService } from './movie.service';
import { Movie } from './movie';
import { MOVIES } from './mock-movies';

let comp: AppComponent;
let fixture: ComponentFixture<AppComponent>;
let spy: jasmine.Spy;
let service: MovieService;
let moviesResult: Movie[];

describe('App: DocumentaryFilter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        MovieService
        ]
    });

    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;

    // MovieService is injected into the component
    service = fixture.debugElement.injector.get(MovieService);

    // spy on getMovies method
    spy = spyOn(service, 'getMovies')
          .and.returnValue(Promise.resolve(MOVIES));
  });

  it('should create the app', async(() => {
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Hello Movies.'`, async(() => {
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Hello Movies.');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Hello Movies.');
  }));

  it('should show movies after getMovies promise (async)', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => { // wait for async getMovies
      fixture.detectChanges();        // update view with movies
      let movieList = fixture.debugElement.query(By.css('#movie-list')).children;
      expect(3).toBe(movieList.length);
    });
  }));

  // Note: fakeAsync can't make xhr call
  it('should show movies after getMovie promise (fakeAsync)', fakeAsync(() => {
    fixture.detectChanges();
    tick();                  // wait for async getMovies
    fixture.detectChanges(); // update view with movies
    let movieList = fixture.debugElement.query(By.css('#movie-list')).children;
    expect(3).toBe(movieList.length);
  }));
});
