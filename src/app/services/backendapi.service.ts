import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/config/config.service'

@Injectable({
  providedIn: 'root'
})
export class BackendapiService {

  constructor(public config: ConfigService, public http: HttpClient) { }
  public async updateRemont(date1: any, date2: any, line: number, token: any){
    let data = {
      date1,
      date2,
      line,
      token
    }
    return new Promise<any>((resolve) => {
      this.http.post<any>('/api/report/remont/update', data).subscribe(e=>{
          resolve(e);
        })
      })
    }

  public async getRemontList(date1: any, date2: any, line: number, token: any){
    let data = {
      date1,
      date2,
      line,
      token
    }
    return new Promise<any>((resolve) => {
      this.http.post<any>('/api/report/remont', data).subscribe(e=>{
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
  public async getLines(){
    return new Promise<any>((resolve) => {
      this.http.post<any>('/api/production/lines', "null").subscribe(e=>{
          resolve(e);
        })
      })
    }
  
  public async getDefectsTypes(){
    return new Promise<any>((resolve) => {
      this.http.post<any>('/api/production/defects/types', "null").subscribe(e=>{
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

  public async getToday(body: any){
    return new Promise<any>((resolve) => {
      this.http.post<any>('/api/production/today', body).subscribe(e=>{
          resolve(e);
        })
      })
    }
  public async getTodayByModels(body: any){
      return new Promise<any[]>((resolve) => {
        this.http.post<any[]>('/api/production/today/models', body).subscribe(e=>{
            resolve(e);
          })
        })
      }
  public async getPackingToday(body: any){
    return new Promise<any>((resolve) => {
      this.http.post<any>('/api/production/packing/today', body).subscribe(e=>{
          resolve(e);
        })
      })
    }
  public async getPackingTodayByModels(body: any){
      return new Promise<any[]>((resolve) => {
        this.http.post<any[]>('/api/production/packing/today/models', body).subscribe(e=>{
            resolve(e);
          })
        })
      }

}
