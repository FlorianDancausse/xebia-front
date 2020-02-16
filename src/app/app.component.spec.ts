/** angular */
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
/** end angular */

/** modules */
import { AngularSharedModule } from 'src/shared/modules/angular-shared.module';
import { AngularMaterialSharedModule } from 'src/shared/modules/angular-material-shared.module';
/** end modules */

/** services */
import { CartService } from './components/home/services/cart.service';
/** end services */

/** components */
import { AppComponent } from './app.component';
/** end components */

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, AngularSharedModule, AngularMaterialSharedModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [CartService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
