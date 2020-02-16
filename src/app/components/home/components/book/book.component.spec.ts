/** angular */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
/** end angular */

/** modules */
import { AngularSharedModule } from 'src/shared/modules/angular-shared.module';
import { AngularMaterialSharedModule } from 'src/shared/modules/angular-material-shared.module';
/** end modules */

/** components */
import { BookComponent } from './book.component';
/** end components */

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ],
      imports: [AngularSharedModule, AngularMaterialSharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
