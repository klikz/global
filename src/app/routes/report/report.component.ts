import { Component, OnInit } from '@angular/core';
import { BackendapiService } from 'src/app/services/backendapi.service';
import { DatePipe } from '@angular/common';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [DatePipe]

})
export class ReportComponent implements OnInit {
  date1: Date
  date2: Date
  someError: boolean = false
  errorText: string
  token: string | null
  exports: boolean = false

  countAssembly: any
  byModelAssembly: any
  countPacking: any
  byModelPacking: any
  reportExcel: any

  constructor(public api: BackendapiService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.token = localStorage.getItem("token")
  }

  async onPicked(){
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
    this.countAssembly = await this.api.reportByDate(this.transformDate(this.date1), this.transformDate(this.date2), 2, this.token)
    console.log(this.countAssembly)
    if(this.countAssembly.error){
      localStorage.clear()
      location.reload()
      window.location.href = "/"
      console.log(this.countAssembly.error)
    }
    this.byModelAssembly = await this.api.reportByDateModels(this.transformDate(this.date1), this.transformDate(this.date2), 2, this.token)
    this.countPacking = await this.api.reportByDate(this.transformDate(this.date1), this.transformDate(this.date2), 13, this.token)
    this.byModelPacking = await this.api.reportByDateModels(this.transformDate(this.date1), this.transformDate(this.date2), 13, this.token)
    this.exports = true
  }

  transformDate(date: Date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  async exportExcel() {
    this.reportExcel = await this.api.reportByDateSerial(this.transformDate(this.date1), this.transformDate(this.date2), 13, this.token)
    console.log(this.reportExcel)
      import("xlsx").then(xlsx => {
          const worksheet = xlsx.utils.json_to_sheet(this.reportExcel);
          const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
          const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
          this.saveAsExcelFile(excelBuffer, "packing");
      });

  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let year = new Date().getFullYear()
    let month = new Date().getMonth()
    let day = new Date().getDay()
    let hour = new Date().getHours()
    let minut = new Date().getMinutes()
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
    });
    // FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    FileSaver.saveAs(data, fileName + '_export_' + `${year}_${month}_${day}-${hour}_${minut}` + EXCEL_EXTENSION);
}


}
