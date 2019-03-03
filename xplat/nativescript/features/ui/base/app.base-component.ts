import { Component } from '@angular/core';

// libs
import { BaseComponent } from '@testing/core';
import { AppService } from '@testing/nativescript/core';

export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
