import { Component, OnInit } from '@angular/core';
import { IProduction } from 'src/app/models/models';
import { BackendapiService } from 'src/app/services/backendapi.service';

interface ILine {
  line: number
}
@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.css']
})



export class LinesComponent implements OnInit {
  token: any

  countAssembly: any
  byModelAssembly: any
  countPacking: any
  byModelPacking: any
  countPpu: any
  byModelPpu: any
  assembly: ILine = {
    line: 2
  }
  packing: ILine = {
    line: 13
  }
  constructor(public api: BackendapiService) { }

  async ngOnInit(): Promise<void> {
    this.token = localStorage.getItem("token")
    // console.log(this.token)
    // console.log(this.assembly)
    this.countAssembly = await this.api.getToday(2, this.token)
    console.log(this.countAssembly)
    this.byModelAssembly = await this.api.getTodayByModels(2, this.token)
    console.log(this.byModelAssembly)
    this.countPpu = await this.api.getToday(10, this.token)
    console.log(this.countPpu)
    this.byModelPpu = await this.api.getTodayByModels(10, this.token)
    console.log(this.byModelPpu)
    // console.log(this.packing)
    this.countPacking = await this.api.getPackingToday(13, this.token)
    console.log(this.countPacking)
    this.byModelPacking = await this.api.getPackingTodayByModels(13, this.token)
    console.log(this.byModelPacking)
  }

}
