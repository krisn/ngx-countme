import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountmeDirective } from './countme.directive';
import { CountmeService } from './countme.service';

export * from './countme.directive';
export * from './countme.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CountmeDirective
  ],
  exports: [
    CountmeDirective
  ]
})
export class CountmeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CountmeModule,
      providers: [CountmeService]
    };
  }
}
