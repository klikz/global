import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { DatePipe } from '@angular/common';

import {IRemont} from 'src/app/models/models'
import { BackendapiService } from 'src/app/services/backendapi.service'
 
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [DatePipe]
})
export class ListComponent implements OnInit {

  date1: Date
  date2: Date
  someError: boolean = false
  errorText: string

  listRemont: IRemont[]
  listRemontByDate: IRemont[]

  token: string | null

  statuses: any[];
  alldefects: boolean = false

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(public api: BackendapiService, private datePipe: DatePipe) { }

  async ngOnInit(): Promise<void> {
    this.token = localStorage.getItem("token")
    this.listRemont = await this.api.getRemontListToday(this.token)
    console.log(this.listRemont)
    
  }

  clear(table: Table) {
    table.clear();
}
  async allDefects(){
    this.listRemont.forEach(
      listRemont => (listRemont.vaqt = new Date(listRemont.vaqt))
    );
    console.log(this.listRemont[0].vaqt)
    this.loading = false;
  }

  async onPicked(){
    this.loading = false;
    this.someError = false
    // console.log("date1: ", this.date1.toDateString(), "  date2: ", this.date2.toDateString())
    if (this.date1 > this.date2){
      this.someError = true
      this.errorText = `Sana noto'g'ri tanlandi`
      return
    }
    if (this.date1 == undefined || this.date2 == undefined){
      this.someError = true
      this.errorText = `Sana tanlanmadi`
      return
    }
    this.listRemontByDate = await this.api.getRemontListByDate(this.transformDate(this.date1), this.transformDate(this.date2), 2, this.token)
    this.alldefects = true
    
    // this.countAssembly = await this.api.reportByDate(this.transformDate(this.date1), this.transformDate(this.date2), 2, this.token)
    // console.log(this.countAssembly)
    // if(this.countAssembly.error){
    //   localStorage.clear()
    //   location.reload()
    //   window.location.href = "/"
    //   console.log(this.countAssembly.error)
    // }
    // this.byModelAssembly = await this.api.reportByDateModels(this.transformDate(this.date1), this.transformDate(this.date2), 2, this.token)
    // this.countPacking = await this.api.reportByDate(this.transformDate(this.date1), this.transformDate(this.date2), 13, this.token)
    // this.byModelPacking = await this.api.reportByDateModels(this.transformDate(this.date1), this.transformDate(this.date2), 13, this.token)
    // this.exports = true
  }
  transformDate(date: Date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

}
