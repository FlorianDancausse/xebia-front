/** angular */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRouteStub } from 'src/tests/activated-route-stub';
/** end angular */

/** modules */
import { AngularSharedModule } from 'src/shared/modules/angular-shared.module';
import { AngularMaterialSharedModule } from 'src/shared/modules/angular-material-shared.module';
/** end modules */

/** services */
import { BookService } from './services/book.service';
import { CartService } from './services/cart.service';
/** end services */

/** components */
import { HomeComponent } from './home.component';
import { BookComponent } from './components/book/book.component';
/** end components */

describe('HomeComponent', () => {
  let component: HomeComponent;
  let httpClient: HttpClient;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, BookComponent ],
      imports: [ HttpClientTestingModule, AngularSharedModule, AngularMaterialSharedModule ],
      providers: [
        BookService,
        CartService,
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { data : require('./tests/books.mock.json') } }
        },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);

    httpClient = TestBed.get(HttpClient);

    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
