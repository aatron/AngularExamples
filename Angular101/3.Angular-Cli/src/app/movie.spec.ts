/* tslint:disable:no-unused-variable */

import { Movie } from './movie';

// Isolated tests - no need for BeforeEach
describe('Movie', () => {
  it('has title', () => {
    const movie = new Movie('Bird Paintings', ['Art', 'Nature']);
    expect(movie.title).toBe('Bird Paintings');
  });

  it('has tags', () => {
    const movie = new Movie('Bird Paintings', ['Art', 'Nature']);
    expect(movie.tags.length).toEqual(2);
    expect(movie.tags[1]).toBe('Nature');
  });

  it('can clone itself', () => {
    const movie = new Movie('Bird Paintings', ['Art', 'Nature']);
    const clone = movie.clone();
    expect(movie).toEqual(clone);
  });
});
