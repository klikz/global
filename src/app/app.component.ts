import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  items: MenuItem[];

  email: string | null
  role: string | null
  isAuth: boolean = false



  
  constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService){}


  async ngOnInit(): Promise<void> {
    this.email = localStorage.getItem("email")
    this.role = localStorage.getItem("role")
    this.primengConfig.ripple = true;

    if(this.role && this.email){
      this.isAuth = true 
    }
    switch (this.role) {
      case "user":
    this.items = [{
      label: 'Report',
      items: [{
          label: 'Liniyalar',
          icon: 'pi pi-server',
          routerLink: '/lines'
      },
      {
        label: 'Xisobot',
        icon: 'pi pi-file-excel',
        routerLink: '/report'
      },
      ]},
      {
        label: 'Defects',
        items: [{
          label: 'Kiritish',
          icon: 'pi pi-exclamation-triangle',
          routerLink: '/defects'
      },
      {
        label: 'List',
        icon: 'pi pi-list',
        routerLink: '/defects/list'
      },
      {
        label: "Ta'mirlash",
        icon: 'pi pi-cog',
        routerLink: '/defects/repair'
      },
      ]}
      
  ];
        break;
        default:
          this.items = [
            {label: 'Login', icon: 'pi pi-list', routerLink: '/login'}
        ];
          break;
    }


  }

  logout(){
    localStorage.clear()
    location.reload()
    this.isAuth = false
    window.location.href = "/"
    // location.reload()
}

   


}
