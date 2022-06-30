import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/config/config.service'

@Injectable({
  providedIn: 'root'
})
export class BackendapiService {

  constructor(public config: ConfigService, public http: HttpClient) { }

  public async GetInfoBySerial(serial: string){
    let data = {
      serial
    }
    return new Promise<any>((resolve) => {
      this.http.post<any>('/api/checkserial', data).subscribe(e=>{
          resolve(e);
        })
      })
    }

  public async updateRemont(id: number, token: any){
    let data = {
      id,
      token
    }
    return new Promise<any>((resolve) => {
      this.http.post<any>('/api/report/remont/update', data).subscribe(e=>{
          resolve(e);
        })
      })
    }
    public async getRemontListByDate(date1: any, date2: any, line: number, token: any){
      let data = {
        date1,
        date2,
        line,
        token
      }
      return new Promise<any>((resolve) => {
        this.http.post<any>('/api/report/remont/bydate', data).subscribe(e=>{
            resolve(e);
          })
        })
      }
    public async getRemontList(token: any){
    let data = {
      token
    }
    return new Promise<any>((resolve) => {
      this.http.post<any>('/api/report/remont', data).subscribe(e=>{
          resolve(e);
        })
      })
    }

  public async getRemontListToday(token: any){
    let data = {
      token
    }
    return new Promise<any>((resolve) => {
      this.http.post<any>('/api/report/remont/today', data).subscribe(e=>{
          resolve(e);
        })
      })
    }

  public async addDefects(serial: string, checkpoint: number, defect: number, token: any, name: string){
    let data = {
      serial,
      checkpoint,
      defect,
      token,
      name
    }
    return new Promise<any>((resolve) => {
      this.http.post<any>('/api/production/defects/add', data).subscribe(e=>{
          resolve(e);
        })
      })
    }
  public async addDefectsTypes(body: any){
    return new Promise<any>((resolve) => {
      this.http.post<any>('/api/production/defects/types/add', body).subscribe(e=>{
          resolve(e);
        })
      })
    }
  public async deleteDefectsTypes(body: any){
    return new Promise<any>((resolve) => {
      this.http.post<any>('/api/production/defects/types/delete', body).subscribe(e=>{
          resolve(e);
        })
      })
    }
  public async getLines(token: any){
    let data = {
      token
    }
    return new Promise<any>((resolve) => {
      this.http.post<any>('/api/production/lines', data).subscribe(e=>{
          resolve(e);
        })
      })
    }
  
  public async getDefectsTypes(token: any){
    return new Promise<any>((resolve) => {
      this.http.post<any>('/api/production/defects/types', {token}).subscribe(e=>{
          resolve(e);
        })
      })
    }


  public async Auth (body: any){
    return new Promise<any>((resolve) => {
      this.http.post<any>('api/login', body
      ).subscribe(e=>{
          resolve(e);
        })
      })
  }
  public async reportByDateSerial(date1: any, date2: any, line: number, token: any){
    let data = {
      date1,
      date2,
      line,
      token
    }
    return new Promise<any>((resolve) => {
      this.http.post<any>('/api/report/bydate/models/serial', data).subscribe(e=>{
          resolve(e);
        })
      })
    }
  
  public async reportByDateModels(date1: any, date2: any, line: number, token: any){
    let data = {
      date1,
      date2,
      line,
      token
    }
    return new Promise<any>((resolve) => {
      this.http.post<any>('/api/report/bydate/models', data).subscribe(e=>{
          resolve(e);
        })
      })
    }

  public async reportByDate(date1: any, date2: any, line: number, token: any){
    let data = {
      date1,
      date2,
      line,
      token
    }
    return new Promise<any>((resolve) => {
      this.http.post<any>('/api/report/bydate', data).subscribe(e=>{
          resolve(e);
        })
      })
    }

  public async getToday(line: number, token: any){
    let data = {
      line,
      token
    }
    return new Promise<any>((resolve) => {
      this.http.post<any>('/api/production/today', data).subscribe(e=>{
          resolve(e);
        })
      })
    }
  public async getTodayByModels(line: number, token: any){
    let data = {
      line,
      token
    }
      return new Promise<any[]>((resolve) => {
        this.http.post<any[]>('/api/production/today/models', data).subscribe(e=>{
            resolve(e);
          })
        })
      }
  public async getPackingToday(body: number, token: any){
    let data = {
      line: body,
      token
    }
    return new Promise<any>((resolve) => {
      this.http.post<any>('/api/production/packing/today', data).subscribe(e=>{
          resolve(e);
        })
      })
    }
  public async getPackingTodayByModels(body: any, token: any){
    let data = {
      line: body,
      token
    }
      return new Promise<any[]>((resolve) => {
        this.http.post<any[]>('/api/production/packing/today/models', data).subscribe(e=>{
            resolve(e);
          })
        })
      }

}
