import { Component, OnInit } from '@angular/core';
import { BackendapiService } from 'src/app/services/backendapi.service';

interface PackingInfo {
  ref_serial: string,
  packing_serial: string,
  packing_time: string
}
interface ProductionInfo {
  checkpoint: string,
  time: string
}
@Component({
  selector: 'app-serial',
  templateUrl: './serial.component.html',
  styleUrls: ['./serial.component.css']
})



export class SerialComponent implements OnInit {
  serial: string = ""
  someError: boolean = false
  errorText: string = ""
  // result: any
  loaded: boolean = false

  packingInfo: PackingInfo[]
  productionInfo: ProductionInfo[] = []

  constructor(public api: BackendapiService) { }

  ngOnInit(): void {
  }

  async submit (){
    if (this.serial == ""){
      this.loaded = false
      this.someError = true
      this.errorText = "Serial Nomer kiritilmadi"
      return
    }
    this.someError = false
    let result = await this.api.GetInfoBySerial(this.serial)
    console.log(result)
    this.packingInfo = result.PackingInfo
    this.productionInfo = result.ProductionInfo
    this.loaded = true

  }

}
