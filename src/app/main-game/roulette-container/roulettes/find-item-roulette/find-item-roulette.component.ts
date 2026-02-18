import { Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { WheelComponent } from '../../../../wheel/wheel.component';
import { ItemsService } from '../../../../services/items-service/items.service';
import { ItemSpriteService } from '../../../../services/item-sprite-service/item-sprite.service';
import { ItemItem } from '../../../../interfaces/item-item';
import { AudioService } from '../../../../services/audio-service/audio.service';
import { SettingsService } from '../../../../services/settings-service/settings.service';

@Component({
  selector: 'app-find-item-roulette',
  imports: [
    CommonModule,
    WheelComponent,
    TranslatePipe
  ],
  templateUrl: './find-item-roulette.component.html',
  styleUrl: './find-item-roulette.component.css'
})
export class FindItemRouletteComponent {

  constructor(private modalService: NgbModal,
    private itemService: ItemsService,
    private itemSpriteService: ItemSpriteService,
    private audioService: AudioService,
    private settingsService: SettingsService) {
    this.items = itemService.getAllItems();
    this.itemFoundAudio = this.audioService.createAudio('./ItemFound.mp3');
  }

  private openModalWithAutoClose(template: TemplateRef<any>, options: any) {
    const modalRef = this.modalService.open(template, options);
    if (this.settingsService.currentSettings.autoSpin) {
      setTimeout(() => modalRef.dismiss(), 5000);
    }
    return modalRef;
  }

  @ViewChild('itemExplainerModal', { static: true }) itemExplainerModal!: TemplateRef<any>;
  items: ItemItem[] = [];
  selectedItem: ItemItem | null = null;
  @Output() itemSelectedEvent = new EventEmitter<ItemItem>();
  itemFoundAudio!: HTMLAudioElement;

  onItemSelected(index: number): void {
    this.selectedItem = this.items[index];

    this.itemSpriteService.getItemSprite(this.selectedItem.name).pipe(take(1)).subscribe(response => {
      if (this.selectedItem) {
        this.selectedItem.sprite = response.sprite;
      }
    });

    this.audioService.playAudio(this.itemFoundAudio, 0.25);

    const modalRef = this.openModalWithAutoClose(this.itemExplainerModal, {
      centered: true,
      size: 'md',
      keyboard: false
    });

    modalRef.result.then(() => {
      if (this.selectedItem) {
        this.itemSelectedEvent.emit(this.selectedItem);
      }
    }, () => {
      if (this.selectedItem) {
        this.itemSelectedEvent.emit(this.selectedItem);
      }
    });
  }

  closeItemExplainerModal(): void {
    this.modalService.dismissAll();
  }
}
