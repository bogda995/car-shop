import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {Car} from "../common/model/car";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  // public carsList: Car[] = [
  //   {
  //     id: 1,
  //     name: 'Ferrari',
  //     motor: 'F173',
  //     horsePower: '986',
  //     model: 'SF90 Stradale',
  //     torque: '800Nm',
  //     description: 'The car shares its name with the SF90 Formula One car with SF90 standing for the 90th anniversary of the Scuderia Ferrari',
  //     price: 625000,
  //     inStock: true,
  //     imgUrl: ['./assets/img/a2026052.jpg']
  //   },
  //   {
  //     id: 2,
  //     name: 'BMW',
  //     motor: '4.4L twin-turbocharged V8',
  //     horsePower: '617',
  //     model: 'M8 Gran Coupe',
  //     torque: '750Nm',
  //     description: '',
  //     price: 160000,
  //     inStock: false,
  //     imgUrl: ['./assets/img/a6863569.jpg']
  //   },
  //   {
  //     id: 3,
  //     name: 'Porche',
  //     motor: '4.4L twin-turbocharged V8',
  //     horsePower: '700',
  //     model: 'Panamera Turbo S E-Hybrid',
  //     torque: '870Nm',
  //     description: '',
  //     price: 250000,
  //     inStock: true,
  //     imgUrl: ['./assets/img/a7543885.jpg']
  //   },
  //   {
  //     id: 4,
  //     name: 'Toyota',
  //     motor: '',
  //     horsePower: '249hp',
  //     model: 'Land Cruiser',
  //     torque: '381Nm',
  //     description: '',
  //     price: 80000,
  //     inStock: true,
  //     imgUrl: ['./assets/img/tlc/tlc1.jpg']
  //   },
  //   {
  //     id: 5,
  //     name: 'Porche',
  //     motor: '3.0L Turbocharged H6',
  //     horsePower: '385 hp',
  //     model: '991 Coupé',
  //     torque: '450Nm',
  //     description: '2021',
  //     price: 250000,
  //     inStock: true,
  //     imgUrl: ['./assets/img/pc991/pc1.jpg']
  //   },
  //   {
  //     id: 6,
  //     name: 'Mercedes-Benz',
  //     motor: '4.0L Turbocharged',
  //     horsePower: '510 hp',
  //     model: 'C -Klasse Coupe C 63 S AMG',
  //     torque: '700Nm',
  //     description: '',
  //     price: 150000,
  //     inStock: true,
  //     imgUrl: ['./assets/img/mbc63/mbc1.jpg']
  //   },
  //   {
  //     id: 7,
  //     name: 'Jeep',
  //     motor: '6.4L V8Hemi',
  //     horsePower: '470 hp',
  //     model: 'Grand Wagoneer',
  //     torque: '617 Nm',
  //     description: '',
  //     price: 170000,
  //     inStock: true,
  //     imgUrl: ['./assets/img/jgcw/jgcw1.jpg']
  //   },
  //   {
  //     id: 8,
  //     name: 'Cadillac',
  //     motor: '',
  //     horsePower: '426 hp',
  //     model: 'Escalade',
  //     torque: '624 Nm',
  //     description: '',
  //     price: 180000,
  //     inStock: true,
  //     imgUrl: ['./assets/img/ce/ce1.jpg']
  //   },
  //   {
  //     id: 9,
  //     name: 'Bentley',
  //     motor: 'V12 turbocharged',
  //     horsePower: '659 hp',
  //     model: 'Continental',
  //     torque: '900 Nm',
  //     description: '',
  //     price: 300000,
  //     inStock: true,
  //     imgUrl: ['./assets/img/bc/bc1.jpg']
  //   }
  // ];

  private serverUrl = 'https://car-shop-api.netlify.app/';

  constructor(private httpClient: HttpClient) {
  }

  public getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.serverUrl + '/cars')
  }

  public getCar(id: string): Promise<Car | undefined>{
    // const url = `${this.serverUrl}/${id}`
    return this.httpClient.get<Car>(`${this.serverUrl}/cars/${id}`).toPromise();
  }

  // private createHeader(contentType: string): any {
  //   return { headers: new HttpHeaders({ 'Content-Type': contentType }), responseType: 'text' };
  // }
  
}
