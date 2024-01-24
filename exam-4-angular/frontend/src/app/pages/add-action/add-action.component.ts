
import { Router } from '@angular/router';
import { AddActionService } from './../../services/add-action.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-action',
  templateUrl: './add-action.component.html',
  styleUrls: ['./add-action.component.css'],
})
export class AddActionComponent implements OnInit {
  theAction = '';
  theAccount = '';
  theAmount = '';
  theReturnDate = '';
  thePayments = '';
  date = new Date().toLocaleDateString();

  constructor(private addAction: AddActionService,private router: Router) {}

  ngOnInit(): void {}

  actionType(event: any) {
    this.theAction = event.target.value;
  }

  accountNum(event: any) {
    this.theAccount = event.target.value;
  }

  returnDate(event: any) {
    this.theReturnDate = event.target.value;
  }

  paymentsNum(event: any) {
    this.thePayments = event.target.value;
  }

  amountNum(event: any) {
    this.theAmount = event.target.value;
  }

  onBtnClick() {
    const data = {
      "accountNum": this.theAccount,
      "action": this.theAction,
      "amount": this.theAmount,
      "date": this.date,
      "payments": this.thePayments,
      "returnDate": this.theReturnDate,
    };

    if (this.theAccount == '' || this.theAmount == '' || this.theAction == '') {
      alert(
        'Please enter your account number or amount of money and choose an action'
      );
    } else {
      try {
        this.addAction.addAction(data).subscribe((data) => console.log(data));
      } catch (err) {
        console.log('why who are you???? ', err);
      }
      this.router.navigate(['/']);
    }
  }
}
