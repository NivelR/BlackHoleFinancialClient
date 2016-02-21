import { HomeComponent } from './home';
import { TestComponentBuilder } from 'angular2/testing';

describe('HomeComponent', () => {
  it('renders home', injectAsync([TestComponentBuilder], (builder) => {
    return builder.createAsync(HelloComponent)
      .then((fixture) => {
        expect(fixture.debugElement.nativeElement).toHaveText('Angular 2 App');
      });
  }));
});
