import { Component, inject, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { CharacterService} from './services';
import { Observable } from 'rxjs';
import { Character } from './models';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-services';
  characterService = inject(CharacterService);
  characters: Signal <Character[] | undefined >= toSignal(
    this.characterService.getCharacters(),
  );
}
