import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {TranslatePipe} from '@ngx-translate/core';
import { WheelComponent } from '../../../../wheel/wheel.component';
import { WheelItem } from '../../../../interfaces/wheel-item';
import { EventSource } from '../../../EventSource';
import { SettingsService } from '../../../../services/settings-service/settings.service';

@Component({
  selector: 'app-elite-four-prep-roulette',
  imports: [WheelComponent, TranslatePipe],
  templateUrl: './elite-four-prep-roulette.component.html',
  styleUrl: './elite-four-prep-roulette.component.css'
})
export class EliteFourPrepRouletteComponent implements OnInit {

  constructor(private modalService: NgbModal, private settingsService: SettingsService) { }

  private openModalWithAutoClose(template: TemplateRef<any>, options: any) {
    const modalRef = this.modalService.open(template, options);
    if (this.settingsService.currentSettings.autoSpin) {
      setTimeout(() => modalRef.dismiss(), 5000);
    }
    return modalRef;
  }

  @ViewChild('victoryRoadModal', { static: true }) victoryRoadModal!: TemplateRef<any>;

  ngOnInit(): void {
    this.openModalWithAutoClose(this.victoryRoadModal, {
      centered: true,
      size: 'lg'
    });
  }

  @Input() respinReason!: string;
  @Output() catchPokemonEvent = new EventEmitter<void>();
  @Output() battleTrainerEvent = new EventEmitter<EventSource>();
  @Output() buyPotionsEvent = new EventEmitter<void>();
  @Output() catchTwoPokemonEvent = new EventEmitter<void>();
  @Output() legendaryEncounterEvent = new EventEmitter<void>();
  @Output() findItemEvent = new EventEmitter<void>();
  @Output() doNothingEvent = new EventEmitter<void>();
  @Output() teamRocketEncounterEvent = new EventEmitter<void>();

  actions: WheelItem[] = [
    { text: 'Ein Pokémon fangen', fillStyle: 'crimson', weight: 2 },
    { text: 'Trainingsphase', fillStyle: 'darkorange', weight: 2 },
    { text: 'Tränke kaufen', fillStyle: 'darkgoldenrod', weight: 2 },
    { text: 'Zwei Pokémon fangen', fillStyle: 'green', weight: 2 },
    { text: 'Legendäres jagen', fillStyle: 'darkcyan', weight: 2 },
    { text: 'Ein Item finden', fillStyle: 'blue', weight: 2 },
    { text: 'Direkt weiter', fillStyle: 'purple', weight: 1 },
    { text: 'Team Rocket Begegnung', fillStyle: 'black', weight: 1 }
  ];

  onItemSelected(index: number): void {
    switch (index) {
      case 0:
        this.catchPokemonEvent.emit();
        break;
      case 1:
        this.battleTrainerEvent.emit('battle-trainer');
        break;
      case 2:
        this.buyPotionsEvent.emit();
        break;
      case 3:
        this.catchTwoPokemonEvent.emit();
        break;
      case 4:
        this.legendaryEncounterEvent.emit();
        break;
      case 5:
        this.findItemEvent.emit();
        break;
      case 6:
        this.doNothingEvent.emit();
        break;
      case 7:
        this.teamRocketEncounterEvent.emit();
        break;
      default:
        break;
    }
  }

  closeModal(): void {
    this.modalService.dismissAll();
  }
}
