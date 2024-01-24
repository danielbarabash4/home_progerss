import { GetActionsByAccountService } from './../../services/get-actions-by-account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions-by-num',
  templateUrl: './actions-by-num.component.html',
  styleUrls: ['./actions-by-num.component.css'],
})
export class ActionsByNumComponent implements OnInit {
  accountNum = '';
  allActions: any = '';
  normalActions: any = '';
  loanAction: any = '';

  constructor(private accountService: GetActionsByAccountService) {}

  ngOnInit(): void {}

  theNum(event: any) {
    this.accountNum = event.target.value;
  }

  btnClick() {
    console.log(this.accountNum);
    try {
      this.accountService
        .getActions(this.accountNum)
        .subscribe((data) => ((this.allActions = data), this.splitActions()));
    } catch (err) {
      console.log('why who are you???? ', err);
    }
  }

  splitActions = async () => {
    const data: [] = await this.allActions;
    const loan: any = [];
    const rest: any = [];
    data.map((item: any) => {
      if (item.action === 'loan') {
        loan.push(item);
      } else {
        rest.push(item);
      }
    });
    console.log(loan);
    console.log(rest);
    this.loanAction = loan;
    this.normalActions = rest;
  };
}
