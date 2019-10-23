import { Component, OnInit } from '@angular/core';
import { TimeService } from '../../_services/time.service';

import { timer, from } from 'rxjs';
import { take, filter, map, shareReplay, pluck} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  date: any;
  counter: any;

  constructor(private time_service: TimeService) { 
    const tmr = timer(0, 1000);
    const subscripted_counter = tmr.pipe(take(21), filter(this.filter_divisible),map(this.custom_map)).subscribe(val => {
      //set timer value to counter
      this.counter = val;
    });

    ////const source = from([{ name: 'Joe', age: 30 }, { name: 'Sarah', age: 35 }]);
    //grab names
    ////const example = source.pipe(pluck('name'));
    //output: "Joe", "Sarah"
    ////const subscribe = example.subscribe(val => console.log(val));

  }

  filter_divisible(nmbr: number){
    if(nmbr%2 === 0){
      return true;
    }
    else{
      return false;
    }
  }

  custom_map(nmbr: number): string{
    return "NU:" + nmbr;
  }

  ngOnInit() {
  }

  time(){
    console.log("ok");
    this.time_service.time().subscribe(
      resultado => {
        console.dir(resultado);
          this.date = resultado.body.datetime;
      }
    );
  }

}
