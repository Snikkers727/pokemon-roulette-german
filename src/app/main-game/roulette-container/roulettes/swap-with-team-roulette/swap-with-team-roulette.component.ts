import { Component, EventEmitter, Output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { WheelComponent } from '../../../../wheel/wheel.component';
import { WheelItem } from '../../../../interfaces/wheel-item';

@Component({
  selector: 'app-swap-with-team-roulette',
  imports: [WheelComponent, TranslatePipe],
  templateUrl: './swap-with-team-roulette.component.html',
  styleUrl: './swap-with-team-roulette.component.css'
})
export class SwapWithTeamRouletteComponent {

  @Output() shouldSwapEvent = new EventEmitter<boolean>();

  swapOptions: WheelItem[] = [
    { text: 'game.main.roulette.swap.swap', fillStyle: 'green', weight: 1 },
    { text: 'game.main.roulette.swap.bank', fillStyle: 'steelblue', weight: 1 }
  ];

  onItemSelected(index: number): void {
    this.shouldSwapEvent.emit(this.swapOptions[index].text === 'game.main.roulette.swap.swap');
  }
}
