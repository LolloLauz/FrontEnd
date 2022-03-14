import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePrenotazioneComponent } from './create-prenotazione.component';

describe('CreatePrenotazioneComponent', () => {
  let component: CreatePrenotazioneComponent;
  let fixture: ComponentFixture<CreatePrenotazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePrenotazioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePrenotazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
