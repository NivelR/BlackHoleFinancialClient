import { AboutComponent } from './about';
import { TestComponentBuilder } from 'angular2/testing';

describe('AboutComponent', () => {
  it('renders about', injectAsync([TestComponentBuilder], (builder) => {
    return builder.createAsync(HelloComponent)
      .then((fixture) => {
        expect(fixture.debugElement.nativeElement).toHaveText('Angular 2 App');
      });
  }));
});
