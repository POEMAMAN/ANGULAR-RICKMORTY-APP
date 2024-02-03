import { Character } from './../../../characters.interface';
import { CharactersService } from './../../../services/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characterspage',
  templateUrl: './characterspage.component.html',
})
export class CharacterspageComponent implements OnInit {
characters: Character[] = [];

constructor(private CharactersService: CharactersService){
}
//inyecto el servicio

ngOnInit(): void {
  this.CharactersService.getCharacters().subscribe({next: (response: any) => {
    this.characters = response.results
  console.log(response)}
  //gestionala respuesta cuando da ok


  ,
  error: (error) => {}
  //gestiona le posible error desde la api
})
}
}





