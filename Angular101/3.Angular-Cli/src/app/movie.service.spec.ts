/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovieService } from './movie.service';

// Isolated - no injection
describe('Service: Movie (isolated)', () => {
  it('should get movies', function(done) {
    let service = new MovieService();

    service.getMovies().then(function(movies) {
      expect(movies.length).toBeGreaterThan(0);
      done();
    }, function(e) {
      done.fail('The promise rejected because of ' + e.message);
    });
  });
});

// Inject service (these tests probably shouldn't exist...)
describe('Service: Movie', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieService]
    });
  });

  it('should get movies', inject([MovieService], (service: MovieService) => function(done) {
    service.getMovies().then(function(movies) {
      expect(movies.length).toBeGreaterThan(0);
      done();
    }, function(e) {
      done.fail('The promise rejected because of ' + e.message);
    });
  }));
});
