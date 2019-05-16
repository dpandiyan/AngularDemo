import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalServiceService {

  MyBank = "ICICI"
  banks = ['SBI', 'ICICI', 'HDFC']

  DisplayBanks()
  {
console.log(this.banks)
  }

  AddBank()
  {
    this.banks.push("RBI")
  }
  PushBank(BankNAme)
  {
    this.banks.push(BankNAme)
  }
  
}
