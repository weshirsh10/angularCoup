import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { GameplayService } from './gameplay.service'
import { WebSocketServiceService } from './web-socket-service.service'


@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.css']
})
export class GameplayComponent implements OnInit {

  player;
  myCoins;
  myCard1;
  myCard2;
  players;
  startText;


  constructor(private socketService:WebSocketServiceService, private route: ActivatedRoute, private gamePlayService: GameplayService ) { }

  ngOnInit(): void {

    this.socketService.getMessages().subscribe(
      data => {
        console.log('Socket Data', data)
        let newPlayer = {}

        newPlayer['name'] = data['message']['name']
        newPlayer['coins'] = data['message']['coins']
        newPlayer['card1'] = data['message']['card1']
        newPlayer['card2'] = data['message']['card2']

        this.players.push(newPlayer)

      },
      error => {
        console.log('Socket Error', error)
      }
    )
    this.startText = "Start!"
    this.player = this.route.snapshot.params['']
    this.player = this.route.snapshot.paramMap.get('name')

    let state = this.gamePlayService.getGameState(this.player).subscribe(
      data => {
        console.log("myPlayer", data)
        this.myCoins = data['myPlayer']['coins']
        this.myCard1 = data['myPlayer']['card1']
        this.myCard2 = data['myPlayer']['card2']
        this.players = data['players']

      },
      error => {
        console.log("Error!", error)
      }
    )

    
  }

  onStartClick(){
    this.startText = "Waiting for other players"
  }

}
