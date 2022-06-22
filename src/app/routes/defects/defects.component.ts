import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

import { BackendapiService } from 'src/app/services/backendapi.service';

import {IRemontTypes, ILines} from 'src/app/models/models'
import { BarcodeFormat } from '@zxing/library';
import { BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';
import { BehaviorSubject } from 'rxjs';

// import { MatDialog } from '@angular/material/dialog';
// import { FormatsDialogComponent } from './formats-dialog/formats-dialog.component';
interface Transport {
  plates: string;
  slot: Slot;
}

interface Slot {
  name: string;
  description: string;
}


@Component({
  selector: 'app-defects',
  templateUrl: './defects.component.html',
  styleUrls: ['./defects.component.css'],
  providers: [MessageService, ConfirmationService, BarcodeScannerLivestreamComponent],
})
export class DefectsComponent implements OnInit {

  items: MenuItem[];

  lines: ILines[];
  selectedLine: ILines
  activeTypes: IRemontTypes[] = []
  selectedActiveType: IRemontTypes = {
    id: 0, 
    defect_name: "",
    line_id: 0, 
    name: ""
  }
  someError: boolean = false
  errorText: any
  remontTypesAll: IRemontTypes[]
  serial: string = ''
  scannerEnabled: boolean = false;
  // transports: Transport[] = [];
  // information: string = "No se ha detectado información de ningún código. Acerque un código QR para escanear.";
  availableDevices: MediaDeviceInfo[];
  deviceCurrent: MediaDeviceInfo | undefined;
  deviceSelected: string | null;


  formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.EAN_13
  ];

  hasDevices: boolean;
  hasPermission: boolean;

  qrResultString: string | null;

  torchEnabled = false;
  torchAvailable$ = new BehaviorSubject<boolean>(false);
  tryHarder = true;

  constructor(public api: BackendapiService, 
    private messageService: MessageService, 
    public confirmationService: ConfirmationService,
    // private readonly _dialog: MatDialog
    ) { }

  async ngOnInit(): Promise<void> {

    this.items = [{
      items: [{
          label: 'Enable Try-harder',
          icon: 'pi pi-server',
          command: () => {
            this.toggleTryHarder()
          } 
      },
      {
        label: 'Enable Torch',
        icon: 'pi pi-filter',
        command: () => {
          this.toggleTorch()
        } 
      },
      ]}
  ];

    this.remontTypesAll = await this.api.getDefectsTypes()
    this.lines = await this.api.getLines()  
  }
  async defKiritish(){
    if(this.serial == "" || this.selectedActiveType.name == ""){
      this.someError = true
      this.errorText = "Ma'lumotlar to'liq kiritilmadi"
      return
    }
    this.someError = false
    console.log(this.selectedLine.name, "name: ", this.selectedActiveType.id, this.serial)
  }
  lineChanged(){
    this.activeTypes = []
    // console.log(this.selectedLine)
    for(let i = 0; i < this.remontTypesAll.length; i++){
      if(this.remontTypesAll[i].line_id == this.selectedLine.id){
        console.log(this.remontTypesAll[i])
        this.activeTypes.push(this.remontTypesAll[i])
      }
    }
  }

  cameraOn(){
    this.scannerEnabled = !this.scannerEnabled
  }
  clearResult(): void {
    this.qrResultString = null;
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
  }

  onCodeResult(resultString: string) {
    console.log(resultString)
    this.scannerEnabled = false
    // this.qrResultString = resultString;
    this.serial = resultString
  }

  onDeviceSelectChange(selected: string) {
    const selectedStr = selected || '';
    if (this.deviceSelected === selectedStr) { return; }
    this.deviceSelected = selectedStr;
    const device = this.availableDevices.find(x => x.deviceId === selected);
    this.deviceCurrent = device || undefined;
  }

  onDeviceChange(device: MediaDeviceInfo) {
    const selectedStr = device?.deviceId || '';
    if (this.deviceSelected === selectedStr) { return; }
    this.deviceSelected = selectedStr;
    this.deviceCurrent = device || undefined;
  }

  openFormatsDialog() {
    const data = {
      formatsEnabled: this.formatsEnabled,
    };

    // this._dialog
    //   .open(FormatsDialogComponent, { data })
    //   .afterClosed()
    //   .subscribe(x => {
    //     if (x) {
    //       this.formatsEnabled = x;
    //     }
    //   });
  }

  onHasPermission(has: boolean) {
    this.hasPermission = has;
  }

  openInfoDialog() {
    const data = {
      hasDevices: this.hasDevices,
      hasPermission: this.hasPermission,
    };

    // this._dialog.open(AppInfoDialogComponent, { data });
  }

  onTorchCompatible(isCompatible: boolean): void {
    this.torchAvailable$.next(isCompatible || false);
  }

  toggleTorch(): void {
    this.torchEnabled = !this.torchEnabled;
  }

  toggleTryHarder(): void {
    this.tryHarder = !this.tryHarder;
  }


}
