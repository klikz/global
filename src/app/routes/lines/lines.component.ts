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

  countAssembly: any
  byModelAssembly: any
  countPacking: any
  byModelPacking: any
  assembly: ILine = {
    line: 2
  }  
  packing: ILine = {
    line: 13
  }
  constructor(public api: BackendapiService) { }

  async ngOnInit(): Promise<void> {

    console.log(this.assembly)
    this.countAssembly = await this.api.getToday(this.assembly)
    console.log(this.countAssembly)
    this.byModelAssembly = await this.api.getTodayByModels(this.assembly)
    console.log(this.byModelAssembly)
    console.log(this.packing)
    this.countPacking = await this.api.getPackingToday(this.packing)
    console.log(this.countPacking)
    this.byModelPacking = await this.api.getPackingTodayByModels(this.packing)
    console.log(this.byModelPacking)
  }

}
