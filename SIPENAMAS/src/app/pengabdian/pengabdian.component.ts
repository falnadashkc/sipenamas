import { Component, OnInit } from '@angular/core';

export class Pengabdian {
  '_id' : string;
  'judul' : string;
  'tempat' : string;
  'deskripsi' : string;
  'tgl_pengabdian' : any;
  'dosen' : string;
  'mahasiswa' : string[];
}
@Component({
  selector: 'app-pengabdian',
  templateUrl: './pengabdian.component.html',
  styleUrls: ['./pengabdian.component.css']
})
export class PengabdianComponent implements OnInit {

  // constructor() { }
  // pengabdian: Pengabdian[] = [{
  //   _id : '0001',
  //   judul: 'stack is life',
  //   tempat : 'Hiroshima',
  //   deskripsi: 'Ini Deskripsi',
  //   tgl_pengabdian: '2002-11-01',
  //   dosen: 'Nur Rachmat',
  //   mahasiswa: ['nobutani', 'Taniguchi'],
  // }]
  ngOnInit(): void {
    this.getListPenelitian();
}
}