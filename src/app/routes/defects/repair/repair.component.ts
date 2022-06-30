import { Component, OnInit } from '@angular/core';

import {IRemont} from 'src/app/models/models'
import { BackendapiService } from 'src/app/services/backendapi.service'

interface Transport {
  plates: string;
  slot: Slot;
}

interface Slot {
  name: string;
  description: string;
}


@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})
export class RepairComponent implements OnInit {

  listRemont: IRemont[]
  token: string | null
  selectedId: IRemont
  someError: boolean = false
  errorText: string = ""
  selected: boolean = false
  processed: boolean = false

  constructor(public api: BackendapiService) { }

  async ngOnInit(): Promise<void> {
    this.token = localStorage.getItem("token")
    this.listRemont = await this.api.getRemontList(this.token)
  }
  async update(){
    let result = await this.api.updateRemont(this.selectedId.id, this.token)
    if (result.error){
      this.processed = false
      this.someError = true
      this.errorText = result.error
      return
    }
    this.selected = false
    this.processed = true
    this.listRemont = await this.api.getRemontList(this.token)
  }
}
