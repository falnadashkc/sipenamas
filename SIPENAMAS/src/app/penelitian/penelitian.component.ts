import { Component, OnInit } from '@angular/core';
import { SipenamasDataService } from '../sipenamas-data.service';

export class Penelitian {
    '_id' : string;
    'judul' : string;
    'deskripsi' : string;
    'tgl_publikasi' : any;
    'jurnal_publikasi' : string;
    'dosen_peneliti' : string[];
}
@Component({
  selector: 'app-penelitian',
  templateUrl: './penelitian.component.html',
  styleUrls: ['./penelitian.component.css']
})
export class PenelitianComponent implements OnInit {

constructor(private sipenamasDataService: SipenamasDataService) { }
public penelitian: Penelitian[] = [];
private getListPenelitian(): void {
  this.sipenamasDataService
  .getListPenelitian()
  .then(foundListPenelitian => {
    this.penelitian = foundListPenelitian
  });

}
  // constructor() { }
  // penelitian: Penelitian[] = [{
  //   _id: '0001',
  //   judul: 'Mean Stack',
  //   deskripsi: 'Ini Deskripsi',
  //   tgl_publikasi: '2002-11-01',
  //   jurnal_publikasi: 'MDP',
  //   dosen_peneliti: ['Tohru', 'Kobayashi'],
  // },
  // {
  //   _id: '0002',
  //   judul: 'Mern Stack',
  //   deskripsi: 'Ini Deskripsi',
  //   tgl_publikasi: '2002-11-01',
  //   jurnal_publikasi: 'MDP',
  //   dosen_peneliti: ['Kanna', 'Kobayashi'],
  // }]
  ngOnInit(): void {
    // panggil method ini
    this.getListPenelitian();

    //tujuan: method dipanggil ketika komponen di inisiasi
  }

}
