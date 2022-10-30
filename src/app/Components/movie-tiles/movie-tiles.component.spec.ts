import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTilesComponent } from './movie-tiles.component';

describe('MovieTilesComponent', () => {
  let component: MovieTilesComponent;
  let fixture: ComponentFixture<MovieTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieTilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
