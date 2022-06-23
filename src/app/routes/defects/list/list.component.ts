import { Component, OnInit } from '@angular/core';

import {IRemont} from 'src/app/models/models'
import { BackendapiService } from 'src/app/services/backendapi.service'
 
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listRemont: IRemont[]
  token: string | null

  constructor(public api: BackendapiService) { }

  async ngOnInit(): Promise<void> {
    this.token = localStorage.getItem("token")
    this.listRemont = await this.api.getRemontList("null", "null", 0, this.token)
  }

}
