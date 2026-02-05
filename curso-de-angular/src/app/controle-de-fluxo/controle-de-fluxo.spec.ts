import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleDeFluxo } from './controle-de-fluxo';

describe('ControleDeFluxo', () => {
  let component: ControleDeFluxo;
  let fixture: ComponentFixture<ControleDeFluxo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControleDeFluxo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControleDeFluxo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
